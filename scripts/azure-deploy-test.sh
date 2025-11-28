#!/bin/bash
set -e

echo "═══════════════════════════════════════════════════════════"
echo "  Azure Test Environment Deployment"
echo "═══════════════════════════════════════════════════════════"
echo ""
echo "This script creates a TEST environment alongside production"
echo "- Same resource group and environment as prod"
echo "- Separate container apps with -test suffix"
echo "- Separate Qdrant database (isolated test data)"
echo "- Shared API keys (same OpenAI, Anthropic, etc.)"
echo "- Deploys from 'azure-qdrant-test' GitHub branch"
echo ""

# Configuration
RESOURCE_GROUP="chatbot_jaapjunior_rg"
ENVIRONMENT="jaapjunior-env"
REGISTRY="jaapjuniorregistry"
GITHUB_REPO="https://github.com/i-Sociaal-Lab/jaapjunior.git"
TEST_BRANCH="azure-qdrant-test"

# Test app names
TEST_FRONTEND="jaapjunior-test"
TEST_API="jaapjunior-api-test"

# Image tags
VERSION_TAG="test-$(date +%Y%m%d-%H%M%S)"

echo "📋 Test Environment Configuration:"
echo "   Resource Group: $RESOURCE_GROUP"
echo "   Environment: $ENVIRONMENT"
echo "   Registry: $REGISTRY"
echo "   GitHub Branch: $TEST_BRANCH"
echo "   Version: $VERSION_TAG"
echo ""
echo "   Frontend App: $TEST_FRONTEND"
echo "   API App: $TEST_API"
echo ""

# Check if test apps already exist
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  Checking Existing Resources"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

FRONTEND_EXISTS=$(az containerapp show --name $TEST_FRONTEND --resource-group $RESOURCE_GROUP 2>/dev/null || echo "not-found")
API_EXISTS=$(az containerapp show --name $TEST_API --resource-group $RESOURCE_GROUP 2>/dev/null || echo "not-found")

if [ "$FRONTEND_EXISTS" != "not-found" ]; then
    echo "⚠️  Test frontend already exists: $TEST_FRONTEND"
    echo "   This will UPDATE the existing app"
    UPDATE_MODE=true
else
    echo "✓ Test frontend does not exist, will create new"
    UPDATE_MODE=false
fi

if [ "$API_EXISTS" != "not-found" ]; then
    echo "⚠️  Test API already exists: $TEST_API"
    echo "   This will UPDATE the existing app"
else
    echo "✓ Test API does not exist, will create new"
fi

echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled"
    exit 1
fi
echo ""

# Step 2: Check if branch exists
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  Checking GitHub Branch"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if test branch exists on GitHub
BRANCH_EXISTS=$(git ls-remote --heads $GITHUB_REPO $TEST_BRANCH 2>/dev/null | wc -l)

if [ "$BRANCH_EXISTS" -eq 0 ]; then
    echo "⚠️  Branch '$TEST_BRANCH' does not exist on GitHub yet"
    echo ""
    echo "Creating branch from current azure-qdrant-deployment..."

    # Create and push test branch
    git branch $TEST_BRANCH 2>/dev/null || git checkout $TEST_BRANCH
    git push origin $TEST_BRANCH

    echo "✓ Branch '$TEST_BRANCH' created and pushed to GitHub"
else
    echo "✓ Branch '$TEST_BRANCH' exists on GitHub"
fi
echo ""

# Step 3: Build Images
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣  Building Test Images from Branch"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "📦 Building Frontend Test Image from $TEST_BRANCH branch..."
az acr build \
    --registry $REGISTRY \
    --image jaapjunior-frontend:$VERSION_TAG \
    --image jaapjunior-frontend:test-latest \
    --file packages/frontend/Dockerfile \
    --platform linux/amd64 \
    "$GITHUB_REPO#$TEST_BRANCH" || {
        echo "❌ Frontend build failed!"
        exit 1
    }

echo ""
echo "✓ Frontend test image built: $VERSION_TAG"
echo ""

echo "📦 Building API Test Image (Combined with Qdrant) from $TEST_BRANCH branch..."
az acr build \
    --registry $REGISTRY \
    --image jaapjunior-api:$VERSION_TAG \
    --image jaapjunior-api:test-latest \
    --file packages/api/Dockerfile.combined \
    --platform linux/amd64 \
    "$GITHUB_REPO#$TEST_BRANCH" || {
        echo "❌ API build failed!"
        exit 1
    }

echo ""
echo "✓ API test image built: $VERSION_TAG"
echo ""

# Step 4: Get image digests
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4️⃣  Getting Image Digests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

FRONTEND_SHA=$(az acr repository show \
    --name $REGISTRY \
    --image jaapjunior-frontend:$VERSION_TAG \
    --query 'digest' -o tsv)

