# Azure Branch Plan: Volledige Azure deployment als branch

**Datum:** 2025-11-20
**Doel:** Jouw volledige Azure deployment als branch onder i-Sociaal-Lab/jaapjunior
**Resultaat:** Beide deployments naast elkaar zonder conflict

---

## 🎯 Strategie

```
i-Sociaal-Lab/jaapjunior
├── main (Railway productie - blijft ongewijzigd)
└── azure-deployment (Jouw volledige Azure setup met ALLES)
```

**Voordelen:**
- ✅ Railway main blijft 100% ongewijzigd
- ✅ Jouw Azure branch heeft ALLE bestanden die het nodig heeft
- ✅ Beide deployments kunnen naast elkaar bestaan
- ✅ Later kunnen features selectief van azure-deployment naar main
- ✅ Geen gedoe met cherry-picking bestanden
- ✅ SIMPEL en VEILIG

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

## Stap 2: Hernoem je branch naar azure-deployment

```bash
# Hernoem lokaal
git branch -m railway-unified azure-deployment

# Controleer
git branch
# Moet tonen: * azure-deployment

echo "✅ Branch hernoemd"
```

---

## Stap 3: Push naar je fork met nieuwe naam

```bash
# Push nieuwe branch naam
git push fork azure-deployment

# Optioneel: verwijder oude naam van fork
git push fork --delete railway-unified

echo "✅ Nieuwe branch naam gepusht"
```

---

## Stap 4: Maak Pull Request naar i-Sociaal-Lab

1. Ga naar: https://github.com/GustaafS/jaapjunior
2. Klik op "Compare & pull request" voor `azure-deployment`
3. **Belangrijke PR settings:**
   - Base repository: `i-Sociaal-Lab/jaapjunior`
   - Base branch: `main` ⚠️ **BELANGRIJK: Dit is correct!**
   - Head repository: `GustaafS/jaapjunior`
   - Head branch: `azure-deployment`

4. **PR Titel:**
   ```
   Feat: Add Azure deployment with lazy loading and combined container
   ```

5. **PR Beschrijving:**
   ```markdown
   ## 🎯 Doel

   Voeg een volledige Azure deployment toe als aparte branch, zodat beide deployments (Railway en Azure) naast elkaar kunnen bestaan.

   ## 📋 Wat zit in deze branch

   ### Nieuwe Features:
   - ✅ **Lazy loading agents** - Agents worden alleen geïndexeerd bij eerste gebruik
   - ✅ **Combined container** - Qdrant + API in één container voor Azure
   - ✅ **Herindexering documentatie** - HERINDEXERING.md voor beheerders
   - ✅ **Herindexering script** - scripts/azure-reindex.sh voor CLI
   - ✅ **DEFAULT_AGENT configuratie** - Runtime agent selectie via env var
   - ✅ **ENABLED_AGENTS filtering** - Selectief agents enablen

   ### Azure-specifieke setup:
   - Docker.combined voor Azure Container Apps
   - Azure deployment scripts
   - Internal ingress networking configuratie
   - Qdrant vector database integratie

   ## 🔒 Veiligheid voor Railway

   **Deze branch MERGE ik NIET naar main!**

   Deze PR is om de `azure-deployment` branch toe te voegen aan i-Sociaal-Lab repository.

   - ❌ NIET mergen naar main (Railway blijft ongewijzigd!)
   - ✅ WEL accepteren als aparte branch
   - ✅ Later kunnen we specifieke features naar main cherry-picken

   ## 🏗️ Branch Structuur

   Na acceptatie:
   ```
   i-Sociaal-Lab/jaapjunior
   ├── main (Railway productie - ongewijzigd)
   └── azure-deployment (Azure productie - volledige setup)
   ```

   ## 🚀 Deployment

   **Railway (main branch):**
   - Blijft exact zoals het was
   - Geen wijzigingen
   - 100% backward compatible

   **Azure (azure-deployment branch):**
   - Werkt met Dockerfile.combined
   - Gebruikt localhost:6333 voor Qdrant
   - Deployed naar Azure Container Apps
   - URL: https://jaapjunior-api.bluerock-7a3df5c8.westeurope.azurecontainerapps.io

   ## 📊 Statistieken

   Commits: ~20 ahead of main
   Files changed: ~15 bestanden
   Key changes: agent.ts, Dockerfile.combined, Azure configs, documentatie

   ## 🔄 Toekomstige Workflow

   Wanneer features van Azure naar Railway moeten:
   1. Cherry-pick specifieke commits van azure-deployment
   2. Test op Railway
   3. Merge naar main

   Wanneer main updates naar Azure moeten:
   1. `git checkout azure-deployment`
   2. `git merge main`
   3. Test en deploy naar Azure

   ## ✅ Testing

   - ✅ Azure deployment getest en werkend
   - ✅ Lazy loading verified (startup < 5 sec)
   - ✅ Herindexering getest via portal
   - ✅ Agents laden correct bij eerste query
   - ✅ Document indexering werkt (67 JW, 46 WMO, 10 CS-WMO docs)

   ## 📝 Review Instructies voor i-Sociaal-Lab Team

   **Wat te checken:**
   1. ✅ Dit is bedoeld als APARTE branch (niet mergen naar main!)
   2. ✅ Code quality van lazy loading feature
   3. ✅ Documentatie compleet (HERINDEXERING.md)
   4. ✅ Geen security issues (credentials, secrets)

   **Hoe te accepteren:**
   1. Accepteer de PR **ZONDER te mergen naar main**
   2. De branch `azure-deployment` wordt toegevoegd aan jullie repo
   3. Railway main blijft ongewijzigd

   ## ❓ Contact

   Voor vragen over deze Azure deployment: [Jouw contact]
   ```

