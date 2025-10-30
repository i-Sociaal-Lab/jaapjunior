# Docker Deployment Guide

Deze applicatie kan volledig gedockerd draaien op elke platform: Azure, Hetzner VPS, AWS, of zelfs je laptop.

## Quick Start (Development)

```bash
# 1. Kopieer environment variabelen
cp .env.example .env

# 2. Vul je API keys in .env
nano .env  # of gebruik je favoriete editor

# 3. Start alles
docker-compose up -d

# 4. Open browser
open http://localhost:5173
```

## Production Deployment

### Voorbereiding

1. **Maak `.env` bestand aan op server:**
```bash
# Op je server (Azure/Hetzner/etc)
nano .env
```

2. **Vul productie credentials:**
```env
OPENAI_API_KEY=sk-proj-...
JINAAI_API_KEY=jina_...
JWT_SECRET=<genereer-lange-random-string>
API_TOKEN=<genereer-random-token>
SHARED_PASSWORD=<kies-sterk-wachtwoord>

# Pas poorten aan als nodig
API_PORT=3000
FRONTEND_PORT=80
CHROMA_PORT=8000

# Productie URL (vervang door je domain)
VITE_API_URL=https://api.jaapjunior.nl

NODE_ENV=production
VITE_TEST_ENV=false
```

3. **Start met productie configuratie:**
```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Platform-specifieke instructies

### Hetzner VPS

```bash
# SSH naar je server
ssh root@your-vps-ip

# Installeer Docker
curl -fsSL https://get.docker.com | sh
docker --version

# Clone repository
git clone https://github.com/i-Sociaal-Lab/jaapjunior.git
cd jaapjunior

# Setup environment
cp .env.example .env
nano .env  # Vul keys in

# Start applicatie
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Logs bekijken
docker-compose logs -f

# Status check
docker-compose ps
```

### Azure Container Apps (Aanbevolen)

**One-command deployment** met geïntegreerd script:

```bash
# Installeer Azure CLI (eenmalig)
brew install azure-cli

# Login bij Azure (eenmalig)
az login

# Deploy alles automatisch!
./azure-deploy.sh
```

**Wat doet het script?**
- ✅ Maakt Resource Group (`chatbot_jaapjunior_rg`)
- ✅ Maakt Azure Container Registry
- ✅ Build en push Docker images
- ✅ Maakt Container Apps environment
- ✅ Deployt ChromaDB, API, Frontend
- ✅ Configureert secrets en storage
- ✅ Toont publieke URL

**Script vraagt om:**
- OpenAI API Key
- JinaAI API Key  
- Shared Password (voor login)
- JWT Secret en API Token worden automatisch gegenereerd

**Resultaat:**
- Applicatie beschikbaar op `https://jaapjunior.xxx.azurecontainerapps.io`
- Gratis SSL/HTTPS
- Private networking tussen containers
- Persistent storage voor SQLite + ChromaDB
- Automatische health monitoring

**Kosten:** €65-95/maand
- ChromaDB: €15-25 (0.5 vCPU, 1GB RAM)
- API: €30-50 (1 vCPU, 2GB RAM)
- Frontend: €10-15 (0.25 vCPU, 0.5GB RAM)
- Storage: €5

**Updates deployen:**
```bash
# Na code wijzigingen
./azure-update.sh
# Zero-downtime rolling update
```

**Logs bekijken:**
```bash
az containerapp logs show \
  --name api \
  --resource-group chatbot_jaapjunior_rg \
  --follow
```

**Status checken:**
```bash
az containerapp list \
  --resource-group chatbot_jaapjunior_rg \
  --query "[].{Name:name, Status:properties.runningStatus, URL:properties.configuration.ingress.fqdn}" \
  --output table
```

**Custom domain toevoegen (later):**
```bash
# Via Azure Portal:
# Container Apps → jaapjunior → Custom domains → Add custom domain

# Of via CLI:
az containerapp hostname add \
  --name jaapjunior \
  --resource-group chatbot_jaapjunior_rg \
  --hostname jaapjunior.yourdomain.com

# SSL certificate wordt automatisch aangemaakt (Let's Encrypt)
```

**Voordelen Azure Container Apps:**
- ✅ Eenvoudigste Azure optie voor multi-container apps
- ✅ Automatische scaling (0-N replicas)
- ✅ Gratis SSL certificates
- ✅ Built-in load balancing
- ✅ Zero-downtime deployments
- ✅ Integratie met Azure Monitor
- ✅ Nederlandse datacenter (West Europe)
- ✅ GDPR compliant

---

### Azure Container Instances (Alternatief - Simpeler maar beperkter)

Voor single-container deployments:

```bash
az login
az group create --name jaapjunior-rg --location westeurope

az container create \
  --resource-group jaapjunior-rg \
  --name jaapjunior-frontend \
  --image jaapjuniorregistry.azurecr.io/frontend:latest \
  --ports 80
```

⚠️ **Niet aanbevolen** voor Jaap Junior: geen orchestratie tussen containers.

---

### Azure App Service (Alternatief - Voor legacy apps)

Ondersteunt docker-compose maar met beperkingen:

