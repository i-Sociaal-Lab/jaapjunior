#!/bin/bash
set -e

echo "═══════════════════════════════════════════════════════════"
echo "  Azure Deployment - Verified Configuration"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Configuration
RESOURCE_GROUP="chatbot_jaapjunior_rg"
REGISTRY="jaapjuniorregistry"
FRONTEND_APP="jaapjunior"
API_APP="jaapjunior-api"
VERSION_TAG="v$(date +%Y%m%d-%H%M%S)"

echo "📋 Deployment Configuration:"
echo "   Resource Group: $RESOURCE_GROUP"
echo "   Registry: $REGISTRY"
echo "   Version: $VERSION_TAG"
echo ""

# Step 1: Verify current configuration
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  Verifying Current Configuration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Save current revision names as fallback
CURRENT_FRONTEND_REVISION=$(az containerapp show --name $FRONTEND_APP --resource-group $RESOURCE_GROUP --query 'properties.latestRevisionName' -o tsv)
CURRENT_API_REVISION=$(az containerapp show --name $API_APP --resource-group $RESOURCE_GROUP --query 'properties.latestRevisionName' -o tsv)

echo "✓ Current Frontend Revision: $CURRENT_FRONTEND_REVISION"
echo "✓ Current API Revision: $CURRENT_API_REVISION"
echo ""

# Check API ingress configuration
API_ALLOW_INSECURE=$(az containerapp ingress show --name $API_APP --resource-group $RESOURCE_GROUP --query 'allowInsecure' -o tsv)
API_EXTERNAL=$(az containerapp ingress show --name $API_APP --resource-group $RESOURCE_GROUP --query 'external' -o tsv)

echo "📊 API Ingress Status:"
echo "   - External: $API_EXTERNAL (should be: false)"
echo "   - Allow Insecure: $API_ALLOW_INSECURE (should be: true)"
echo ""

if [ "$API_ALLOW_INSECURE" != "true" ]; then
    echo "⚠️  WARNING: API allow-insecure is NOT enabled!"
    echo "   This will cause 301 redirects. Fixing..."
    az containerapp ingress update \
        --name $API_APP \
        --resource-group $RESOURCE_GROUP \
        --allow-insecure \
        --output none
    echo "✓ Fixed: allow-insecure enabled"
    echo ""
fi

if [ "$API_EXTERNAL" != "false" ]; then
    echo "⚠️  WARNING: API is external (should be internal)!"
    echo "   Fixing..."
    az containerapp ingress update \
        --name $API_APP \
        --resource-group $RESOURCE_GROUP \
        --type internal \
        --output none
    echo "✓ Fixed: API set to internal"
    echo ""
fi

# Step 2: Build Frontend
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  Building Frontend Image"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

az acr build \
    --registry $REGISTRY \
    --image jaapjunior-frontend:$VERSION_TAG \
    --image jaapjunior-frontend:latest \
    --file packages/frontend/Dockerfile \
    --platform linux/amd64 \
    . || {
        echo "❌ Frontend build failed!"
        exit 1
    }

echo ""
echo "✓ Frontend image built: $VERSION_TAG"
echo ""

# Step 3: Build API
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣  Building API Image (Combined with Qdrant)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

az acr build \
    --registry $REGISTRY \
    --image jaapjunior-api:$VERSION_TAG \
    --image jaapjunior-api:latest \
    --file packages/api/Dockerfile.combined \
    --platform linux/amd64 \
    . || {
        echo "❌ API build failed!"
        exit 1
    }

echo ""
echo "✓ API image built: $VERSION_TAG"
echo ""

# Step 4: Deploy Frontend
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4️⃣  Deploying Frontend"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get image digest
FRONTEND_SHA=$(az acr repository show \
    --name $REGISTRY \
    --image jaapjunior-frontend:$VERSION_TAG \
    --query 'digest' -o tsv)

echo "📦 Deploying image: $FRONTEND_SHA"

az containerapp update \
    --name $FRONTEND_APP \
    --resource-group $RESOURCE_GROUP \
    --image "$REGISTRY.azurecr.io/jaapjunior-frontend@$FRONTEND_SHA" \
    --output none

