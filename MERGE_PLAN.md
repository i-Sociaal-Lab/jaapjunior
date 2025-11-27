# Merge Plan: Lazy Loading + Reindexing naar i-Sociaal-Lab

**Datum:** 2025-11-20
**Doel:** Alleen lazy loading en reindexing features naar i-Sociaal-Lab/jaapjunior:main
**BELANGRIJK:** Railway productie mag NIET omvallen!

---

## ⚠️ VEILIGHEIDSCHECK VOORAF

**Wat we WEL willen mergen:**
- ✅ Lazy loading agents (packages/api/src/agent.ts)
- ✅ Herindexering documentatie (HERINDEXERING.md)
- ✅ Herindexering script (scripts/azure-reindex.sh)

**Wat we NIET willen mergen:**
- ❌ Document folders (jw/bronnen, wmo/bronnen, cs-wmo/bronnen)
- ❌ Azure-specifieke configuratie
- ❌ Database wijzigingen
- ❌ Dockerfile.combined (Railway gebruikt andere setup)

---

## Stap 1: Backup huidige staat

```bash
# Zorg dat je op je fork staat
cd ~/jaapjunior
git checkout railway-unified

# Maak backup branch
git branch backup-before-merge-$(date +%Y%m%d)
git push fork backup-before-merge-$(date +%Y%m%d)

echo "✅ Backup gemaakt"
```

---

## Stap 2: Maak schone feature branch

```bash
# Haal laatste versie van i-Sociaal-Lab op
git fetch origin

# Maak nieuwe branch vanaf Railway productie main
git checkout -b feature/lazy-loading-reindex origin/main

echo "✅ Schone branch gemaakt vanaf productie"
```

---

## Stap 3: Kopieer ALLEEN de gewenste bestanden

```bash
# Haal de specifieke wijzigingen op uit je railway-unified branch
# maar zonder commit history (daarom gebruiken we checkout)

# 1. Kopieer lazy loading agent.ts wijzigingen
git checkout railway-unified -- packages/api/src/agent.ts

# 2. Kopieer documentatie
git checkout railway-unified -- HERINDEXERING.md

# 3. Kopieer reindex script
mkdir -p scripts
git checkout railway-unified -- scripts/azure-reindex.sh

echo "✅ Bestanden gekopieerd"
```

---

## Stap 4: Verifieer dat GEEN documenten zijn meegenomen

```bash
# Check welke bestanden aangepast zijn
git status

# Verwachte output moet ALLEEN deze 3 bestanden tonen:
#   new file:   HERINDEXERING.md
#   new file:   scripts/azure-reindex.sh
#   modified:   packages/api/src/agent.ts

# Als je MEER bestanden ziet (vooral bronnen folders), DOE DAN:
git reset origin/main -- packages/api/jw/bronnen/
git reset origin/main -- packages/api/wmo/bronnen/
git reset origin/main -- packages/api/cs-wmo/bronnen/

echo "✅ Verificatie gedaan"
```

---

## Stap 5: Review de agent.ts wijzigingen handmatig

```bash
# Bekijk PRECIES wat er veranderd is
git diff origin/main packages/api/src/agent.ts
```

**LET OP:** Controleer of deze wijzigingen Railway NIET breken:
- Lazy loading pattern (regels 192-201)
- Export structure (regels 204-208)
- Geen hardcoded Azure URLs
- Geen database schema wijzigingen

**Als je twijfelt over een wijziging:**
```bash
# Verwijder specifieke regels/changes uit agent.ts met editor
# OF reset het bestand en doe handmatige edits:
git checkout origin/main -- packages/api/src/agent.ts
# Dan handmatig alleen lazy loading toevoegen
```

---

## Stap 6: Commit de wijzigingen

