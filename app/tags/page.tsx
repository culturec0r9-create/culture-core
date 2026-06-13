import { Header } from "@/components/Header";
import { getAllPosts } from "@/lib/posts";
import { ArticleCard } from "@/components/ArticleCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Online Magazine
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            culture core
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            ストリート、K-POP、ファッションを深掘るオンラインメディア
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}