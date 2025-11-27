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

⚠️ **Belangrijk:** Herstart altijd via **Revisions**, niet via de Stop knop!

1. Klik in het linker menu op:
   - **Revision management** (nieuwere Azure Portal), OF
   - **Revisions and replicas** (oudere Azure Portal)
2. Je ziet een lijst met revisies. Klik op de actieve revisie (heeft een groen vinkje ✓ en 100% traffic)
3. Klik op **Restart** bovenaan de revision details pagina
4. Bevestig door op **Yes** te klikken
5. Wacht 1-2 minuten tot de status weer **Running** is

**Let op:** Gebruik NIET de "Stop" knop in het hoofdscherm van de Container App - dit stopt alle containers en ze starten niet automatisch weer!

### Stap 4: Controleer de status

1. In het **Revision management** (of **Revisions and replicas**) scherm, controleer dat:
   - De status **Running** is (groen vinkje ✓)
   - Het **Replica count** = 1 is
   - **Traffic weight** = 100% is
2. Klik op **Metrics** in het linker menu om te zien of er verkeer binnenkomt

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

## ⚙️ Environment Variables Aanpassen

**Gebruik deze sectie als:** Je de configuratie van de chatbot wilt wijzigen (welke agents beschikbaar zijn, welke standaard is, etc.)

### Via Azure Portal (Aanbevolen)

#### Stap 1: Ga naar de Container App

1. Log in bij https://portal.azure.com
2. Zoek **jaapjunior-api** (Container App)
3. Klik erop om de details te openen

#### Stap 2: Open Environment Variables

1. Klik op **Containers** in het linker menu (onder "Application" sectie)
2. Je ziet de container **jaapjunior-api** in de lijst
3. Klik op **Edit and deploy** bovenaan
4. Klik op de **jaapjunior-api** container in de lijst
5. Scroll naar beneden naar de sectie **Environment variables**

#### Stap 3: Voeg toe of wijzig variables

Je kunt hier environment variables toevoegen of wijzigen:

**Belangrijke variables voor de chatbot:**

| Variable | Waarde | Uitleg |
|----------|--------|---------|
| `ENABLED_AGENTS` | `jw,wmo,cs-wmo` | Welke agents beschikbaar zijn (komma-gescheiden) |
| `DEFAULT_AGENT` | `cs-wmo` | Welke agent standaard geselecteerd is |
| `QDRANT_URI` | `http://localhost:6333` | Verbinding met Qdrant vector database |
| `NODE_ENV` | `production` | Runtime environment (production/development) |

**Secrets (gevoelige data):**

Voor gevoelige data zoals API keys, gebruik **Secrets** in plaats van gewone environment variables:

| Secret | Uitleg |
|--------|---------|
| `OPENAI_API_KEY` | OpenAI API key voor embeddings |
| `ANTHROPIC_API_KEY` | Anthropic API key voor Claude |
| `JINAAI_API_KEY` | Jina AI API key voor document processing |
| `SHARED_PASSWORD` | Gedeeld wachtwoord voor authenticatie |
| `JWT_SECRET` | Secret voor JWT token signing |
| `API_TOKEN` | API token voor authenticatie |

#### Stap 4: Wijzig een variable

1. Zoek de variable die je wilt wijzigen (bijv. `DEFAULT_AGENT`)
2. Klik op het **potlood icoon** (✏️) naast de variable
3. Wijzig de **Value**
4. Klik op **Save**

#### Stap 5: Voeg een nieuwe variable toe

1. Scroll naar beneden in de Environment variables sectie
2. Klik op **+ Add**
3. Vul in:
   - **Name:** Naam van de variable (bijv. `DEFAULT_AGENT`)
   - **Source:** Kies **Manual entry** (voor gewone waarden) of **Reference a secret** (voor gevoelige data)
   - **Value:** De waarde (bijv. `cs-wmo`)
4. Klik op **Save**

#### Stap 6: Deploy de wijzigingen