```bash
# Commit ALLEEN als stap 4 & 5 OK waren
git add packages/api/src/agent.ts HERINDEXERING.md scripts/azure-reindex.sh

git commit -m "Feat: Add lazy loading agents and reindexing documentation

- Implement lazy loading pattern for agents (no auto-indexing on startup)
- Add administrator documentation for manual reindexing (HERINDEXERING.md)
- Add Azure reindex script with multiple options (scripts/azure-reindex.sh)
- Agents now initialize on first use instead of startup
- Reduces startup time and allows selective reindexing

Safe for Railway: No deployment changes, no database changes, no document changes"

echo "✅ Commit gemaakt"
```

---

## Stap 7: Push naar je fork

```bash
# Push de nieuwe feature branch naar je fork
git push fork feature/lazy-loading-reindex

echo "✅ Branch gepusht naar fork"
```

---

## Stap 8: Test LOKAAL voordat je PR maakt

**KRITISCH: Test of Railway setup NIET breekt**

```bash
# Checkout de nieuwe branch
git checkout feature/lazy-loading-reindex

# Test met Railway environment variabelen
# (controleer of je .env.local Railway credentials heeft)

bun install
cd packages/api
bun run build
bun run start

# Test in browser/Postman:
# - Agent laadt lazy (eerste query duurt langer)
# - Tweede query is snel
# - Geen startup errors
```

**Als alles werkt:**
✅ Ga door naar Stap 9

**Als er errors zijn:**
❌ Fix de errors eerst, commit opnieuw, herhaal test

---

## Stap 9: Maak Pull Request naar i-Sociaal-Lab

1. Ga naar: https://github.com/GustaafS/jaapjunior
2. Klik op "Compare & pull request" voor `feature/lazy-loading-reindex`
3. **Belangrijke PR settings:**
   - Base repository: `i-Sociaal-Lab/jaapjunior`
   - Base branch: `main`
   - Head repository: `GustaafS/jaapjunior`
   - Head branch: `feature/lazy-loading-reindex`

4. **PR Titel:**
   ```
   Feat: Add lazy loading agents and reindexing documentation
   ```

5. **PR Beschrijving:**
   ```markdown
   ## 🎯 Doel

   Voeg lazy loading en herindexering features toe zonder Railway productie te breken.

   ## ✅ Wat is toegevoegd

   1. **Lazy loading agents** (packages/api/src/agent.ts)
      - Agents worden NIET automatisch geïndexeerd bij startup
      - Alleen geïndexeerd bij eerste gebruik per agent
      - Snellere startup tijd
      - Cached in memory na eerste initialisatie

   2. **Herindexering documentatie** (HERINDEXERING.md)
      - Nederlandstalige handleiding voor beheerders
      - Azure Portal instructies
      - CLI script opties
      - FAQ en troubleshooting

   3. **Herindexering script** (scripts/azure-reindex.sh)
      - `--status`: Toon status
      - `--restart`: Herstart API (simpel)
      - `--full`: Volledige herindexering
      - `--agent <name>`: Specifieke agent

   ## ✅ Veiligheidsgaranties

   - ✅ Geen deployment wijzigingen
   - ✅ Geen database schema wijzigingen
   - ✅ Geen document folder wijzigingen (bronnen behouden)
   - ✅ Railway compatibel (geen platform-specifieke code)
   - ✅ Backward compatible (bestaande API blijft werken)
   - ✅ Lokaal getest met Railway environment

   ## 🧪 Test Plan

   **Voor merge:**
   1. Review code changes (alleen 3 bestanden)
   2. Test lokaal met Railway setup
   3. Deploy naar Railway test environment (indien beschikbaar)
   4. Verify geen regression in productie

   **Na merge:**
   1. Monitor Railway logs
   2. Check eerste agent query (zal langer duren)
   3. Check tweede query (moet snel zijn)
   4. Verify geen startup errors

   ## 📝 Merge Instructies

   **BELANGRIJK voor i-Sociaal-Lab team:**

   Deze PR bevat ALLEEN code changes, GEEN document changes. Als jullie eigen documenten in `jw/bronnen`, `wmo/bronnen`, of `cs-wmo/bronnen` hebben:

   1. Merge deze PR normaal (jullie documenten blijven behouden)
   2. Of gebruik: `git merge --no-ff --no-commit feature/lazy-loading-reindex`
   3. Dan controleren: `git status` (moet geen bronnen tonen)
   4. Dan: `git commit`

   ## ❓ Vragen

   Contact: [Jouw contact info]
   ```