6. **Klik "Create pull request"**

7. **BELANGRIJK: Communiceer met i-Sociaal-Lab team**

   Stuur ze een bericht:
   ```
   Hi team,

   Ik heb een PR gemaakt voor een Azure deployment branch.

   BELANGRIJK: Deze PR is NIET bedoeld om te mergen naar main!
   Het doel is om de 'azure-deployment' branch toe te voegen aan jullie repo,
   zodat beide deployments naast elkaar kunnen bestaan.

   Kunnen jullie dit accepteren als aparte branch?

   Bedankt!
   ```

---

## Stap 5: Na acceptatie - Branch tracking instellen

**Pas doen NADAT i-Sociaal-Lab de branch heeft geaccepteerd:**

```bash
# Haal de nieuwe branch op
git fetch origin

# Check of de branch er is
git branch -r | grep azure-deployment
# Moet tonen: origin/azure-deployment

# Stel tracking in
git branch -u origin/azure-deployment azure-deployment

# Verifieer
git branch -vv
# Moet tonen: * azure-deployment [origin/azure-deployment] ...

echo "✅ Tracking ingesteld"
```

---

## Stap 6: Toekomstige workflow

### Updates van main naar Azure:

```bash
# Haal updates van Railway main op
git checkout azure-deployment
git fetch origin
git merge origin/main

# Los eventuele conflicts op
# Test lokaal
# Deploy naar Azure

git push origin azure-deployment
```

### Features van Azure naar Railway:

```bash
# Bijvoorbeeld: lazy loading naar main
git checkout main
git cherry-pick <commit-hash-van-lazy-loading>

# Test met Railway setup
# Maak PR naar main
```

---

## 🚨 Troubleshooting

### Probleem: "PR wil mergen naar main"

Dit is OK! GitHub toont het als een merge, maar i-Sociaal-Lab team kan kiezen om:
- De branch te accepteren ZONDER te mergen
- Of: branch handmatig aanmaken: `git checkout -b azure-deployment GustaafS/azure-deployment`

### Probleem: "Ik wil toch nog wijzigingen doen"

```bash
# Gewoon commit en push
git add .
git commit -m "Update: ..."
git push fork azure-deployment

# PR wordt automatisch geupdate
```

### Probleem: "Naam railway-unified zit nog op fork"

```bash
# Verwijder oude naam
git push fork --delete railway-unified

# Controleer
git branch -r
# Mag GEEN fork/railway-unified meer tonen
```

---

## 📋 Checklist

- [ ] Stap 1: Backup gemaakt
- [ ] Stap 2: Branch hernoemd naar azure-deployment
- [ ] Stap 3: Gepusht naar fork
- [ ] Stap 4: PR gemaakt met duidelijke uitleg (NIET MERGEN!)
- [ ] Stap 4b: i-Sociaal-Lab team geïnformeerd
- [ ] Stap 5: Wacht op acceptatie...
- [ ] Stap 6: Na acceptatie - tracking ingesteld

---

## ✅ Voordelen van deze aanpak

1. **Geen gedoe met cherry-picking**
   - Alles blijft zoals het is
   - Geen bestanden vergeten
   - Geen conflicts

2. **Beide deployments werken**
   - Railway main: ongewijzigd ✅
   - Azure branch: volledige setup ✅

3. **Toekomstbestendig**
   - Features kunnen later naar main
   - Updates van main kunnen naar Azure
   - Flexibel en schaalbaar

4. **Simpel en veilig**
   - Geen risico voor Railway
   - Duidelijke scheiding
   - Makkelijk te onderhouden

---

**Dit is de SIMPELSTE en VEILIGSTE manier! 🚀**

Geen gedoe, gewoon je volledige Azure deployment als branch toevoegen.
