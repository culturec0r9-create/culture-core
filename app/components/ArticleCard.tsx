import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { slugify } from "@/lib/slugify";
import Image from "next/image";

type Props = {
  post: PostMeta;
  large?: boolean;
};

export function ArticleCard({ post, large = false }: Props) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md ${
        large ? "md:grid md:grid-cols-2 md:gap-6" : ""
      }`}
    >
      <div className={large ? "aspect-[4/3] relative" : "aspect-[16/9] relative"}>
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-slate-100" />
        )}
      </div>

      <div className="space-y-3 p-5">
        <div className="flex justify-between text-xs text-slate-500">
          <span className="uppercase tracking-wide">{post.category}</span>
          <time>{post.date}</time>
        </div>

        <Link href={`/articles/${post.slug}`}>
          <h2
            className={`font-semibold leading-snug group-hover:underline ${
              large ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
    {post.title}
  </h2>
</Link>

        <div className="flex flex-wrap gap-2 text-xs text-blue-600">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${slugify(tag)}`}>
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}