```bash
az appservice plan create \
  --name jaapjunior-plan \
  --resource-group jaapjunior-rg \
  --is-linux \
  --sku B2

az webapp create \
  --resource-group jaapjunior-rg \
  --plan jaapjunior-plan \
  --name jaapjunior \
  --multicontainer-config-type compose \
  --multicontainer-config-file docker-compose.yml
```

⚠️ **Beperkingen:** Minder flexibel met multi-container, geen interne networking.

## Environment Variabelen Management

### Development (lokaal)
```bash
# .env bestand (in .gitignore)
OPENAI_API_KEY=sk-proj-...
```

### Production opties:

**1. Systemd service file (VPS):**
```ini
[Service]
EnvironmentFile=/etc/jaapjunior/.env
ExecStart=/usr/local/bin/docker-compose up
```

**2. Azure Key Vault:**
```bash
# Creëer Key Vault
az keyvault create --name jaapjunior-vault \
  --resource-group jaapjunior-rg

# Voeg secrets toe
az keyvault secret set --vault-name jaapjunior-vault \
  --name OPENAI-API-KEY --value "sk-proj-..."

# Geef App Service toegang
az webapp identity assign --name jaapjunior \
  --resource-group jaapjunior-rg
```

**3. HashiCorp Vault (advanced):**
```bash
# Op server met Vault
vault kv put secret/jaapjunior \
  OPENAI_API_KEY="sk-proj-..." \
  JINAAI_API_KEY="jina_..."
```

## Monitoring & Logs

```bash
# Logs van alle services
docker-compose logs -f

# Logs van specifieke service
docker-compose logs -f api

# Status check
docker-compose ps

# Resource usage
docker stats

# Health check
curl http://localhost:3000/api/v1
curl http://localhost:5173/health
curl http://localhost:8000/api/v1/heartbeat
```

## Updates & Maintenance

```bash
# Pull nieuwe versie
git pull origin main

# Rebuild en herstart
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

# Of zonder downtime (blue-green deployment)
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --scale api=4
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --scale api=2
```

## Backup

```bash
# Backup volumes
docker run --rm -v jaapjunior_chroma_data:/data \
  -v $(pwd)/backups:/backup \
  alpine tar czf /backup/chroma_$(date +%Y%m%d).tar.gz /data

docker run --rm -v jaapjunior_api_data:/data \
  -v $(pwd)/backups:/backup \
  alpine tar czf /backup/api_$(date +%Y%m%d).tar.gz /data
```

## Troubleshooting

### Poort conflicten
```bash
# Check welke poorten in gebruik zijn
netstat -tulpn | grep LISTEN

# Pas poorten aan in .env
API_PORT=3001
FRONTEND_PORT=8080
CHROMA_PORT=8001
```

### API keys werken niet
```bash
# Verifieer environment variabelen in container
docker-compose exec api env | grep API_KEY

# Herstart met force recreate
docker-compose up -d --force-recreate
```

### Out of memory
```bash
# Check memory usage
docker stats

# Voeg resource limits toe (zie docker-compose.prod.yml)
```

## Security Best Practices

1. **Gebruik secrets management in productie**
   - Niet `.env` bestanden op server
   - Gebruik Azure Key Vault / AWS Secrets Manager / HashiCorp Vault

2. **Enable HTTPS**
   - Gebruik reverse proxy (Nginx/Traefik/Caddy)
   - Let's Encrypt voor SSL certificates

3. **Network security**
   - Firewall rules (alleen poort 80/443 open)
   - Private netwerk voor inter-container communicatie

4. **Updates**
   - Regelmatige security updates van base images
   - Scan images met `docker scan` of Trivy

5. **Logging**
   - Centralized logging (ELK stack, Loki, etc.)
   - Geen sensitive data in logs

## Bekende Oplossingen (Lessons Learned)

### Monorepo Build Issues
**Probleem**: Workspace dependencies werden niet gevonden tijdens Docker build.
**Oplossing**: Build context op root niveau instellen en workspace files kopiëren in Dockerfiles.

### Bun Binary Post-install Fout
**Probleem**: `bun` package probeerde zichzelf te installeren met platform-specifieke binaries die niet beschikbaar waren in Alpine Linux.
**Oplossing**: `RUN bun install --no-optional || bun install` fallback strategie in Dockerfile.

### API CMD Binary Verwachting
**Probleem**: `bun build --compile` maakte geen standalone binary, alleen JS bestanden.
**Oplossing**: CMD aangepast naar `["bun", "run", "dist/index.js"]`.

### ChromaDB Health Check
**Probleem**: `curl` niet beschikbaar in chromadb/chroma image.
**Oplossing**: TCP port check gebruiken: `["CMD-SHELL", "timeout 2 bash -c '</dev/tcp/localhost/8000' || exit 1"]`

### Missing Dependencies in Production
**Probleem**: LlamaIndex dependencies niet gevonden in production container.
**Oplossing**: Volledige `node_modules` meekopiëren naar production stage.

## Support

Voor vragen of problemen:
- GitHub Issues: https://github.com/i-Sociaal-Lab/jaapjunior/issues
- Ketenbureau i-Sociaal Domein

