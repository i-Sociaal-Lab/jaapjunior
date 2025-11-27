# Quick Build and Deploy Guide - DEFAULT_AGENT Feature

## Current Status

✅ Code implemented and committed
✅ Environment variables configured (Azure)
⏳ Awaiting container image rebuild

## Quick Deploy - Azure

### Step 1: Authenticate
```bash
az login
```

### Step 2: Build from GitHub (Requires Permission)
If you have access to the GitHub repository, use:
```bash
az acr build \
  --registry jaapjuniorregistry \
  --image jaapjunior-api:latest \
  --file packages/api/Dockerfile.combined \
  --platform linux/amd64 \
  https://github.com/i-Sociaal-Lab/jaapjunior.git#main
```

### Step 3: Redeploy
```bash
az containerapp update \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  --image jaapjuniorregistry.azurecr.io/jaapjunior-api:latest
```

### Step 4: Wait for Rollout
```bash
# Check status
az containerapp revision list \
  --name jaapjunior-api \
  --resource-group chatbot_jaapjunior_rg \
  -o table

# When you see a NEW revision with Active=True, it's ready
```

### Step 5: Test
```bash
curl -s "https://jaapjunior.bluerock-7a3df5c8.westeurope.azurecontainerapps.io/api/v1/agents" | jq .

# Should show:
# {
#   "agents": [...],
#   "defaultAgent": "cs-wmo"
# }
```

## Quick Deploy - Railway

### Step 1: Merge to Main Branch
```bash
# From your local repository:
git checkout main
git merge railway-unified
git push origin main
```

### Step 2: Set Environment Variables in Railway Dashboard

1. Go to https://railway.app
2. Select your project
3. Select the service (API)
4. Settings → Variables
5. Add/Update:
   ```
   ENABLED_AGENTS=jw,wmo,cs-wmo
   DEFAULT_AGENT=cs-wmo
   ```
6. Save (Railway will automatically rebuild and deploy)

### Step 3: Monitor Deployment
```bash
# Via CLI (if installed)
railway logs --follow

# Via Dashboard: Check Deployments tab for build progress
```

### Step 4: Test
```bash
# Get your Railway URL from dashboard, then:
RAILWAY_URL="https://your-app.railway.app" ./test-railway.sh
```

## Verification Checklist

After deployment, verify:

- [ ] API returns `/api/v1/agents` with `defaultAgent` field
- [ ] `defaultAgent` value is `cs-wmo`
- [ ] Frontend loads without errors
- [ ] Agent dropdown shows 3 agents (JW, WMO, CS-WMO)
- [ ] CS-WMO is pre-selected in dropdown
- [ ] Can send test message successfully

## Troubleshooting

### API doesn't return defaultAgent field
- Build may not have completed
- Check latest revision: `az containerapp revision list --name jaapjunior-api --resource-group chatbot_jaapjunior_rg`
- If still old revision, wait 2-3 minutes for new build

### Wrong default agent selected
- Check `DEFAULT_AGENT` environment variable is set correctly
- Verify it's in the `ENABLED_AGENTS` list
- Restart container (redeploy)

### Frontend not loading
- Check frontend container health: `az containerapp show --name jaapjunior --resource-group chatbot_jaapjunior_rg`
- Check if API URL is correct in frontend environment variables

## Files Changed

```
packages/api/src/api.ts          - /api/v1/agents now returns defaultAgent
packages/frontend/src/components/TheChat.vue  - Reads defaultAgent from API
docker-compose.yml               - Added DEFAULT_AGENT env var
```

## Git Information

**Latest Commit:**
```
b294c2a Add DEFAULT_AGENT configuration feature for runtime agent selection
```

**Branch:** `railway-unified` (ready to merge to main)

## Contact & Support

For issues:
1. Check DEPLOYMENT_REPORT.md for detailed troubleshooting
2. Review Azure/Railway logs
3. Verify environment variables are correctly set
4. Check commit b294c2a includes the necessary changes
