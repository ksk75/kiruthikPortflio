# Kiruthik Kumar - AI Systems Engineer Portfolio

A minimalistic, modern, and research-lab inspired portfolio website built for AI engineers.

## Tech Stack

- **Frontend:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4 (CSS-first configuration)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data:** TypeScript + GitHub REST API

## Features

- **Apple-like Aesthetics:** Clean UI, large typography, and heavy focus on whitespace.
- **Research-Lab Feel:** Dark theme (#0D0D0D) with subtle technical accents.
- **AI Agent Showcase:** Dedicated section for autonomous systems and architecture diagrams.
- **Dynamic Open Source:** Fetches top repositories directly from GitHub.
- **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd kiruthikPortflio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Data

Most of the content is managed via TypeScript files for ease of maintenance:

- **Projects & Agents:** Edit `src/data/projects.ts`.
- **Animations:** Adjust variants in `src/lib/animations.ts`.
- **Styles/Colors:** Modify `@theme` variables in `src/app/globals.css`.

## Deployment (Vercel)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy your site.

*Note: For the GitHub API, you can optionally add a `GITHUB_TOKEN` environment variable in Vercel if you encounter rate limiting.*

## License

MIT