echo "✓ Frontend deployed"
echo ""

# Step 5: Deploy API
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5️⃣  Deploying API"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get image digest
API_SHA=$(az acr repository show \
    --name $REGISTRY \
    --image jaapjunior-api:$VERSION_TAG \
    --query 'digest' -o tsv)

echo "📦 Deploying image: $API_SHA"

az containerapp update \
    --name $API_APP \
    --resource-group $RESOURCE_GROUP \
    --image "$REGISTRY.azurecr.io/jaapjunior-api@$API_SHA" \
    --output none

echo "✓ API deployed"
echo ""

# Step 6: Wait for deployment
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "6️⃣  Waiting for Containers to Start"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "⏳ Waiting 40 seconds for containers to start..."
for i in {1..40}; do
    echo -n "."
    sleep 1
done
echo ""
echo ""

# Step 7: Verify deployment
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "7️⃣  Verifying Deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get new revision names
NEW_FRONTEND_REVISION=$(az containerapp show --name $FRONTEND_APP --resource-group $RESOURCE_GROUP --query 'properties.latestRevisionName' -o tsv)
NEW_API_REVISION=$(az containerapp show --name $API_APP --resource-group $RESOURCE_GROUP --query 'properties.latestRevisionName' -o tsv)

echo "📋 New Revisions:"
echo "   - Frontend: $NEW_FRONTEND_REVISION"
echo "   - API: $NEW_API_REVISION"
echo ""

# Test endpoints
echo "🧪 Testing Endpoints..."
echo ""

# Test frontend
FRONTEND_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/")
echo "   Frontend homepage: HTTP $FRONTEND_CODE"

# Test API through frontend proxy
API_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/api/v1/authenticated")
echo "   API endpoint: HTTP $API_CODE"
echo ""

# Evaluate results
SUCCESS=true

if [ "$FRONTEND_CODE" != "200" ]; then
    echo "❌ Frontend test failed! Expected HTTP 200, got $FRONTEND_CODE"
    SUCCESS=false
fi

if [ "$API_CODE" = "301" ]; then
    echo "❌ API test failed! Getting 301 redirect (allow-insecure not working)"
    SUCCESS=false
elif [ "$API_CODE" = "401" ] || [ "$API_CODE" = "200" ]; then
    echo "✅ API test passed! HTTP $API_CODE is expected"
else
    echo "⚠️  API returned unexpected code: HTTP $API_CODE"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$SUCCESS" = true ]; then
    echo "✅ DEPLOYMENT SUCCESSFUL!"
    echo ""
    echo "🌐 Application URL:"
    echo "   https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/"
    echo ""
    echo "📊 Rollback Information (if needed):"
    echo "   Previous Frontend Revision: $CURRENT_FRONTEND_REVISION"
    echo "   Previous API Revision: $CURRENT_API_REVISION"
    echo ""
    echo "   To rollback:"
    echo "   ./scripts/azure-rollback.sh $CURRENT_FRONTEND_REVISION $CURRENT_API_REVISION"
else
    echo "❌ DEPLOYMENT FAILED - ROLLING BACK"
    echo ""
    echo "🔄 Rolling back to previous revisions..."

    # Enable multiple revision mode if needed
    az containerapp revision set-mode --name $FRONTEND_APP --resource-group $RESOURCE_GROUP --mode multiple --output none
    az containerapp revision set-mode --name $API_APP --resource-group $RESOURCE_GROUP --mode multiple --output none

    # Route traffic back to old revisions
    az containerapp ingress traffic set --name $FRONTEND_APP --resource-group $RESOURCE_GROUP --revision-weight $CURRENT_FRONTEND_REVISION=100 --output none
    az containerapp ingress traffic set --name $API_APP --resource-group $RESOURCE_GROUP --revision-weight $CURRENT_API_REVISION=100 --output none

    echo "✅ Rolled back to previous revisions"
    echo ""
    exit 1
fi

echo "═══════════════════════════════════════════════════════════"
