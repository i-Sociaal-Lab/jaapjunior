#!/bin/bash
set -e

echo "═══════════════════════════════════════════════════════════"
echo "  Azure Deployment - Rollback"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Check arguments
if [ $# -lt 2 ]; then
    echo "Usage: $0 <frontend-revision> <api-revision>"
    echo ""
    echo "Example:"
    echo "  $0 jaapjunior--0000019 jaapjunior-api--0000041"
    echo ""
    exit 1
fi

FRONTEND_REVISION=$1
API_REVISION=$2
RESOURCE_GROUP="chatbot_jaapjunior_rg"
FRONTEND_APP="jaapjunior"
API_APP="jaapjunior-api"

echo "🔄 Rolling back to:"
echo "   Frontend: $FRONTEND_REVISION"
echo "   API: $API_REVISION"
echo ""

# Enable multiple revision mode
echo "1️⃣  Enabling multiple revision mode..."
az containerapp revision set-mode \
    --name $FRONTEND_APP \
    --resource-group $RESOURCE_GROUP \
    --mode multiple \
    --output none

az containerapp revision set-mode \
    --name $API_APP \
    --resource-group $RESOURCE_GROUP \
    --mode multiple \
    --output none

echo "✓ Multiple revision mode enabled"
echo ""

# Route 100% traffic to specified revisions
echo "2️⃣  Routing traffic to specified revisions..."

az containerapp ingress traffic set \
    --name $FRONTEND_APP \
    --resource-group $RESOURCE_GROUP \
    --revision-weight $FRONTEND_REVISION=100 \
    --output none

az containerapp ingress traffic set \
    --name $API_APP \
    --resource-group $RESOURCE_GROUP \
    --revision-weight $API_REVISION=100 \
    --output none

echo "✓ Traffic routed to specified revisions"
echo ""

# Wait for changes to take effect
echo "3️⃣  Waiting for changes to propagate..."
sleep 20
echo ""

# Verify
echo "4️⃣  Verifying rollback..."
echo ""

FRONTEND_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/")
API_CODE=$(curl -s -o /dev/null -w "%{http_code}" "https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/api/v1/authenticated")

echo "   Frontend: HTTP $FRONTEND_CODE"
echo "   API: HTTP $API_CODE"
echo ""

if [ "$API_CODE" = "301" ]; then
    echo "⚠️  WARNING: API still returning 301!"
    echo "   This means allow-insecure needs to be enabled."
    echo "   Run: az containerapp ingress update --name $API_APP --resource-group $RESOURCE_GROUP --allow-insecure"
    echo ""
fi

echo "═══════════════════════════════════════════════════════════"
echo "✅ ROLLBACK COMPLETE"
echo "═══════════════════════════════════════════════════════════"
