// app/categories/[category]/page.tsx
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Header } from "../../components/Header";
import { articles, slugify } from "../../lib/articles";

type CategoryPageProps = {
  params: Promise<{ category?: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params; // ✅ ここが重要
  const categoryParam = (category ?? "all").toLowerCase();

  // タイポ救済（任意）
  if (categoryParam === "fashon") {
    redirect("/categories/fashion");
  }

  const filtered =
    categoryParam === "all"
      ? articles
      : articles.filter((a) => slugify(a.category) === categoryParam);

  if (filtered.length === 0) return notFound();

  const label =
    categoryParam === "all" ? "All Articles" : filtered[0]?.category ?? "Category";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Category
          </p>
          <h1 className="mt-2 text-2xl font-bold">{label}</h1>
        </div>

        <div className="space-y-8">
          {filtered.map((article, index) => {
            const categorySlug = slugify(article.category);

            return index === 0 ? (
              <article
                key={article.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div className="aspect-[16/9] bg-slate-100" />
                <div className="p-5 space-y-3">
                  <div className="flex justify-between text-xs text-slate-500">
                    <Link
                      href={`/categories/${categorySlug}`}
                      className="uppercase tracking-wide hover:underline"
                    >
                      {article.category}
                    </Link>
                    <time>{article.date}</time>
                  </div>

                  <Link href={`/articles/${article.id}`}>
                    <h2 className="text-xl font-semibold hover:underline">
                      {article.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-slate-600 line-clamp-3">
                    {article.content}
                  </p>
                </div>
              </article>
            ) : (
              <div
                key={article.id}
                className="relative border-l border-slate-200 pl-6"
              >
                <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-slate-400" />
                <div className="text-xs text-slate-500">
                  <time>{article.date}</time>{" "}
                  <Link
                    href={`/categories/${categorySlug}`}
                    className="uppercase hover:underline"
                  >
                    {article.category}
                  </Link>
                </div>
                <Link
                  href={`/articles/${article.id}`}
                  className="block mt-1 text-sm font-semibold hover:underline"
                >
                  {article.title}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}