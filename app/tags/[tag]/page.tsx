import Link from "next/link";
import { Header } from "@/components/Header";
import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { slugify } from "@/lib/slugify";

type Props = {
  params: Promise<{ tag: string }>;
};

export default async function TagPage({ params }: Props) {
  const { tag } = await params;

  const posts = getAllPosts();

  const filtered = posts.filter((post) =>
    post.tags?.map(t => slugify(t)).includes(slugify(tag))
  );

  if (filtered.length === 0) return notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-bold mb-8">Tag: {tag}</h1>

        <div className="space-y-8">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="border-b border-slate-200 pb-6"
            >
              <div className="text-xs text-slate-500">
                {post.category} ・ {post.date}
              </div>

              <Link href={`/articles/${post.slug}`}>
                <h2 className="text-xl font-semibold mt-1 hover:underline">
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