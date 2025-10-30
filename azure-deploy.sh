#!/bin/bash
# Azure Container Apps Deployment Script voor Jaap Junior
# Dit script maakt automatisch alle resources aan en deployt de applicatie

set -e  # Stop bij fouten

# Kleuren voor output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Azure Container Apps Deployment - Jaap Junior           ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# ============================================================================
# 1. PREREQUISITES CHECK
# ============================================================================

echo -e "${YELLOW}→ Checking prerequisites...${NC}"

# Check Azure CLI
if ! command -v az &> /dev/null; then
    echo -e "${RED}✗ Azure CLI not found!${NC}"
    echo "Install with: brew install azure-cli"
    exit 1
fi
echo -e "${GREEN}✓ Azure CLI found${NC}"

# Check Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}✗ Docker not found!${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker found${NC}"

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo -e "${RED}✗ Not logged in to Azure${NC}"
    echo "Please run: az login"
    exit 1
fi
echo -e "${GREEN}✓ Logged in to Azure${NC}"

echo ""

# ============================================================================
# 2. CONFIGURATION
# ============================================================================

echo -e "${YELLOW}→ Configuration${NC}"

# Azure Resources
RESOURCE_GROUP="chatbot_jaapjunior_rg"
LOCATION="westeurope"
REGISTRY_NAME="jaapjuniorregistry"
ENVIRONMENT_NAME="jaapjunior-env"
STORAGE_ACCOUNT="jaapjuniorstore"

# Container names
CHROMADB_CONTAINER="jaapjunior-chromadb"
API_CONTAINER="jaapjunior-api"
FRONTEND_CONTAINER="jaapjunior"

echo -e "  Resource Group: ${BLUE}${RESOURCE_GROUP}${NC}"
echo -e "  Location: ${BLUE}${LOCATION}${NC}"
echo -e "  Registry: ${BLUE}${REGISTRY_NAME}${NC}"
echo ""

# Get subscription
SUBSCRIPTION_ID=$(az account show --query id -o tsv)
echo -e "  Using subscription: ${BLUE}${SUBSCRIPTION_ID}${NC}"
echo ""

# ============================================================================
# 3. INPUT - API KEYS
# ============================================================================

echo -e "${YELLOW}→ Please provide API keys:${NC}"
echo ""

read -p "OpenAI API Key: " OPENAI_API_KEY
if [ -z "$OPENAI_API_KEY" ]; then
    echo -e "${RED}✗ OpenAI API Key is required${NC}"
    exit 1
fi

read -p "JinaAI API Key: " JINAAI_API_KEY
if [ -z "$JINAAI_API_KEY" ]; then
    echo -e "${RED}✗ JinaAI API Key is required${NC}"
    exit 1
fi

read -sp "Shared Password (voor login): " SHARED_PASSWORD
echo ""
if [ -z "$SHARED_PASSWORD" ]; then
    echo -e "${RED}✗ Shared Password is required${NC}"
    exit 1
fi

# Generate JWT secret
JWT_SECRET=$(openssl rand -base64 32)
echo -e "${GREEN}✓ JWT Secret generated${NC}"

# Generate API token
API_TOKEN=$(openssl rand -base64 32)
echo -e "${GREEN}✓ API Token generated${NC}"

echo ""

# ============================================================================
# 4. CREATE RESOURCE GROUP
# ============================================================================

echo -e "${YELLOW}→ Creating Resource Group...${NC}"

if az group exists --name $RESOURCE_GROUP | grep -q "true"; then
    echo -e "${BLUE}  Resource group already exists${NC}"
else
    az group create \
        --name $RESOURCE_GROUP \
        --location $LOCATION \
        --output none
    echo -e "${GREEN}✓ Resource Group created${NC}"
fi

echo ""

# ============================================================================
# 5. CREATE CONTAINER REGISTRY
# ============================================================================

echo -e "${YELLOW}→ Creating Azure Container Registry...${NC}"

# Check if registry exists
if az acr show --name $REGISTRY_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
    echo -e "${BLUE}  Container Registry already exists${NC}"
else
    az acr create \
        --resource-group $RESOURCE_GROUP \
        --name $REGISTRY_NAME \
        --sku Basic \
        --admin-enabled true \
        --output none
    echo -e "${GREEN}✓ Container Registry created${NC}"
fi

# Get registry credentials
echo -e "${BLUE}  Getting registry credentials...${NC}"
REGISTRY_SERVER=$(az acr show --name $REGISTRY_NAME --query loginServer -o tsv)
REGISTRY_USERNAME=$(az acr credential show --name $REGISTRY_NAME --query username -o tsv)
REGISTRY_PASSWORD=$(az acr credential show --name $REGISTRY_NAME --query passwords[0].value -o tsv)

