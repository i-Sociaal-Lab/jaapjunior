# Azure Herindexering Handleiding

**Voor beheerders:** Hoe je de documentindex op Azure kunt verversen

---

## 📋 Wanneer moet je herindexeren?

Herindexeer de chatbot wanneer:
- ✅ Er nieuwe documenten zijn toegevoegd aan de kennisbank
- ✅ Bestaande documenten zijn gewijzigd of bijgewerkt
- ✅ De chatbot geeft verouderde of incorrecte informatie
- ✅ Na een deployment van nieuwe code

---

## 🖱️ Methode 1: Via Azure Portal (Geen CLI nodig!)

**Gebruik deze methode als:** Je wilt de chatbot snel herstarten via de webinterface.

### Stap 1: Log in bij Azure Portal

1. Ga naar: https://portal.azure.com
2. Log in met je Azure account

### Stap 2: Zoek de Container App

1. Klik op de zoekbalk bovenaan
2. Type: `jaapjunior-api`
3. Klik op **jaapjunior-api** (Container App)

Of via het menu:
1. Klik op **Resource groups** in het linker menu
2. Klik op **chatbot_jaapjunior_rg**
3. Klik op **jaapjunior-api** in de lijst

### Stap 3: Herstart de container

1. In het jaapjunior-api scherm, klik op **Restart** bovenaan
2. Bevestig door op **Yes** te klikken
3. Wacht 1-2 minuten tot de status weer **Running** is

### Stap 4: Controleer de status

1. Klik op **Revisions and replicas** in het linker menu
2. Controleer dat de status **Running** is (groen vinkje)
3. Klik op **Metrics** om te zien of er verkeer binnenkomt

### Stap 5: Test de chatbot

Ga naar: https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io

Stel een testvraag om te controleren of alles werkt.

**⏱️ Tijdsduur:** 2-3 minuten

---

## 💻 Methode 2: Via Azure CLI (Voor gevorderden)

**Gebruik deze methode als:** Je CLI gewend bent of een script wilt maken.

### Stap 1: Log in bij Azure

Open een terminal/command prompt en voer uit:

```bash
az login
```

Er opent een browser window. Log in met je Azure account.

### Stap 2: Herstart de API container

```bash
az containerapp restart \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg
```

**Wat gebeurt er:**
- De API container wordt opnieuw opgestart
- Bij de eerste vraag aan een agent wordt deze opnieuw geïndexeerd
- Dit duurt ongeveer 1-2 minuten

### Stap 3: Test de chatbot

Ga naar: https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io

**⏱️ Tijdsduur:** 2-3 minuten

---

## 🔄 Methode 3: Volledige Rebuild met Nieuwe Documenten

**Gebruik deze methode als:** Er zijn nieuwe documenten toegevoegd aan GitHub en je wilt deze gebruiken.

⚠️ **Let op:** Dit vereist Azure CLI en toegang tot de source code.

### Via Azure Portal (Handmatig)

1. Log in bij https://portal.azure.com
2. Zoek **jaapjuniorregistry** (Container Registry)
3. Klik op **Tasks** in het linker menu
4. Klik op **Quick run**
5. Vul in:
   - **Source location:** GitHub
   - **Repository URL:** `https://github.com/i-Sociaal-Lab/jaapjunior.git`
   - **Branch:** `main`
   - **Dockerfile:** `packages/api/Dockerfile.combined`
   - **Image name:** `jaapjunior-api:latest`
6. Klik op **Run**
7. Wacht 5-10 minuten tot de build klaar is
8. Ga terug naar **jaapjunior-api** Container App
9. Klik op **Restart** om de nieuwe image te gebruiken

### Via Azure CLI

```bash
# 1. Log in
az login

# 2. Ga naar de code folder
cd /pad/naar/jaapjunior

# 3. Bouw nieuwe container image
az acr build \
  --registry jaapjuniorregistry \
  --image jaapjunior-api:latest \
  --file packages/api/Dockerfile.combined \
  --platform linux/amd64 \
  .

# 4. Deploy de nieuwe image
az containerapp update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --image jaapjuniorregistry.azurecr.io/jaapjunior-api:latest
```

**⏱️ Tijdsduur:** 10-15 minuten

---

## 🔍 Status Controleren

### Via Azure Portal

1. Ga naar https://portal.azure.com
2. Zoek **jaapjunior-api**
3. Kijk naar **Status** (moet **Running** zijn)
4. Klik op **Logs** in het linker menu om recente activiteit te zien
5. Klik op **Metrics** om verkeer en performance te monitoren

**Belangrijke metrics:**
- **Replica Count:** Aantal draaiende instances (normaal: 1)
- **CPU Usage:** CPU gebruik (normaal: < 50%)
- **Memory Working Set:** Geheugen gebruik
- **Requests:** Aantal inkomende requests

### Via Azure CLI

```bash
# Check of de API draait
az containerapp show \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --query "properties.runningStatus" \
  --output tsv

# Bekijk recente logs
az containerapp logs show \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --tail 50
```

### Via de Chatbot API

Open je browser en ga naar:

```
https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/api/v1/agents
```

