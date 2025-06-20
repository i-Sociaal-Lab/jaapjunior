# OpenCode Configuration for ketenbureau-chat-ai

## Commands

- **Lint & Format:** `pnpm fix` (Uses Biome at the root)
- **Typecheck:** `pnpm typecheck` (Runs `tsc --noEmit` in each package via Turbo)
- **Build:** `pnpm build` (Runs `turbo build`)
- **Test (Frontend):** `pnpm --filter @jaap/frontend test:unit` (Runs Vitest)
- **Run Single Test (Frontend):** `pnpm --filter @jaap/frontend test:unit <test_file_pattern>`
- **Run Dev:** `pnpm dev` (Runs `turbo dev`)

## Code Style Guidelines

- **Formatting:** Enforced by Biome. Run `pnpm fix` before committing.
- **Linting:** Biome (root), ESLint & Oxc (frontend). Run `pnpm fix` and `pnpm --filter @jaap/frontend lint`.
- **Imports:** Use standard TS/JS imports. Biome likely handles sorting.
- **Types:** Use TypeScript strict types where possible.
- **Naming:** camelCase for variables/functions, PascalCase for classes/components/types.
- **Frameworks:**
    - Frontend: Vue 3 (Composition API), Pinia, Vue Router, TailwindCSS, @nuxt/ui
    - API: Hono, Valibot
- **Error Handling:** Follow existing patterns in respective packages (e.g., Hono error handling in API).
- **Dependencies:** Check `package.json` before adding new dependencies. Use `pnpm` for installations.
- **General:** Follow existing code patterns and conventions within each package. Keep code concise and readable.
