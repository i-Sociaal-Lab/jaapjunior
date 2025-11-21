#!/bin/bash
set -e

echo "═══════════════════════════════════════════════════════════"
echo "  Azure Deployment - Comprehensive Testing"
echo "═══════════════════════════════════════════════════════════"
echo ""

# Configuration
BASE_URL="https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io"
TESTS_PASSED=0
TESTS_FAILED=0

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test result tracking
pass_test() {
    echo -e "${GREEN}✓ PASS${NC}: $1"
    TESTS_PASSED=$((TESTS_PASSED + 1))
}

fail_test() {
    echo -e "${RED}✗ FAIL${NC}: $1"
    echo -e "  ${YELLOW}Details:${NC} $2"
    TESTS_FAILED=$((TESTS_FAILED + 1))
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1️⃣  Frontend Tests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test 1: Frontend homepage
echo "Test 1.1: Frontend homepage accessibility"
FRONTEND_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/")
if [ "$FRONTEND_CODE" = "200" ]; then
    pass_test "Frontend homepage returns HTTP 200"
else
    fail_test "Frontend homepage" "Expected HTTP 200, got $FRONTEND_CODE"
fi

# Test 2: Frontend serves HTML
echo "Test 1.2: Frontend serves HTML content"
FRONTEND_CONTENT=$(curl -s "$BASE_URL/" | head -20)
if echo "$FRONTEND_CONTENT" | grep -q "<!DOCTYPE html>"; then
    pass_test "Frontend serves valid HTML"
else
    fail_test "Frontend HTML content" "No DOCTYPE found in response"
fi

# Test 3: Frontend health check
echo "Test 1.3: Frontend health endpoint"
HEALTH_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/health")
if [ "$HEALTH_CODE" = "200" ]; then
    pass_test "Frontend health check returns HTTP 200"
else
    fail_test "Frontend health check" "Expected HTTP 200, got $HEALTH_CODE"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "2️⃣  Backend API Tests (via Frontend Proxy)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test 4: API endpoint accessible (should return 401 without auth)
echo "Test 2.1: API authentication endpoint"
API_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/api/v1/authenticated")
if [ "$API_CODE" = "401" ] || [ "$API_CODE" = "200" ]; then
    pass_test "API endpoint accessible (HTTP $API_CODE)"
else
    fail_test "API endpoint" "Expected HTTP 401 or 200, got $API_CODE"
fi

# Test 5: Check for 301 redirects (the bug we fixed)
echo "Test 2.2: No 301 redirects (allowInsecure check)"
if [ "$API_CODE" = "301" ]; then
    fail_test "API 301 redirect detected" "allowInsecure is not enabled!"
else
    pass_test "No 301 redirects detected"
fi

# Test 6: API health check
echo "Test 2.3: API health endpoint"
API_HEALTH_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/api/v1/health")
if [ "$API_HEALTH_CODE" = "200" ]; then
    pass_test "API health check returns HTTP 200"
else
    fail_test "API health check" "Expected HTTP 200, got $API_HEALTH_CODE"
fi

# Test 7: API responds with JSON
echo "Test 2.4: API returns JSON content"
API_RESPONSE=$(curl -s "$BASE_URL/api/v1/health")
if echo "$API_RESPONSE" | grep -q '"status"'; then
    pass_test "API returns valid JSON"
else
    fail_test "API JSON response" "No valid JSON detected"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "3️⃣  Frontend-Backend Integration Tests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test 8: Check CORS headers
echo "Test 3.1: CORS headers configuration"
CORS_HEADERS=$(curl -s -I "$BASE_URL/api/v1/health" | grep -i "access-control")
if [ -n "$CORS_HEADERS" ]; then
    pass_test "CORS headers present"
else
    fail_test "CORS headers" "No CORS headers found"
fi

# Test 9: Response time check
echo "Test 3.2: API response time"
RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" "$BASE_URL/api/v1/health")
RESPONSE_TIME_MS=$(echo "$RESPONSE_TIME * 1000" | bc | cut -d'.' -f1)
if [ "$RESPONSE_TIME_MS" -lt 3000 ]; then
    pass_test "API responds in ${RESPONSE_TIME_MS}ms (< 3000ms)"
else
    fail_test "API response time" "Response took ${RESPONSE_TIME_MS}ms (> 3000ms)"
fi

# Test 10: Check redirect chain (should be minimal)
echo "Test 3.3: No unnecessary redirects"
REDIRECT_COUNT=$(curl -s -o /dev/null -w "%{num_redirects}" "$BASE_URL/api/v1/health")
if [ "$REDIRECT_COUNT" = "0" ]; then
    pass_test "No redirects in API call chain"
else
    fail_test "Redirect chain" "Found $REDIRECT_COUNT redirects"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "4️⃣  Configuration Verification Tests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test 11: API ingress configuration
echo "Test 4.1: API ingress allowInsecure setting"
API_ALLOW_INSECURE=$(az containerapp ingress show \
    --name jaapjunior-api \
    --resource-group chatbot_jaapjunior_rg \
    --query 'allowInsecure' -o tsv 2>/dev/null || echo "error")

if [ "$API_ALLOW_INSECURE" = "true" ]; then
    pass_test "API allowInsecure is enabled"
else
    fail_test "API allowInsecure setting" "Value is: $API_ALLOW_INSECURE (should be: true)"
fi

# Test 12: API ingress type (should be internal)
echo "Test 4.2: API ingress type (internal/external)"
API_EXTERNAL=$(az containerapp ingress show \
    --name jaapjunior-api \
    --resource-group chatbot_jaapjunior_rg \
    --query 'external' -o tsv 2>/dev/null || echo "error")

if [ "$API_EXTERNAL" = "false" ]; then
    pass_test "API is internal (not external)"
else
    fail_test "API ingress type" "Value is: $API_EXTERNAL (should be: false)"
fi

# Test 13: Frontend ingress type (should be external)
echo "Test 4.3: Frontend ingress type (external)"
FRONTEND_EXTERNAL=$(az containerapp ingress show \
    --name jaapjunior \
    --resource-group chatbot_jaapjunior_rg \
    --query 'external' -o tsv 2>/dev/null || echo "error")

if [ "$FRONTEND_EXTERNAL" = "true" ]; then
    pass_test "Frontend is external"
else
    fail_test "Frontend ingress type" "Value is: $FRONTEND_EXTERNAL (should be: true)"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "5️⃣  Container Health Tests"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Test 14: Frontend container running
echo "Test 5.1: Frontend container status"
FRONTEND_RUNNING=$(az containerapp show \
    --name jaapjunior \
    --resource-group chatbot_jaapjunior_rg \
    --query 'properties.runningStatus' -o tsv 2>/dev/null || echo "error")

if [ "$FRONTEND_RUNNING" = "Running" ]; then
    pass_test "Frontend container is Running"
else
    fail_test "Frontend container status" "Status is: $FRONTEND_RUNNING"
fi

# Test 15: API container running
echo "Test 5.2: API container status"
API_RUNNING=$(az containerapp show \
    --name jaapjunior-api \
    --resource-group chatbot_jaapjunior_rg \
    --query 'properties.runningStatus' -o tsv 2>/dev/null || echo "error")

if [ "$API_RUNNING" = "Running" ]; then
    pass_test "API container is Running"
else
    fail_test "API container status" "Status is: $API_RUNNING"
fi

# Test 16: Check replica counts
echo "Test 5.3: Container replica counts"
FRONTEND_REPLICAS=$(az containerapp replica list \
    --name jaapjunior \
    --resource-group chatbot_jaapjunior_rg \
    --query 'length(@)' -o tsv 2>/dev/null || echo "0")

API_REPLICAS=$(az containerapp replica list \
    --name jaapjunior-api \
    --resource-group chatbot_jaapjunior_rg \
    --query 'length(@)' -o tsv 2>/dev/null || echo "0")

if [ "$FRONTEND_REPLICAS" -gt "0" ] && [ "$API_REPLICAS" -gt "0" ]; then
    pass_test "Frontend: $FRONTEND_REPLICAS replicas, API: $API_REPLICAS replicas"
else
    fail_test "Container replicas" "Frontend: $FRONTEND_REPLICAS, API: $API_REPLICAS"
fi

echo ""
echo "═══════════════════════════════════════════════════════════"
echo "  Test Results Summary"
echo "═══════════════════════════════════════════════════════════"
echo ""
TOTAL_TESTS=$((TESTS_PASSED + TESTS_FAILED))
echo "Total Tests:  $TOTAL_TESTS"
echo -e "${GREEN}Passed:       $TESTS_PASSED${NC}"
echo -e "${RED}Failed:       $TESTS_FAILED${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}  ✅ ALL TESTS PASSED - DEPLOYMENT VERIFIED${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    echo ""
    echo "🌐 Application URL:"
    echo "   $BASE_URL"
    echo ""
    exit 0
else
    echo -e "${RED}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${RED}  ❌ SOME TESTS FAILED - CHECK CONFIGURATION${NC}"
    echo -e "${RED}═══════════════════════════════════════════════════════════${NC}"
    echo ""
    exit 1
fi
