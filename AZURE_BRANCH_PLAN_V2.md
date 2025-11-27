# Azure Branch Plan V2: Azure deployment met i-Sociaal-Lab documenten

**Datum:** 2025-11-20
**Doel:** Azure deployment branch met jouw code + i-Sociaal-Lab documenten
**Strategie:** Code van fork, documenten van origin/main

---

## 🎯 Wat we willen

```
azure-deployment branch:
├── Code & deployment: Van jouw fork (Azure setup)
└── Documenten (bronnen): Van i-Sociaal-Lab main (hun productie docs)
```

**Waarom?**
- ✅ Jouw Azure deployment setup
- ✅ Meest recente documenten van i-Sociaal-Lab
- ✅ Geen verouderde documenten in Azure

---

## Stap 1: Backup maken

```bash
cd ~/jaapjunior
git checkout railway-unified

# Maak backup
git branch backup-azure-$(date +%Y%m%d)
git push fork backup-azure-$(date +%Y%m%d)

echo "✅ Backup gemaakt"
```

---

## Stap 2: Haal laatste i-Sociaal-Lab documenten op

```bash
# Haal laatste versie van origin
git fetch origin

# Bekijk welke documenten in origin/main zitten
echo "=== JW documenten in origin/main ==="
git ls-tree -r --name-only origin/main packages/api/jw/bronnen/ | wc -l

echo "=== WMO documenten in origin/main ==="
git ls-tree -r --name-only origin/main packages/api/wmo/bronnen/ | wc -l

echo "=== CS-WMO documenten in origin/main ==="
git ls-tree -r --name-only origin/main packages/api/cs-wmo/bronnen/ | wc -l

echo "✅ Document check gedaan"
```

---

## Stap 3: Vervang jouw documenten met i-Sociaal-Lab documenten

```bash
# Zorg dat je op railway-unified staat
git checkout railway-unified

# Verwijder jouw huidige documenten uit staging
rm -rf packages/api/jw/bronnen/*
rm -rf packages/api/wmo/bronnen/*
rm -rf packages/api/cs-wmo/bronnen/*

# Kopieer documenten van i-Sociaal-Lab main
git checkout origin/main -- packages/api/jw/bronnen/
git checkout origin/main -- packages/api/wmo/bronnen/
git checkout origin/main -- packages/api/cs-wmo/bronnen/

# Check de verschillen
git status

echo "✅ Documenten vervangen met origin/main versies"
```

---

## Stap 4: Commit de document sync

```bash
# Commit ALLEEN als je zeker weet dat dit klopt
git add packages/api/jw/bronnen/ packages/api/wmo/bronnen/ packages/api/cs-wmo/bronnen/

git commit -m "Sync: Use i-Sociaal-Lab production documents for indexing

- Replace fork documents with origin/main documents
- Ensures Azure deployment uses most recent production docs
- JW, WMO, and CS-WMO bronnen synced from i-Sociaal-Lab/main"

echo "✅ Document sync committed"
```

---

## Stap 5: Hernoem branch en push

```bash
# Hernoem branch
git branch -m railway-unified azure-deployment

# Push naar fork
git push fork azure-deployment

# Optioneel: verwijder oude naam
git push fork --delete railway-unified

echo "✅ Branch hernoemd en gepusht"
```

---

## Stap 6: Maak Pull Request

1. Ga naar: https://github.com/GustaafS/jaapjunior
2. Klik op "Compare & pull request" voor `azure-deployment`
3. **PR settings:**
   - Base repository: `i-Sociaal-Lab/jaapjunior`
   - Base branch: `main`
   - Head repository: `GustaafS/jaapjunior`
   - Head branch: `azure-deployment`

4. **PR Titel:**
   ```
   Feat: Add Azure deployment branch (synced with main documents)
   ```

