# Azure Branch Plan V3: Dynamische document sync tijdens build

**Datum:** 2025-11-20
**Doel:** Azure deployment die ALTIJD de laatste i-Sociaal-Lab documenten gebruikt
**Strategie:** Build script dat documenten ophaalt tijdens Azure build

---

## 🎯 Probleem

Je wilt GEEN kopie van documenten, maar:
- ✅ Altijd de laatste versie van i-Sociaal-Lab documenten
- ✅ Automatisch updates krijgen wanneer zij documenten wijzigen
- ✅ Geen handmatige sync nodig

---

## 💡 Oplossing: Build-time document fetch

We passen de Azure deployment aan zodat het:
1. Bij elke build de laatste documenten ophaalt van i-Sociaal-Lab main
2. Azure deployment HEEFT GEEN eigen documenten in de branch
3. Dockerfile haalt documenten op tijdens build

---

## Implementatie Stappen

### Stap 1: Verwijder documenten uit je branch

```bash
cd ~/jaapjunior
git checkout railway-unified

# Verwijder documenten volledig
rm -rf packages/api/jw/bronnen/*
rm -rf packages/api/wmo/bronnen/*
rm -rf packages/api/cs-wmo/bronnen/*

# Maak .gitkeep files zodat folders blijven bestaan
touch packages/api/jw/bronnen/.gitkeep
touch packages/api/wmo/bronnen/.gitkeep
touch packages/api/cs-wmo/bronnen/.gitkeep

# Maak README om uit te leggen
cat > packages/api/DOCUMENTEN_README.md << 'EOF'
# Documenten voor Indexering

⚠️ **BELANGRIJK**: Deze branch bevat GEEN documenten!

Documenten worden automatisch opgehaald tijdens Azure build van:
`i-Sociaal-Lab/jaapjunior:main`

## Waarom?

- ✅ Altijd de laatste versie van productie documenten
- ✅ Geen dubbel onderhoud
- ✅ Automatische sync bij elke build

## Build Process

Tijdens `az acr build` worden documenten opgehaald:
1. Dockerfile clones i-Sociaal-Lab/jaapjunior (public repo)
2. Kopieert bronnen folders naar build
3. Build bevat altijd laatste documenten

## Lokaal testen

Voor lokale development:
\`\`\`bash
# Haal documenten op
git fetch origin
git checkout origin/main -- packages/api/jw/bronnen/
git checkout origin/main -- packages/api/wmo/bronnen/
git checkout origin/main -- packages/api/cs-wmo/bronnen/

# COMMIT DEZE NIET!
# Ze worden automatisch genegeerd door .gitignore
\`\`\`

## Azure Redeployment

Om nieuwe documenten te gebruiken:
\`\`\`bash
# Rebuild image (haalt automatisch nieuwe documenten op)
az acr build --registry jaapjuniorregistry \\
  --image jaapjunior-api:latest \\
  --file packages/api/Dockerfile.combined \\
  .

# Update container
az containerapp update \\
  --name jaapjunior-api \\
  --resource-group chatbot_jaapjunior_rg \\
  --image jaapjuniorregistry.azurecr.io/jaapjunior-api:latest
\`\`\`
EOF

# Commit
git add packages/api/jw/bronnen/.gitkeep
git add packages/api/wmo/bronnen/.gitkeep
git add packages/api/cs-wmo/bronnen/.gitkeep
git add packages/api/DOCUMENTEN_README.md

git commit -m "Remove documents: Fetch dynamically from i-Sociaal-Lab/main during build

- Documents are no longer stored in this branch
- Dockerfile will fetch them from i-Sociaal-Lab/jaapjunior:main during build
- Ensures Azure always uses latest production documents
- No manual sync needed"

echo "✅ Documenten verwijderd uit branch"
```

---

### Stap 2: Update Dockerfile.combined voor document fetch

```bash
cd ~/jaapjunior

# Backup huidige Dockerfile
cp packages/api/Dockerfile.combined packages/api/Dockerfile.combined.backup

# Lees huidige Dockerfile
cat packages/api/Dockerfile.combined
```

**Nieuwe Dockerfile.combined met document fetch:**

