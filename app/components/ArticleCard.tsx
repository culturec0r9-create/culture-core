// app/components/ArticleCard.tsx
import Link from "next/link";
import type { Article } from "../lib/articles";
import { slugify } from "../lib/articles";

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const categorySlug = slugify(article.category);

  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex justify-between text-xs text-slate-400 mb-2">
        <Link
          href={`/categories/${categorySlug}`}
          className="uppercase hover:underline"
        >
          {article.category}
        </Link>
        <time>{article.date}</time>
      </div>

      <Link href={`/articles/${article.id}`}>
        <h2 className="text-sm font-semibold text-white hover:underline">
          {article.title}
        </h2>
      </Link>
    </article>
  );
}