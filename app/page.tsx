import Link from "next/link";
import { Header } from "@/components/Header";
import { getAllPosts } from "@/lib/posts";
import { slugify } from "@/lib/slugify";
import { ArticleCard } from "@/components/ArticleCard";

export default function Home() {
  const posts = getAllPosts();

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags ?? []))
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">culture core</h1>
          <p className="mt-2 text-sm text-slate-500">
            ストリート、K-POP、ファッションを深掘るオンラインメディア
          </p>
        </div>

        {/* <div className="mb-8 flex flex-wrap gap-3 text-sm text-blue-600">
          {allTags.map((tag) => (
            <Link key={tag} href={`/tags/${slugify(tag)}`}>
              #{tag}
            </Link>
          ))}
        </div>　*/}

        <div className="space-y-10">
          {posts.length > 0 && <ArticleCard post={posts[0]} large />}

          <div className="grid gap-6 md:grid-cols-2">
            {posts.slice(1).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}