echo -e "${GREEN}✓ Registry: ${REGISTRY_SERVER}${NC}"
echo ""

# ============================================================================
# 6. BUILD AND PUSH DOCKER IMAGES (via Azure ACR)
# ============================================================================

echo -e "${YELLOW}→ Building Docker images in Azure (native AMD64)...${NC}"

# Build API in Azure (voorkomt cross-platform problemen)
echo -e "${BLUE}  Building API image in Azure...${NC}"
az acr build \
    --registry $REGISTRY_NAME \
    --image jaapjunior-api:latest \
    --file packages/api/Dockerfile \
    --platform linux/amd64 \
    . \
    --output none
echo -e "${GREEN}✓ API image built in Azure${NC}"

# Build Frontend in Azure
echo -e "${BLUE}  Building Frontend image in Azure...${NC}"
az acr build \
    --registry $REGISTRY_NAME \
    --image jaapjunior-frontend:latest \
    --file packages/frontend/Dockerfile \
    --platform linux/amd64 \
    . \
    --output none
echo -e "${GREEN}✓ Frontend image built in Azure${NC}"

echo ""

# ============================================================================
# 7. CREATE STORAGE ACCOUNT
# ============================================================================

echo -e "${YELLOW}→ Creating Storage Account for persistent data...${NC}"

if az storage account show --name $STORAGE_ACCOUNT --resource-group $RESOURCE_GROUP &> /dev/null; then
    echo -e "${BLUE}  Storage account already exists${NC}"
else
    az storage account create \
        --name $STORAGE_ACCOUNT \
        --resource-group $RESOURCE_GROUP \
        --location $LOCATION \
        --sku Standard_LRS \
        --output none
    echo -e "${GREEN}✓ Storage Account created${NC}"
fi

# Create file shares
echo -e "${BLUE}  Creating file shares...${NC}"
STORAGE_KEY=$(az storage account keys list --resource-group $RESOURCE_GROUP --account-name $STORAGE_ACCOUNT --query '[0].value' -o tsv)

az storage share create --name chromadb-data --account-name $STORAGE_ACCOUNT --account-key $STORAGE_KEY --output none 2>/dev/null || true
az storage share create --name api-data --account-name $STORAGE_ACCOUNT --account-key $STORAGE_KEY --output none 2>/dev/null || true

echo -e "${GREEN}✓ File shares ready${NC}"
echo ""

# ============================================================================
# 8. CREATE CONTAINER APPS ENVIRONMENT
# ============================================================================

echo -e "${YELLOW}→ Creating Container Apps Environment...${NC}"

if az containerapp env show --name $ENVIRONMENT_NAME --resource-group $RESOURCE_GROUP &> /dev/null; then
    echo -e "${BLUE}  Environment already exists${NC}"
else
    az containerapp env create \
        --name $ENVIRONMENT_NAME \
        --resource-group $RESOURCE_GROUP \
        --location $LOCATION \
        --output none
    echo -e "${GREEN}✓ Container Apps Environment created${NC}"
fi

# Create storage mounts in environment
echo -e "${BLUE}  Configuring storage mounts...${NC}"
az containerapp env storage set \
    --name $ENVIRONMENT_NAME \
    --resource-group $RESOURCE_GROUP \
    --storage-name chromadb-storage \
    --azure-file-account-name $STORAGE_ACCOUNT \
    --azure-file-account-key $STORAGE_KEY \
    --azure-file-share-name chromadb-data \
    --access-mode ReadWrite \
    --output none 2>/dev/null || true

az containerapp env storage set \
    --name $ENVIRONMENT_NAME \
    --resource-group $RESOURCE_GROUP \
    --storage-name api-storage \
    --azure-file-account-name $STORAGE_ACCOUNT \
    --azure-file-account-key $STORAGE_KEY \
    --azure-file-share-name api-data \
    --access-mode ReadWrite \
    --output none 2>/dev/null || true

echo -e "${GREEN}✓ Storage mounts configured${NC}"
echo ""

# ============================================================================
# 9. DEPLOY CHROMADB
# ============================================================================

echo -e "${YELLOW}→ Deploying ChromaDB...${NC}"

az containerapp create \
    --name $CHROMADB_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --environment $ENVIRONMENT_NAME \
    --image chromadb/chroma:latest \
    --target-port 8000 \
    --ingress internal \
    --min-replicas 1 \
    --max-replicas 1 \
    --cpu 0.5 \
    --memory 1.0Gi \
    --env-vars \
        IS_PERSISTENT=TRUE \
        ANONYMIZED_TELEMETRY=FALSE \
    --output none 2>/dev/null || az containerapp update \
    --name $CHROMADB_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --image chromadb/chroma:latest \
    --output none

