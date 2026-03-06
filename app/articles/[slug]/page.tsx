import Link from "next/link";
import { Header } from "@/components/Header";
import { getAllPosts } from "@/lib/posts";
import { slugify } from "@/lib/slugify";

export default function Home() {
  const posts = getAllPosts();

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags ?? []))
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">culture core</h1>
          <p className="mt-2 text-sm text-slate-500">
            ストリート、K-POP、ファッションを深掘るオンラインメディア
          </p>
        </div>

        <div className="mb-6 flex gap-3 text-sm text-blue-600">
          {allTags.map((tag) => (
            <Link key={tag} href={`/tags/${slugify(tag)}`}>
              #{tag}
            </Link>
          ))}
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-slate-200 pb-6"
            >
              <div className="text-xs text-slate-500">
                {post.category} ・ {post.date}
              </div>

              <Link href={`/articles/${post.slug}`}>
                <h2 className="mt-1 text-xl font-semibold hover:underline">
                  {post.title}
                </h2>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}