# Phase 1: Environment Scaffolding

## Objective
Establish a robust, type-safe development environment.

## Tasks
1. **Initialize Next.js:**
   - Command: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*"`
2. **Install Core Dependencies:**
   - `framer-motion`: For fluid, declarative animations.
   - `lucide-react`: For a consistent, minimalist icon set.
   - `clsx` & `tailwind-merge`: For clean conditional class management.
3. **Project Structure setup:**
   - `components/`: Atomic UI components.
   - `data/`: Content and project definitions.
   - `hooks/`: Custom React hooks (e.g., useScroll).
   - `lib/`: Utility functions (e.g., GitHub API client).
   - `styles/`: Global CSS and Tailwind directives.
4. **Environment Config:**
   - Set up `.env.local` for GitHub Personal Access Tokens (optional but recommended for rate limits).

## Verification
- Successful build of a "Hello World" page with TypeScript and Tailwind running.
- ESLint and Prettier configured for code consistency.