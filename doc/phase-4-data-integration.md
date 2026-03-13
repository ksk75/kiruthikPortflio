# Phase 4: Data Layer & Dynamic Content

## Objective
Implement the content management system and external integrations.

## Tasks
1. **Project Data (`data/projects.ts`):**
   - Define interfaces: `Project`, `Agent`, `Experience`.
   - Populate with placeholder data for "Web Crawling Agent", "Geopolitical Research Agent", etc.
2. **GitHub API Integration (`lib/github.ts`):**
   - Fetch repository data (stars, description, forks) using `fetch` with Next.js revalidation.
   - Map GitHub data to the `OpenSourceCard` component.
3. **Static Generation:**
   - Ensure the main page is statically generated for maximum performance.

## Verification
- Data correctly rendering from the TypeScript files.
- GitHub repositories appearing with real-time (or cached) star counts.