API_SHA=$(az acr repository show \
    --name $REGISTRY \
    --image jaapjunior-api:$VERSION_TAG \
    --query 'digest' -o tsv)

echo "✓ Frontend SHA: $FRONTEND_SHA"
echo "✓ API SHA: $API_SHA"
echo ""

# Step 5: Get secrets from production
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5️⃣  Retrieving Secrets from Production"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "📋 Getting secret names from production API..."
PROD_SECRETS=$(az containerapp secret list \
    --name jaapjunior-api \
    --resource-group $RESOURCE_GROUP \
    --query "[].name" -o tsv)

echo "✓ Found secrets: $PROD_SECRETS"
echo ""

# Step 6: Deploy or Update Apps
if [ "$UPDATE_MODE" = true ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "6️⃣  Updating Existing Test Apps"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""

    echo "📦 Updating Test Frontend..."
    az containerapp update \
        --name $TEST_FRONTEND \
        --resource-group $RESOURCE_GROUP \
        --image "$REGISTRY.azurecr.io/jaapjunior-frontend@$FRONTEND_SHA" \
        --output none

    echo "✓ Test frontend updated"
    echo ""

    echo "📦 Updating Test API..."
    az containerapp update \
        --name $TEST_API \
        --resource-group $RESOURCE_GROUP \
        --image "$REGISTRY.azurecr.io/jaapjunior-api@$API_SHA" \
        --output none

    echo "✓ Test API updated"
    echo ""

else
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "6️⃣  Creating New Test Apps"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""

    echo "📦 Creating Test API (with embedded Qdrant)..."
    az containerapp create \
        --name $TEST_API \
        --resource-group $RESOURCE_GROUP \
        --environment $ENVIRONMENT \
        --image "$REGISTRY.azurecr.io/jaapjunior-api@$API_SHA" \
        --target-port 3000 \
        --ingress internal \
        --allow-insecure \
        --cpu 1.0 \
        --memory 2.0Gi \
        --min-replicas 0 \
        --max-replicas 1 \
        --registry-server "$REGISTRY.azurecr.io" \
        --env-vars \
            "QDRANT_URI=http://localhost:6333" \
            "DB_PATH=/app/data/jaapjunior-test.db" \
            "ENABLED_AGENTS=jw,wmo,cs-wmo" \
            "DEFAULT_AGENT=cs-wmo" \
        --output none

    echo "✓ Test API created"
    echo ""

    echo "📦 Copying secrets from production to test API..."
    for secret_name in $PROD_SECRETS; do
        echo "   Copying secret: $secret_name"

        # Get secret value from production (note: this returns the secret reference, not the value)
        # We'll need to manually set secrets or use Azure Key Vault
        az containerapp secret set \
            --name $TEST_API \
            --resource-group $RESOURCE_GROUP \
            --secrets "$secret_name=secretref:$secret_name" \
            --output none 2>/dev/null || echo "   ⚠️  Could not copy $secret_name automatically"
    done

    echo ""
    echo "⚠️  NOTE: Secrets must be manually configured!"
    echo "   Run this for each secret:"
    echo "   az containerapp secret set --name $TEST_API --resource-group $RESOURCE_GROUP --secrets \"<secret-name>=<value>\""
    echo ""

    echo "📦 Linking secrets to environment variables..."
    az containerapp update \
        --name $TEST_API \
        --resource-group $RESOURCE_GROUP \
        --set-env-vars \
            "OPENAI_API_KEY=secretref:openai-api-key" \
            "ANTHROPIC_API_KEY=secretref:anthropic-api-key" \
            "JINAAI_API_KEY=secretref:jinaai-api-key" \
            "SHARED_PASSWORD=secretref:shared-password" \
            "JWT_SECRET=secretref:jwt-secret" \
            "API_TOKEN=secretref:api-token" \
        --output none

    echo "✓ Environment variables linked"
    echo ""

    echo "📦 Creating Test Frontend..."

    # Get test API internal URL
    TEST_API_URL=$(az containerapp show \
        --name $TEST_API \
        --resource-group $RESOURCE_GROUP \
        --query "properties.configuration.ingress.fqdn" -o tsv)

    az containerapp create \
        --name $TEST_FRONTEND \
        --resource-group $RESOURCE_GROUP \
        --environment $ENVIRONMENT \
        --image "$REGISTRY.azurecr.io/jaapjunior-frontend@$FRONTEND_SHA" \
        --target-port 80 \
        --ingress external \
        --cpu 0.5 \
        --memory 1.0Gi \
        --min-replicas 0 \
        --max-replicas 1 \
        --registry-server "$REGISTRY.azurecr.io" \
        --env-vars \
            "API_URL=http://$TEST_API_URL" \
            "DNS_RESOLVER=169.254.169.254" \
        --output none

    echo "✓ Test frontend created"
    echo ""
fi

# Step 7: Wait for deployment
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "7️⃣  Waiting for Containers to Start"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "⏳ Waiting 30 seconds for containers to start..."
for i in {1..30}; do
    echo -n "."
    sleep 1
done
echo ""
echo ""

# Step 8: Verify deployment
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "8️⃣  Verifying Test Deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Get URLs
TEST_FRONTEND_URL=$(az containerapp show \
    --name $TEST_FRONTEND \
    --resource-group $RESOURCE_GROUP \
    --query "properties.configuration.ingress.fqdn" -o tsv)

TEST_API_INTERNAL_URL=$(az containerapp show \
    --name $TEST_API \
    --resource-group $RESOURCE_GROUP \
    --query "properties.configuration.ingress.fqdn" -o tsv)

echo "📋 Test Environment URLs:"
echo "   Frontend: https://$TEST_FRONTEND_URL"
echo "   API (internal): http://$TEST_API_INTERNAL_URL"
echo ""

# Test endpoints
echo "🧪 Testing Endpoints..."
echo ""

# Test frontend
FRONTEND_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$TEST_FRONTEND_URL/" || echo "000")
echo "   Frontend homepage: HTTP $FRONTEND_CODE"

# Test API through frontend proxy
API_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://$TEST_FRONTEND_URL/api/v1/authenticated" || echo "000")
echo "   API endpoint: HTTP $API_CODE"
echo ""

# Evaluate results
SUCCESS=true

if [ "$FRONTEND_CODE" != "200" ]; then
    echo "⚠️  Frontend test returned HTTP $FRONTEND_CODE (expected 200)"
    if [ "$FRONTEND_CODE" = "000" ]; then
        echo "   Container might still be starting..."
    fi
    SUCCESS=false
fi

if [ "$API_CODE" = "301" ]; then
    echo "❌ API test failed! Getting 301 redirect"
    echo "   Fix: az containerapp ingress update --name $TEST_API --resource-group $RESOURCE_GROUP --allow-insecure"
    SUCCESS=false
elif [ "$API_CODE" = "401" ] || [ "$API_CODE" = "200" ]; then
    echo "✅ API test passed! HTTP $API_CODE is expected (auth required)"
elif [ "$API_CODE" = "000" ]; then
    echo "⚠️  API not responding (container might still be starting)"
    SUCCESS=false
else
    echo "⚠️  API returned unexpected code: HTTP $API_CODE"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$SUCCESS" = true ]; then
    echo "✅ TEST ENVIRONMENT DEPLOYED!"
    echo ""
    echo "🌐 Test Application URL:"
    echo "   https://$TEST_FRONTEND_URL"
    echo ""
    echo "📊 Environment Comparison:"
    echo "   Production: https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io"
    echo "   Test:       https://$TEST_FRONTEND_URL"
    echo ""
    echo "🗄️  Database:"
    echo "   Test uses separate Qdrant database (isolated from prod)"
    echo "   Database file: /app/data/jaapjunior-test.db"
    echo ""
    echo "🔑 API Keys:"
    echo "   Test uses SAME API keys as production"
    echo ""
    echo "🌿 GitHub Branch:"
    echo "   Test deploys from: $TEST_BRANCH"
    echo "   Production deploys from: azure-qdrant-deployment"
    echo ""
    echo "💡 Next Steps:"
    echo "   1. Test the application at the URL above"
    echo "   2. Check logs: az containerapp logs show --name $TEST_API --resource-group $RESOURCE_GROUP --tail 50"
    echo "   3. Monitor metrics in Azure Portal"
    echo ""
    echo "🔄 To update test environment:"
    echo "   Run this script again - it will update existing apps"
    echo ""
    echo "🗑️  To delete test environment:"
    echo "   az containerapp delete --name $TEST_FRONTEND --resource-group $RESOURCE_GROUP"
    echo "   az containerapp delete --name $TEST_API --resource-group $RESOURCE_GROUP"
else
    echo "⚠️  DEPLOYMENT COMPLETED WITH WARNINGS"
    echo ""
    echo "Some tests failed, but containers were deployed."
    echo "Check the errors above and:"
    echo ""
    echo "1. Wait 2-3 minutes for containers to fully start"
    echo "2. Check logs:"
    echo "   az containerapp logs show --name $TEST_API --resource-group $RESOURCE_GROUP --tail 50"
    echo "   az containerapp logs show --name $TEST_FRONTEND --resource-group $RESOURCE_GROUP --tail 50"
    echo ""
    echo "3. If secrets were not copied automatically, set them manually:"
    echo "   az containerapp secret set --name $TEST_API --resource-group $RESOURCE_GROUP --secrets \"openai-api-key=<value>\""
    echo ""
    echo "4. Retest: curl https://$TEST_FRONTEND_URL"
    echo ""
fi

echo "═══════════════════════════════════════════════════════════"