5. **PR Beschrijving:**
   ```markdown
   ## 🎯 Doel

   Azure deployment als aparte branch met:
   - Jouw Azure deployment setup
   - i-Sociaal-Lab productie documenten (gesynchroniseerd)

   ## 📋 Wat zit in deze branch

   ### Azure Features:
   - ✅ Lazy loading agents
   - ✅ Combined container (Qdrant + API)
   - ✅ Herindexering documentatie & scripts
   - ✅ DEFAULT_AGENT & ENABLED_AGENTS configuratie
   - ✅ Azure Container Apps deployment

   ### Documenten:
   - ✅ **Gesynchroniseerd met i-Sociaal-Lab/main**
   - ✅ JW bronnen: Van jullie productie
   - ✅ WMO bronnen: Van jullie productie
   - ✅ CS-WMO bronnen: Van jullie productie

   ## 🔄 Document Synchronisatie

   Deze branch gebruikt jullie productie documenten uit `main`:
   - `packages/api/jw/bronnen/` → van origin/main
   - `packages/api/wmo/bronnen/` → van origin/main
   - `packages/api/cs-wmo/bronnen/` → van origin/main

   Dit betekent:
   - Azure chatbot gebruikt dezelfde documenten als Railway
   - Wanneer jullie documenten updaten in main, kan ik ze pullen naar azure-deployment
   - Geen dubbel onderhoud van documenten

   ## 🏗️ Branch Structuur

   ```
   i-Sociaal-Lab/jaapjunior
   ├── main (Railway productie + documenten)
   └── azure-deployment (Azure deployment met main documenten)
   ```

   ## 🔒 Veiligheid

   - ❌ NIET mergen naar main (Railway blijft ongewijzigd!)
   - ✅ WEL accepteren als aparte branch
   - ✅ Document updates: `git checkout azure-deployment && git merge main -- packages/api/*/bronnen/`

   ## 🚀 Deployment

   **Railway (main):**
   - Ongewijzigd
   - Eigen documenten behouden
   - 100% backward compatible

   **Azure (azure-deployment):**
   - URL: https://jaapjunior-api.bluerock-7a3df5c8.westeurope.azurecontainerapps.io
   - Gebruikt jullie productie documenten
   - Combined container setup
   - Lazy loading enabled

   ## 🔄 Toekomstige Workflow

   ### Wanneer jullie documenten updaten in main:
   ```bash
   # Ik pull de updates naar Azure
   git checkout azure-deployment
   git checkout main -- packages/api/jw/bronnen/
   git checkout main -- packages/api/wmo/bronnen/
   git checkout main -- packages/api/cs-wmo/bronnen/
   git commit -m "Sync: Update documents from main"
   git push origin azure-deployment

   # Herstart Azure API voor herindexering
   ./scripts/azure-reindex.sh --restart
   ```

   ### Wanneer features van Azure naar Railway moeten:
   ```bash
   # Cherry-pick specifieke commits
   git checkout main
   git cherry-pick <commit-hash>
   ```

   ## ✅ Testing

   - ✅ Azure deployment getest met i-Sociaal-Lab documenten
   - ✅ Lazy loading verified
   - ✅ Document indexering correct (JW: X docs, WMO: X docs, CS-WMO: X docs)
   - ✅ Chatbot geeft correcte antwoorden

   ## 📝 Review Instructies

   **Wat te checken:**
   1. ✅ Dit is bedoeld als APARTE branch (niet mergen!)
   2. ✅ Documenten zijn van jullie main (niet van mijn fork)
   3. ✅ Azure deployment code quality
   4. ✅ Geen security issues

   **Hoe te accepteren:**
   - Accepteer als aparte branch
   - Railway main blijft ongewijzigd
   - Ik kan nu documenten syncen wanneer jullie updates doen

   ## ❓ Contact

   Voor vragen: [Jouw contact]
   ```

6. **Klik "Create pull request"**

---

## Stap 7: Na acceptatie - Document sync workflow

**Wanneer i-Sociaal-Lab documenten update:**

```bash
# Haal updates op
git fetch origin
git checkout azure-deployment

# Sync alleen documenten
git checkout origin/main -- packages/api/jw/bronnen/
git checkout origin/main -- packages/api/wmo/bronnen/
git checkout origin/main -- packages/api/cs-wmo/bronnen/

# Commit
git add packages/api/*/bronnen/
git commit -m "Sync: Update documents from main $(date +%Y-%m-%d)"

# Push
git push origin azure-deployment

# Deploy naar Azure (forceert herindexering)
cd ~/jaapjunior
./scripts/azure-reindex.sh --restart
```

---

## 🚨 Troubleshooting

### Probleem: "Ik zie veel document changes in stap 3"

Dit is OK als:
- ✅ Jouw fork had andere/verouderde documenten
- ✅ Je nu de i-Sociaal-Lab versies krijgt

Check met:
```bash
git diff --stat origin/main packages/api/jw/bronnen/
git diff --stat origin/main packages/api/wmo/bronnen/
git diff --stat origin/main packages/api/cs-wmo/bronnen/
```

### Probleem: "Geen documenten in origin/main"

```bash
# Check of er documenten zijn
git ls-tree -r --name-only origin/main packages/api/jw/bronnen/

# Als er GEEN documenten zijn in origin/main:
# Dan kun je je eigen documenten houden:
git checkout railway-unified -- packages/api/jw/bronnen/
git checkout railway-unified -- packages/api/wmo/bronnen/
git checkout railway-unified -- packages/api/cs-wmo/bronnen/
```

### Probleem: "Wil specifieke documenten van fork houden"

```bash
# Bijvoorbeeld: test.md blijft van fork, rest van origin
git checkout origin/main -- packages/api/cs-wmo/bronnen/
git checkout railway-unified -- packages/api/cs-wmo/bronnen/test.md
```

---

## 📋 Checklist

- [ ] Stap 1: Backup gemaakt
- [ ] Stap 2: Document check gedaan (hoeveel docs in origin?)
- [ ] Stap 3: Documenten vervangen met origin/main
- [ ] Stap 4: Document sync committed
- [ ] Stap 5: Branch hernoemd en gepusht
- [ ] Stap 6: PR gemaakt met uitleg over document sync
- [ ] Stap 7: Wacht op acceptatie...

---

## ✅ Voordelen

1. **Single source of truth voor documenten**
   - i-Sociaal-Lab main = productie documenten
   - Azure gebruikt dezelfde bron
   - Geen dubbel onderhoud

2. **Makkelijk syncen**
   - Simpel git checkout commando
   - Automatiseerbaar
   - Geen merge conflicts

3. **Beide deployments consistent**
   - Railway en Azure gebruiken zelfde documenten
   - Zelfde chatbot antwoorden
   - Zelfde indexering

4. **Toekomstbestendig**
   - Document updates zijn simpel
   - Code blijft gescheiden
   - Flexibel en schaalbaar

---

**Let op in stap 3:**
- Check eerst of origin/main documenten heeft
- Als er GEEN documenten zijn, houd dan jouw eigen documenten
- Als er WEL documenten zijn, vervang dan met origin/main

**Vraag voor jou:**
Weet jij of i-Sociaal-Lab/jaapjunior:main al documenten heeft in de bronnen folders?
