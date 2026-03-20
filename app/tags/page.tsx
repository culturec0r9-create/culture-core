import Link from "next/link";
import { Header } from "@/components/Header";
import { getAllTags } from "@/lib/posts";
import { slugify } from "@/lib/slugify";

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Tags</h1>
          <p className="mt-2 text-sm text-slate-500">
            記事に付いているタグの一覧です。
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${slugify(tag)}`}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100"
            >
              #{tag} <span className="text-slate-400">({count})</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}