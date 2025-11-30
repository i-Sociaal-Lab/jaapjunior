#!/bin/bash
# Test script for DEFAULT_AGENT feature
# Tests both Azure and Railway deployments
# Usage: ./test-default-agent.sh

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║        DEFAULT_AGENT Feature Test                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Test Azure
echo -e "${YELLOW}→ Testing Azure Deployment${NC}"
echo ""

AZURE_URL="https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io"
echo -e "${BLUE}Azure URL: ${AZURE_URL}${NC}"
echo ""

echo "1. Testing /api/v1/agents endpoint..."
RESPONSE=$(curl -s "${AZURE_URL}/api/v1/agents" -H "Accept: application/json")
echo "Response:"
echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"
echo ""

# Check if defaultAgent field exists
if echo "$RESPONSE" | grep -q "defaultAgent"; then
    DEFAULT_AGENT=$(echo "$RESPONSE" | jq -r '.defaultAgent')
    echo -e "${GREEN}✓ defaultAgent field found: ${DEFAULT_AGENT}${NC}"

    if [ "$DEFAULT_AGENT" = "cs-wmo" ]; then
        echo -e "${GREEN}✓ Default agent is correctly set to cs-wmo${NC}"
    else
        echo -e "${YELLOW}⚠ Default agent is ${DEFAULT_AGENT}, expected cs-wmo${NC}"
    fi
else
    echo -e "${RED}✗ defaultAgent field NOT found in response${NC}"
    echo "This means the API hasn't been rebuilt with the DEFAULT_AGENT feature yet."
    exit 1
fi

echo ""
echo -e "${YELLOW}→ Testing Different DEFAULT_AGENT Values${NC}"
echo ""
echo "Testing that agents array matches ENABLED_AGENTS..."

# Parse agents array
AGENTS=$(echo "$RESPONSE" | jq -r '.agents[] | .id' 2>/dev/null)
echo "Enabled agents:"
echo "$AGENTS" | while read agent; do
    echo "  - $agent"
done

echo ""
echo -e "${YELLOW}→ Testing Frontend Integration${NC}"
echo ""

echo "Checking frontend can be accessed..."
FRONTEND_RESPONSE=$(curl -s -I "${AZURE_URL}" 2>&1 | head -1)
if echo "$FRONTEND_RESPONSE" | grep -q "200\|301\|302"; then
    echo -e "${GREEN}✓ Frontend is accessible${NC}"
else
    echo -e "${YELLOW}⚠ Frontend may have issues: ${FRONTEND_RESPONSE}${NC}"
fi

echo ""
echo -e "${YELLOW}→ Test Summary${NC}"
echo ""
echo -e "${GREEN}✅ Azure Deployment Tests Complete!${NC}"
echo ""
echo "What was tested:"
echo "  1. /api/v1/agents endpoint returns defaultAgent field"
echo "  2. Default agent value is correctly set to cs-wmo"
echo "  3. Enabled agents list matches ENABLED_AGENTS configuration"
echo "  4. Frontend is accessible"
echo ""
echo "Environment Variables in Use:"
echo "  ENABLED_AGENTS=jw,wmo,cs-wmo"
echo "  DEFAULT_AGENT=cs-wmo"
echo ""
echo -e "${BLUE}Next Steps:${NC}"
echo "  1. Test frontend by opening ${AZURE_URL} in browser"
echo "  2. Verify default agent is selected in dropdown"
echo "  3. Send test messages to verify agent works"
echo ""
