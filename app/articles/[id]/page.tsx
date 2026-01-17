// app/articles/[id]/page.tsx
import { Header } from "../../components/Header";
import { getArticleById } from "../../lib/articles";
import { notFound } from "next/navigation";

type ArticlePageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params; // ✅ ここが重要
  const article = getArticleById(id);

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Header />

      <article className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">
          {article.category}
        </div>

        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {article.title}
        </h1>

        <time className="mb-6 block text-sm text-slate-400">{article.date}</time>

        <div className="mb-6 aspect-[16/9] w-full rounded-2xl bg-slate-800" />

        <div className="prose prose-invert max-w-none text-sm leading-relaxed">
          <p>{article.content}</p>
        </div>
      </article>
    </main>
  );
}