6. Klik **"Create pull request"**

7. **Wacht op review van i-Sociaal-Lab team**

---

## Stap 10: Na merge - Cleanup

**Pas uitvoeren NADAT i-Sociaal-Lab de PR heeft gemerged:**

```bash
# Update je lokale origin/main
git fetch origin
git checkout main
git pull origin main

# Verwijder feature branch (lokaal en remote)
git branch -d feature/lazy-loading-reindex
git push fork --delete feature/lazy-loading-reindex

# Update je railway-unified branch met de nieuwe main
git checkout railway-unified
git merge origin/main

echo "✅ Cleanup gedaan"
```

---

## 🚨 Troubleshooting

### Probleem: "Git says files are in conflict"

```bash
# Reset en begin opnieuw vanaf stap 2
git checkout railway-unified
git branch -D feature/lazy-loading-reindex
# Herhaal vanaf stap 2
```

### Probleem: "Ik zie documenten in git status"

```bash
# Reset de document folders
git reset origin/main -- packages/api/jw/bronnen/
git reset origin/main -- packages/api/wmo/bronnen/
git reset origin/main -- packages/api/cs-wmo/bronnen/
git checkout -- packages/api/jw/bronnen/
git checkout -- packages/api/wmo/bronnen/
git checkout -- packages/api/cs-wmo/bronnen/
```

### Probleem: "Railway test faalt lokaal"

```bash
# Check of je de juiste environment hebt
cat .env.local

# Moet Railway credentials bevatten, NIET Azure
# Als je Azure credentials ziet:
# 1. Backup je .env.local
# 2. Kopieer Railway .env.local van origin/main
```

### Probleem: "PR laat meer dan 3 bestanden zien"

**STOP!** Doe dit:
1. Sluit de PR (of maak als draft)
2. Ga terug naar stap 4
3. Reset alle extra bestanden
4. Push opnieuw
5. Maak nieuwe PR

---

## 📋 Checklist

Print deze checklist en vink af tijdens uitvoering:

- [ ] Stap 1: Backup gemaakt
- [ ] Stap 2: Feature branch gemaakt
- [ ] Stap 3: Bestanden gekopieerd
- [ ] Stap 4: GEEN documenten meegenomen (verified!)
- [ ] Stap 5: agent.ts wijzigingen reviewed
- [ ] Stap 6: Commit gemaakt
- [ ] Stap 7: Pushed naar fork
- [ ] Stap 8: Lokaal getest met Railway
- [ ] Stap 9: PR gemaakt
- [ ] Stap 10: Wacht op review...

---

## 💡 Waarom is dit veilig?

1. **Lazy loading** is platform-onafhankelijk
   - Werkt op Railway, Azure, localhost
   - Geen configuratie changes nodig
   - Alleen gedrag van agent initialisatie verandert

2. **Documentatie** breekt niets
   - HERINDEXERING.md is alleen informatie
   - Geen executable code

3. **Script** is optioneel
   - scripts/azure-reindex.sh wordt niet gebruikt door Railway
   - Alleen handig voor Azure deployments
   - Railway kan eigen reindex strategie behouden

4. **Geen documenten meegenomen**
   - Railway behoud eigen bronnen folders
   - Geen data loss
   - Geen indexering verschillen

---

**Laatste check voordat je begint:**

Zorg dat je:
- ✅ Toegang hebt tot beide repos (origin en fork)
- ✅ Railway credentials lokaal hebt (.env.local)
- ✅ Tijd hebt voor lokale test (stap 8 is kritiek!)
- ✅ Contact hebt met i-Sociaal-Lab team voor review

**Veel succes! 🚀**
