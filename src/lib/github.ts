export interface GithubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
}

interface RawGithubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  language: string;
}

export async function getGithubRepos(username: string): Promise<GithubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=6`, {
      headers: {
        'User-Agent': 'portfolio-app'
      },
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch repos');
    }
    
    const data: RawGithubRepo[] = await response.json();
    return data.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      html_url: repo.html_url,
      language: repo.language
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    // Return mock data for development if fetch fails
    return [
      {
        name: "agent-reasoning-engine",
        description: "A research platform for autonomous agents using LangGraph.",
        stargazers_count: 120,
        html_url: "#",
        language: "Python"
      },
      {
        name: "nextjs-portfolio-template",
        description: "Minimalist portfolio template for engineers.",
        stargazers_count: 45,
        html_url: "#",
        language: "TypeScript"
      }
    ];
  }
}
