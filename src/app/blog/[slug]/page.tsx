import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import rehypePrettyCode from 'rehype-pretty-code';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const options = {
  theme: 'one-dark-pro',
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <header className="mb-12 border-b border-secondary pb-12">
          <div className="text-sm font-mono text-accent mb-4 tracking-widest uppercase">
            {new Date(post.metadata.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-text mb-6">
            {post.metadata.title}
          </h1>
          <p className="text-xl text-muted-text max-w-2xl leading-relaxed">
            {post.metadata.description}
          </p>
        </header>

        <div className="prose prose-invert prose-custom max-w-none">
          <MDXRemote 
            source={post.content} 
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, options]],
              }
            }}
          />
        </div>
      </article>
      <Footer />
    </main>
  );
}
