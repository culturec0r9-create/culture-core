// app/page.tsx
import { Header } from "./components/Header";
import { ArticleCard } from "./components/ArticleCard";
import { articles } from "./lib/articles";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
            Online Magazine
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            culture core
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            ストリートカルチャー、K-POP、ファッションをゆるく深掘りするメディアサイト。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}