Je moet dit zien:
```json
{
  "agents": [
    { "id": "jw", "label": "JW" },
    { "id": "wmo", "label": "WMO" },
    { "id": "cs-wmo", "label": "CS-WMO" }
  ],
  "defaultAgent": "cs-wmo"
}
```

---

## ❌ Problemen Oplossen

### Probleem: Container start niet na herstart

**Via Azure Portal:**

1. Ga naar **jaapjunior-api** in Azure Portal
2. Klik op **Revisions and replicas** in het linker menu
3. Zie je meerdere revisies? Klik op een eerdere werkende revisie
4. Klik bovenaan op **Activate**
5. Zet traffic naar 100% voor deze revisie

**Via Azure CLI:**

```bash
# Bekijk alle revisies
az containerapp revision list \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --output table

# Activeer een eerdere werkende revisie (vervang <revision-name>)
az containerapp revision activate \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --revision <revision-name>
```

---

### Probleem: Chatbot geeft nog steeds oude informatie

**Oplossing 1 - Hard Restart via Portal:**

1. Ga naar **jaapjunior-api** in Azure Portal
2. Klik op **Revisions and replicas**
3. Klik op de actieve revisie
4. Klik op **Restart** bij elke replica

**Oplossing 2 - Nieuwe Revisie via Portal:**

1. Ga naar **jaapjunior-api** in Azure Portal
2. Klik op **Revision management** in het linker menu
3. Klik op **Create new revision**
4. Klik op **Create** (zonder iets te wijzigen)
5. Dit forceert een volledig nieuwe deployment

**Oplossing 3 - Via CLI:**

```bash
# Force een volledige herstart met nieuwe revisie
az containerapp revision copy \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg
```

---

### Probleem: "Access Denied" in Azure Portal

**Oplossing:** Je hebt geen rechten voor deze resource.

Vraag een beheerder om je de rol **Contributor** of **Owner** te geven voor:
- Resource Group: **chatbot_jaapjunior_rg**

Of minimaal de rol **Azure Container Apps Contributor** voor alleen de container apps.

---

### Probleem: Build mislukt in Container Registry

**Via Azure Portal:**

1. Ga naar **jaapjuniorregistry** (Container Registry)
2. Klik op **Tasks** → **Runs**
3. Klik op de mislukte run
4. Bekijk de logs om te zien wat er fout ging
5. Meest voorkomende oorzaken:
   - GitHub niet bereikbaar
   - Dockerfile niet gevonden
   - Build timeout (te lang geduurd)

---

## 🎯 Snelle Referentie

### Azure Portal Links

| Resource | Direct Link |
|----------|-------------|
| Container App (API) | https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.App%2FcontainerApps |
| Resource Group | https://portal.azure.com/#@/resource/subscriptions/{subscription-id}/resourceGroups/chatbot_jaapjunior_rg/overview |
| Container Registry | https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.ContainerRegistry%2Fregistries |

### CLI Commando's

| Actie | Commando |
|-------|----------|
| Inloggen | `az login` |
| Snelle herstart | `az containerapp restart --name jaapjunior-api --resource-group chatbot_jaapjunior_rg` |
| Status checken | `az containerapp show --name jaapjunior-api --resource-group chatbot_jaapjunior_rg` |
| Logs bekijken | `az containerapp logs show --name jaapjunior-api --resource-group chatbot_jaapjunior_rg --tail 50` |
| Revisies bekijken | `az containerapp revision list --name jaapjunior-api --resource-group chatbot_jaapjunior_rg --output table` |

---

## ✅ Checklist voor Herindexering

Gebruik deze checklist bij elke herindexering:

- [ ] Ingelogd bij Azure (Portal of CLI)
- [ ] Juiste methode gekozen (Methode 1, 2 of 3)
- [ ] Container herstart
- [ ] Status gecontroleerd: **Running**
- [ ] Chatbot getest met testvraag op https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io
- [ ] Logs gecontroleerd op errors (via Portal of CLI)
- [ ] Metrics bekeken voor normaal verkeer
- [ ] Werkt alles naar verwachting? ✅

---

## 📊 Normale Waarden (Performance)

Na herstart moet je deze waarden zien:

| Metric | Normale Waarde | Actie bij afwijking |
|--------|----------------|---------------------|
| Status | Running (groen) | Herstart of rollback |
| Replica Count | 1 | Controleer scaling settings |
| CPU Usage | < 50% | Controleer logs voor loops |
| Memory | < 1GB | Controleer voor memory leaks |
| HTTP Response Time | < 2 sec | Check Qdrant status |
| Error Rate | 0% | Bekijk logs voor errors |

---

## 📞 Hulp Nodig?

Als je er niet uitkomt:

1. **Check de logs** (zie "Status Controleren" hierboven)
2. **Maak een screenshot** van de error in Azure Portal
3. **Kopieer de error message** uit de logs
4. **Neem contact op** met de ontwikkelaar en stuur:
   - Screenshot van de Azure Portal status
   - Error message uit de logs
   - Welke stappen je hebt uitgevoerd
   - Tijdstip van de poging

---

**Laatst bijgewerkt:** November 2025
**Versie:** 1.0
