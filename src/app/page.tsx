import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Agents from "@/components/agents";
import Research from "@/components/research";
import OpenSource from "@/components/opensource";
import TechStack from "@/components/tech-stack";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { getGithubRepos } from "@/lib/github";

export default async function Home() {
  // Fetch GitHub repos (server-side)
  const repos = await getGithubRepos("kiruthik-kumar");

  return (
    <main className="bg-background relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Agents />
      <Research />
      <OpenSource repos={repos} />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
