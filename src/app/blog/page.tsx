import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-text mb-6">
            Lab Notes<span className="text-accent">.</span>
          </h1>
          <p className="text-xl text-muted-text max-w-2xl leading-relaxed">
            Explorations in autonomous agents, AI reasoning systems, and intelligence platforms.
          </p>
        </header>

        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="group relative">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="mb-2 text-sm font-mono text-accent">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <h2 className="text-2xl font-bold text-primary-text mb-3 group-hover:text-accent transition-colors duration-300 tracking-tight">
                  {post.title}
                </h2>
                <p className="text-muted-text leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex gap-2">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-secondary rounded border border-secondary text-muted-text">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
          
          {posts.length === 0 && (
            <div className="text-muted-text italic">
              New lab notes coming soon.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