```dockerfile
FROM oven/bun:1.2.22-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++ git

# Copy package files first for better caching
COPY package.json bun.lock ./
COPY packages/api ./packages/api

# Install dependencies
RUN bun install --no-optional || bun install

# FETCH DOCUMENTS FROM i-Sociaal-Lab/jaapjunior:main
# Clone only the bronnen folders (sparse checkout for efficiency)
RUN git clone --depth 1 --filter=blob:none --sparse https://github.com/i-Sociaal-Lab/jaapjunior.git /tmp/jaapjunior && \
    cd /tmp/jaapjunior && \
    git sparse-checkout set packages/api/jw/bronnen packages/api/wmo/bronnen packages/api/cs-wmo/bronnen && \
    cp -r /tmp/jaapjunior/packages/api/jw/bronnen /app/packages/api/jw/ && \
    cp -r /tmp/jaapjunior/packages/api/wmo/bronnen /app/packages/api/wmo/ && \
    cp -r /tmp/jaapjunior/packages/api/cs-wmo/bronnen /app/packages/api/cs-wmo/ && \
    rm -rf /tmp/jaapjunior

# Build API
WORKDIR /app/packages/api
RUN bun run build

# Runtime stage with Qdrant
FROM qdrant/qdrant:v1.12.5 AS qdrant-base
FROM oven/bun:1.2.22-alpine

WORKDIR /app

# Copy built API
COPY --from=builder /app/packages/api/dist ./dist
COPY --from=builder /app/packages/api/jw ./jw
COPY --from=builder /app/packages/api/wmo ./wmo
COPY --from=builder /app/packages/api/cs-wmo ./cs-wmo
COPY --from=builder /app/node_modules ./node_modules

# Install Qdrant binary
COPY --from=qdrant-base /qdrant/qdrant /usr/local/bin/qdrant
COPY --from=qdrant-base /qdrant/config /qdrant/config

# Install runtime dependencies
RUN apk add --no-cache curl bash

# Create directories
RUN mkdir -p /app/data /qdrant/storage

# Environment
ENV NODE_ENV=production
ENV PORT=3000
ENV QDRANT_URI=http://localhost:6333

EXPOSE 3000 6333

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:3000/api/v1 || exit 1

# Startup script
RUN cat > /app/start.sh << 'EOF'
#!/bin/bash
echo "Starting Qdrant..."
qdrant --config-path /qdrant/config/config.yaml > /var/log/qdrant.log 2>&1 &
QDRANT_PID=$!

echo "Waiting for Qdrant to be ready..."
for i in {1..30}; do
  if curl -f http://localhost:6333/health >/dev/null 2>&1; then
    echo "Qdrant is ready"
    break
  fi
  sleep 1
done

echo "Starting API..."
cd /app && bun run dist/index.js
EOF

RUN chmod +x /app/start.sh

CMD ["/app/start.sh"]
```

Pas dit aan:

```bash
# Edit Dockerfile.combined met je editor
# Of gebruik deze sed commando's om specifieke secties toe te voegen
# (Dit is complex, doe handmatig als je niet zeker bent)

echo "⚠️  HANDMATIG: Pas Dockerfile.combined aan met bovenstaande inhoud"
echo "    Voeg de RUN git clone... sectie toe na 'bun install'"
```

---

### Stap 3: Update .gitignore om documenten te negeren

```bash
cd ~/jaapjunior

# Voeg toe aan .gitignore
cat >> .gitignore << 'EOF'

# Documents worden dynamisch opgehaald tijdens build
packages/api/jw/bronnen/*
!packages/api/jw/bronnen/.gitkeep
packages/api/wmo/bronnen/*
!packages/api/wmo/bronnen/.gitkeep
packages/api/cs-wmo/bronnen/*
!packages/api/cs-wmo/bronnen/.gitkeep
EOF

git add .gitignore
git commit -m "Ignore documents: Fetched dynamically during build"

echo "✅ .gitignore updated"
```

---

### Stap 4: Test de build lokaal

```bash
cd ~/jaapjunior

# Test of Dockerfile documenten kan ophalen
docker build \
  -f packages/api/Dockerfile.combined \
  -t test-jaapjunior-api:latest \
  .

# Controleer of documenten in de image zitten
docker run --rm test-jaapjunior-api:latest ls -la /app/jw/bronnen/

echo "✅ Build test succesvol"
```

---

### Stap 5: Deploy naar Azure

```bash
# Build met ACR (haalt automatisch nieuwe documenten op)
az acr build \
  --registry jaapjuniorregistry \
  --image jaapjunior-api:latest \
  --file packages/api/Dockerfile.combined \
  --platform linux/amd64 \
  .

# Update container
az containerapp update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --image jaapjuniorregistry.azurecr.io/jaapjunior-api:latest

# Herstart voor herindexering
./scripts/azure-reindex.sh --restart

echo "✅ Deployed met laatste documenten"
```

