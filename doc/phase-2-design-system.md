# Phase 2: Design System & Global Styles

## Objective
Codify the visual identity into a reusable Tailwind configuration.

## Tasks
1. **Tailwind Extended Config:**
   - Define custom colors:
     - `background: #0D0D0D`
     - `secondary: #161616`
     - `primary-text: #EAEAEA`
     - `muted-text: #9CA3AF`
     - `accent: #4F9CF9`
   - Define custom font-family (Inter or System Sans-Serif).
2. **Global CSS (`globals.css`):**
   - Reset body background and text colors.
   - Implement smooth scrolling: `scroll-behavior: smooth`.
   - Custom scrollbar styling (minimalist dark theme).
3. **Animation Orchestration (`lib/animations.ts`):**
   - Create standard Framer Motion variants:
     - `fadeInUp`: Standard section entrance.
     - `staggerContainer`: For list/grid items.
     - `cardHover`: Subtle scale and border illumination.

## Verification
- Visual check of the color palette against the design requirements.
- Verification of typography hierarchy on a test page.