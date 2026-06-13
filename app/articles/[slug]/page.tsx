import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { slugify } from "@/lib/slugify";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const posts = getAllPosts();
  const exists = posts.some((post) => post.slug === slug);

  if (!exists) {
    notFound();
  }

  const post = await getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8">
          <Link
            href={`/categories/${slugify(post.category)}`}
            className="text-xs uppercase tracking-[0.2em] text-slate-500 hover:underline"
          >
            {post.category}
          </Link>

          <h1 className="mt-3 text-3xl font-bold leading-tight">
            {post.title}
          </h1>

          <p className="mt-3 text-sm text-slate-500">{post.date}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${slugify(tag)}`}
                className="text-xs text-slate-500 hover:underline"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}