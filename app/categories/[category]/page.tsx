import Link from "next/link";
import { Header } from "@/components/Header";
import { getAllPosts } from "@/lib/posts";
import { slugify } from "@/lib/slugify";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  const posts = getAllPosts();

  const categories = Array.from(
    new Set(posts.map((post) => slugify(post.category)))
  );

  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const posts = getAllPosts();

  const filtered = posts.filter(
    (post) => slugify(post.category) === category
  );

  if (filtered.length === 0) {
    notFound();
  }

  const categoryName = filtered[0].category;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Category
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            {categoryName}
          </h1>
        </div>

        <div className="space-y-8">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}