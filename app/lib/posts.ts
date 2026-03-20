import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/articles");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        category: String(data.category ?? "Uncategorized"),
        tags: Array.isArray(data.tags) ? data.tags : [],
      };
    });

  posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    category: String(data.category ?? "Uncategorized"),
    tags: Array.isArray(data.tags) ? data.tags : [],
    contentHtml,
  };
}

export function getAllTags() {
  const posts = getAllPosts();

  const tagMap = new Map<string, number>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      const normalizedTag = tag;
      tagMap.set(normalizedTag, (tagMap.get(normalizedTag) ?? 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({
      tag,
      count,
    }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}