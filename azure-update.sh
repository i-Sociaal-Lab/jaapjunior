#!/bin/bash
# Azure Container Apps Update Script
# Voor rolling updates van API en Frontend containers

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}Azure Container Apps Update - Jaap Junior${NC}"
echo ""

# Configuration
RESOURCE_GROUP="chatbot_jaapjunior_rg"
REGISTRY_NAME="jaapjuniorregistry"

# Check if logged in
if ! az account show &> /dev/null; then
    echo -e "${RED}✗ Not logged in to Azure${NC}"
    echo "Please run: az login"
    exit 1
fi

echo ""
echo -e "${YELLOW}→ Building new images in Azure...${NC}"

# Build API in Azure (native AMD64, geen cross-platform issues)
echo -e "${BLUE}  Building API...${NC}"
az acr build \
    --registry $REGISTRY_NAME \
    --image jaapjunior-api:latest \
    --file packages/api/Dockerfile \
    --platform linux/amd64 \
    . \
    --output none
echo -e "${GREEN}✓ API image built${NC}"

# Build Frontend in Azure
echo -e "${BLUE}  Building Frontend...${NC}"
az acr build \
    --registry $REGISTRY_NAME \
    --image jaapjunior-frontend:latest \
    --file packages/frontend/Dockerfile \
    --platform linux/amd64 \
    . \
    --output none
echo -e "${GREEN}✓ Frontend image built${NC}"

echo ""
echo -e "${YELLOW}→ Updating containers (zero-downtime)...${NC}"

# Get registry server
REGISTRY_SERVER=$(az acr show --name $REGISTRY_NAME --query loginServer -o tsv)

# Update API
az containerapp update \
    --name jaapjunior-api \
    --resource-group $RESOURCE_GROUP \
    --image $REGISTRY_SERVER/jaapjunior-api:latest \
    --output none
echo -e "${GREEN}✓ API updated${NC}"

# Update Frontend
az containerapp update \
    --name jaapjunior \
    --resource-group $RESOURCE_GROUP \
    --image $REGISTRY_SERVER/jaapjunior-frontend:latest \
    --output none
echo -e "${GREEN}✓ Frontend updated${NC}"

echo ""
echo -e "${GREEN}Update completed!${NC}"
echo ""
echo -e "${BLUE}Container Status:${NC}"
az containerapp list --resource-group $RESOURCE_GROUP --query "[].{Name:name, Status:properties.runningStatus, Revision:properties.latestRevisionName}" -o table
echo ""