1. Scroll helemaal naar boven
2. Klik op **Create** onderaan de pagina
3. Wacht 2-3 minuten terwijl een nieuwe revisie wordt aangemaakt
4. De container herstart automatisch met de nieuwe configuratie

### Secrets beheren (voor API keys)

#### Stap 1: Ga naar Secrets

1. In het **jaapjunior-api** scherm
2. Klik op **Secrets** in het linker menu (onder "Settings" sectie)

#### Stap 2: Voeg een secret toe

1. Klik op **+ Add**
2. Vul in:
   - **Key:** Naam van het secret (bijv. `openai-api-key`)
   - **Value:** De gevoelige waarde (bijv. je API key)
3. Klik op **Add**

#### Stap 3: Gebruik het secret in environment variables

1. Ga terug naar **Containers**
2. Klik op **Edit and deploy**
3. Selecteer de container
4. Scroll naar **Environment variables**
5. Klik op **+ Add**
6. Vul in:
   - **Name:** `OPENAI_API_KEY`
   - **Source:** Selecteer **Reference a secret**
   - **Value:** Selecteer `openai-api-key` uit de dropdown
7. Klik op **Save** en dan **Create**

### Via Azure CLI

```bash
# Login
az login

# Bekijk huidige environment variables
az containerapp show \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --query "properties.template.containers[0].env" \
  --output table

# Voeg een environment variable toe
az containerapp update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --set-env-vars "DEFAULT_AGENT=cs-wmo" "ENABLED_AGENTS=jw,wmo,cs-wmo"

# Voeg een secret toe
az containerapp secret set \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --secrets "openai-api-key=sk-xxxxx"

# Gebruik een secret in een environment variable
az containerapp update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --set-env-vars "OPENAI_API_KEY=secretref:openai-api-key"
```

### Veelvoorkomende configuraties

#### Alleen JW agent beschikbaar maken

```
ENABLED_AGENTS=jw
DEFAULT_AGENT=jw
```

#### Alle agents beschikbaar, WMO als standaard

```
ENABLED_AGENTS=jw,wmo,cs-wmo
DEFAULT_AGENT=wmo
```

#### CS-WMO als enige agent

```
ENABLED_AGENTS=cs-wmo
DEFAULT_AGENT=cs-wmo
```

### Let op!

⚠️ **Na het wijzigen van environment variables:**
1. De container herstart automatisch (bij "Create" klikken)
2. Wacht 2-3 minuten tot de nieuwe revisie actief is
3. Test de chatbot om te controleren of de wijzigingen zijn doorgevoerd
4. Bij problemen: Rollback naar vorige revisie (zie "Problemen Oplossen")

⚠️ **Secrets vs Environment Variables:**
- Gebruik **Secrets** voor: API keys, passwords, tokens
- Gebruik **Environment Variables** voor: Configuratie, feature flags, URLs
- Secrets zijn encrypted at rest, environment variables niet

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
2. Klik in het linker menu op **Revision management** of **Revisions and replicas**
3. Zie je meerdere revisies? Zoek een eerdere werkende revisie (oudere datum)
4. Klik op de oude werkende revisie
5. Klik bovenaan op **Activate** (als deze inactief is)
6. Ga terug naar het overzicht
7. Klik op **Choose revision mode** en selecteer **Single**
8. Selecteer de werkende revisie en klik **Apply**
9. Dit zet 100% traffic naar de werkende revisie

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
2. Klik in het linker menu op **Revision management** of **Revisions and replicas**
3. Klik op de actieve revisie (groen vinkje ✓, 100% traffic)
4. Klik op **Restart** bovenaan
5. Bevestig met **Yes**

**Oplossing 2 - Nieuwe Revisie via Portal:**

1. Ga naar **jaapjunior-api** in Azure Portal
2. Klik in het linker menu op **Revision management** of **Revisions and replicas**
3. Klik op **Create new revision** (of **Create and deploy new revision**)
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
