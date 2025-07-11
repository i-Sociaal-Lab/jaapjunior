# OpenCode Configuration for ketenbureau-chat-ai

## Commands

- **Lint & Format:** `bun fix` (Uses Biome at the root)
- **Typecheck:** `bun typecheck` (Runs `tsc --noEmit` in each package via Turbo)
- **Build:** `bun build` (Runs `turbo build`)
- **Test (Frontend):** `bun --filter @jaap/frontend test:unit` (Runs Vitest)
- **Run Single Test (Frontend):** `bun --filter @jaap/frontend test:unit <test_file_pattern>`
- **Run Dev:** `bun dev` (Runs `turbo dev`)

## Code Style Guidelines

- **Formatting:** Enforced by Biome. Run `bun fix` before committing.
- **Linting:** Biome (root), ESLint & Oxc (frontend). Run `bun fix` and `bun --filter @jaap/frontend lint`.
- **Imports:** Use standard TS/JS imports. Biome likely handles sorting.
- **Types:** Use TypeScript strict types where possible.
- **Naming:** camelCase for variables/functions, PascalCase for classes/components/types.
- **Frameworks:**
    - Frontend: Vue 3 (Composition API), Pinia, Vue Router, TailwindCSS, @nuxt/ui
    - API: Hono, Valibot
- **Error Handling:** Follow existing patterns in respective packages (e.g., Hono error handling in API).
- **Dependencies:** Check `package.json` before adding new dependencies. Use `bun` for installations.
- **General:** Follow existing code patterns and conventions within each package. Keep code concise and readable.