# Mount storage
az containerapp update \
    --name $CHROMADB_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --set-env-vars IS_PERSISTENT=TRUE ANONYMIZED_TELEMETRY=FALSE \
    --output none 2>/dev/null || true

echo -e "${GREEN}✓ ChromaDB deployed${NC}"
echo ""

# ============================================================================
# 10. DEPLOY API
# ============================================================================

echo -e "${YELLOW}→ Deploying API...${NC}"

# Get ChromaDB internal URL
CHROMADB_FQDN=$(az containerapp show --name $CHROMADB_CONTAINER --resource-group $RESOURCE_GROUP --query properties.configuration.ingress.fqdn -o tsv)
CHROMA_URI="http://${CHROMADB_FQDN}"

az containerapp create \
    --name $API_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --environment $ENVIRONMENT_NAME \
    --image $REGISTRY_SERVER/jaapjunior-api:latest \
    --registry-server $REGISTRY_SERVER \
    --registry-username $REGISTRY_USERNAME \
    --registry-password $REGISTRY_PASSWORD \
    --target-port 3000 \
    --ingress internal \
    --min-replicas 1 \
    --max-replicas 2 \
    --cpu 1.0 \
    --memory 2.0Gi \
    --secrets \
        openai-api-key="$OPENAI_API_KEY" \
        jinaai-api-key="$JINAAI_API_KEY" \
        jwt-secret="$JWT_SECRET" \
        api-token="$API_TOKEN" \
        shared-password="$SHARED_PASSWORD" \
    --env-vars \
        NODE_ENV=production \
        PORT=3000 \
        CHROMA_URI="$CHROMA_URI" \
        DB_PATH=/app/data/storage.sqlite \
        CHROMA_COLLECTION=jaapjunior \
        OPENAI_API_KEY=secretref:openai-api-key \
        JINAAI_API_KEY=secretref:jinaai-api-key \
        JWT_SECRET=secretref:jwt-secret \
        API_TOKEN=secretref:api-token \
        SHARED_PASSWORD=secretref:shared-password \
    --output none 2>/dev/null || az containerapp update \
    --name $API_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --image $REGISTRY_SERVER/jaapjunior-api:latest \
    --output none

echo -e "${GREEN}✓ API deployed${NC}"
echo ""

# ============================================================================
# 11. DEPLOY FRONTEND
# ============================================================================

echo -e "${YELLOW}→ Deploying Frontend...${NC}"

# Get API internal URL
API_FQDN=$(az containerapp show --name $API_CONTAINER --resource-group $RESOURCE_GROUP --query properties.configuration.ingress.fqdn -o tsv)

az containerapp create \
    --name $FRONTEND_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --environment $ENVIRONMENT_NAME \
    --image $REGISTRY_SERVER/jaapjunior-frontend:latest \
    --registry-server $REGISTRY_SERVER \
    --registry-username $REGISTRY_USERNAME \
    --registry-password $REGISTRY_PASSWORD \
    --target-port 80 \
    --ingress external \
    --min-replicas 1 \
    --max-replicas 2 \
    --cpu 0.25 \
    --memory 0.5Gi \
    --env-vars \
        VITE_TEST_ENV=false \
    --output none 2>/dev/null || az containerapp update \
    --name $FRONTEND_CONTAINER \
    --resource-group $RESOURCE_GROUP \
    --image $REGISTRY_SERVER/jaapjunior-frontend:latest \
    --output none

echo -e "${GREEN}✓ Frontend deployed${NC}"
echo ""

# ============================================================================
# 12. GET FRONTEND URL
# ============================================================================

FRONTEND_URL=$(az containerapp show --name $FRONTEND_CONTAINER --resource-group $RESOURCE_GROUP --query properties.configuration.ingress.fqdn -o tsv)

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                 DEPLOYMENT SUCCESSFUL! 🎉                  ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${BLUE}Your application is available at:${NC}"
echo -e "${GREEN}https://${FRONTEND_URL}${NC}"
echo ""
echo -e "${BLUE}Container Status:${NC}"
az containerapp list --resource-group $RESOURCE_GROUP --query "[].{Name:name, Status:properties.runningStatus, URL:properties.configuration.ingress.fqdn}" -o table
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "  • Test your application at the URL above"
echo "  • Monitor logs: az containerapp logs show --name $API_CONTAINER --resource-group $RESOURCE_GROUP --follow"
echo "  • Add custom domain: See README.Docker.md for instructions"
echo "  • Set up monitoring in Azure Portal"
echo ""
echo -e "${BLUE}Estimated monthly costs: €65-95${NC}"
echo ""