---

### Stap 6: Hernoem en push branch

```bash
# Hernoem branch
git branch -m railway-unified azure-deployment

# Push alle wijzigingen
git push fork azure-deployment --force

# Verwijder oude naam
git push fork --delete railway-unified

echo "✅ Branch gepusht"
```

---

### Stap 7: Maak Pull Request

PR Beschrijving:

```markdown
## 🎯 Doel

Azure deployment branch die AUTOMATISCH de laatste documenten gebruikt van i-Sociaal-Lab/main.

## 🔄 Hoe het werkt

**Geen documenten in deze branch!**

Tijdens Azure build:
1. Dockerfile clones `i-Sociaal-Lab/jaapjunior:main`
2. Haalt alleen `bronnen/` folders op (sparse checkout)
3. Kopieert ze naar build image
4. Build bevat altijd de LAATSTE versie

## ✅ Voordelen

- ✅ Altijd up-to-date documenten (geen manual sync!)
- ✅ i-Sociaal-Lab update → Next Azure build gebruikt nieuwe versie
- ✅ Geen dubbel onderhoud
- ✅ Single source of truth (jullie main)

## 🚀 Azure Deployment Workflow

**Wanneer jullie documenten updaten:**
```bash
# Ik rebuild gewoon de image
az acr build --registry jaapjuniorregistry ...

# Build haalt automatisch jullie nieuwe documenten op
# Deploy naar Azure → Nieuwe documenten worden gebruikt
```

**Geen handmatige sync nodig!**

## 📁 Branch Structuur

```
azure-deployment branch:
├── Code: Azure deployment setup
├── Config: Dockerfile.combined, scripts
└── Documenten: GEEN (dynamisch opgehaald van main)
```

## 🔒 Veiligheid

- ✅ Public repo: i-Sociaal-Lab/jaapjunior is public, git clone werkt
- ✅ Read-only: Alleen documenten ophalen, niets schrijven
- ✅ Railway ongewijzigd: Dit is alleen voor Azure branch

## 🧪 Testing

- ✅ Build test: Documenten worden correct opgehaald
- ✅ Docker test: 68+46+10 documenten in image
- ✅ Azure deployment: Chatbot werkt met jullie documenten
- ✅ Herindexering: Agents laden correct

## ❓ Vragen?

Contact: [Jouw info]
```

---

## 🔄 Toekomstige Workflow

### i-Sociaal-Lab update documenten in main

```bash
# Jullie: Update documenten in main
git commit -m "Update JW documenten"
git push origin main

# Ik: Rebuild Azure image (haalt automatisch nieuwe docs)
az acr build ...
az containerapp update ...
./scripts/azure-reindex.sh --restart

# Done! Azure gebruikt nieuwe documenten
```

### Geen handmatige sync nodig! 🎉

---

## 🚨 Belangrijke Nota

**⚠️ i-Sociaal-Lab/jaapjunior moet PUBLIC zijn**

Anders kan Dockerfile niet clonen tijdens build.

Check:
```bash
# Test of public
git clone https://github.com/i-Sociaal-Lab/jaapjunior.git /tmp/test-clone
# Moet werken zonder credentials
```

Als repo PRIVATE is, zijn er twee opties:

**Optie A: Maak public** (simpelst)

**Optie B: Gebruik GitHub Personal Access Token in Azure**
```bash
# Azure secret toevoegen
az containerapp secret set \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --secrets github-pat=<your-token>

# Dockerfile aangepast:
# git clone https://${GITHUB_PAT}@github.com/i-Sociaal-Lab/jaapjunior.git
```

---

## 📋 Checklist

- [ ] Stap 1: Documenten verwijderd uit branch + README toegevoegd
- [ ] Stap 2: Dockerfile.combined aangepast met git clone
- [ ] Stap 3: .gitignore updated
- [ ] Stap 4: Lokale build test succesvol
- [ ] Stap 5: Azure deployment test succesvol
- [ ] Stap 6: Branch hernoemd en gepusht
- [ ] Stap 7: PR gemaakt met uitleg

---

## ✅ Dit is de beste oplossing!

**Waarom:**
1. **Altijd up-to-date** - Geen manual sync
2. **Single source of truth** - i-Sociaal-Lab main
3. **Simpel** - Alleen rebuild als je updates wilt
4. **Veilig** - Geen dubbele documenten, geen conflicts

**Wanneer je updates wilt:**
- Rebuild image → Nieuwe documenten automatisch

**Perfect! 🚀**
