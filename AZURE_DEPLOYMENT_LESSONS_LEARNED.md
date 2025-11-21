# Azure Deployment - Lessons Learned

## Datum: 21 November 2025

## Probleem: 301 Redirect Errors op Internal API

### Symptomen
- Browser console toonde 301 redirects van public URL naar internal Azure URL
- CORS errors omdat browser naar `*.internal.*` URL werd geredirect
- Frontend kon API niet bereiken

### Root Cause
Azure Container Apps met **internal ingress** had `allowInsecure: false`, wat betekent dat:
- ALLEEN HTTPS verkeer wordt geaccepteerd
- HTTP requests worden automatisch geredirect naar HTTPS (301 redirect)
- De nginx proxy in de frontend probeerde HTTP te gebruiken naar de internal API URL
- Dit resulteerde in 301 redirects die in de browser als CORS errors verschenen

### Oplossing
Enable `allowInsecure` op de **internal** API ingress zodat HTTP verkeer toegestaan wordt binnen het Azure netwerk:

```bash
az containerapp ingress update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --allow-insecure
```

### Juiste Configuratie voor Azure Container Apps

#### Voor INTERNAL ingress (backend services):
```bash
az containerapp ingress update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --type internal \
  --allow-insecure \
  --target-port 3000
```

**Waarom `allow-insecure` nodig is:**
- Internal services binnen Azure netwerk kunnen veilig HTTP gebruiken
- HTTPS overhead is onnodig voor intern verkeer
- Voorkomt 301 redirect loops

#### Voor EXTERNAL ingress (frontend):
```bash
az containerapp ingress update \
  --name jaapjunior \
  --resource-group chatbot_jaapjunior_rg \
  --type external \
  --target-port 80
```

**Waarom GEEN `allow-insecure` voor external:**
- External ingress moet HTTPS forceren voor security
- Azure Container Apps handelt SSL termination automatisch af

### Environment Variables

De frontend nginx gebruikt runtime configuratie via environment variables:

```bash
# Frontend Container App environment variables
API_BACKEND_URL=http://jaapjunior-api.internal.bluerock-7a3df5c8.westeurope.azurecontainerapps.io
```

**Let op:** Gebruik `http://` (niet `https://`) voor internal URLs als `allow-insecure` enabled is.

### Verificatie

Test of de configuratie correct is:

```bash
# Test API endpoint via frontend
curl -s -o /dev/null -w "HTTP %{http_code}\n" \
  "https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/api/v1/authenticated"
```

**Verwachte response:** HTTP 401 (unauthenticated request is correct)
**Fout response:** HTTP 301 (betekent allow-insecure is niet enabled)

### Deployment Checklist

Bij elke nieuwe deployment:

- [ ] Verify API ingress heeft `allowInsecure: true` en `type: internal`
- [ ] Verify Frontend ingress heeft `type: external`
- [ ] Verify `API_BACKEND_URL` environment variable is set op frontend
- [ ] Test API endpoint geeft HTTP 401 (niet 301)
- [ ] Check browser console voor CORS errors

### Fallback Strategie

Als deployment faalt:

1. **Check ingress configuratie:**
   ```bash
   az containerapp ingress show --name jaapjunior-api --resource-group chatbot_jaapjunior_rg
   ```

2. **Rollback naar werkende revisie:**
   ```bash
   # Set traffic to oude werkende revisie
   az containerapp revision set-mode --name jaapjunior --resource-group chatbot_jaapjunior_rg --mode multiple
   az containerapp ingress traffic set --name jaapjunior --resource-group chatbot_jaapjunior_rg --revision-weight <revision-name>=100
   ```

3. **Re-enable allow-insecure als nodig:**
   ```bash
   az containerapp ingress update --name jaapjunior-api --resource-group chatbot_jaapjunior_rg --allow-insecure
   ```

### Best Practices

1. **Altijd use internal ingress voor backend services** - Voorkomt directe publieke toegang
2. **Enable allow-insecure voor internal services** - Voorkomt 301 redirects
3. **Test na elke deployment** - Verify geen 301 errors
4. **Document environment variables** - Zodat runtime configuratie duidelijk is
5. **Keep revision history** - Altijd kunnen rollbacken naar werkende versie

## Architecture Overview

```
Internet → [External HTTPS] → Frontend Container (nginx)
                                     ↓
                              [Internal HTTP]
                                     ↓
                              API Container (Node.js + Qdrant)
```

**Key Points:**
- External traffic: HTTPS only (enforced door Azure)
- Internal traffic: HTTP (allow-insecure enabled)
- Nginx proxy handelt routing van frontend naar API
