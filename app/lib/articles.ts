// app/lib/articles.ts

export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  content: string;
};

export const articles: Article[] = [
  {
    id: "1",
    title: "2025年注目のストリートブランドまとめ：韓国・日本・USトレンド",
    category: "Fashion",
    date: "2025.12.01",
    imageUrl: "/images/sample-1.jpg",
    content:
      "2025年に注目すべきストリートブランドを、韓国・日本・USに分けてピックアップ。",
  },
  {
    id: "2",
    title: "K-POPアイドルが着用して話題になったアイテム10選",
    category: "K-POP",
    date: "2025.11.28",
    imageUrl: "/images/sample-2.jpg",
    content:
      "MV・空港ファッション・SNSで話題になったアイテムを紹介。",
  },
  {
    id: "3",
    title: "東京でチェックしたいスニーカーショップガイド",
    category: "Sneakers",
    date: "2025.11.20",
    imageUrl: "/images/sample-3.jpg",
    content:
      "原宿・渋谷・中目黒エリアの注目スニーカーショップを紹介。",
  },
];

// 🔽 追加：カテゴリ用 slug 生成
export function slugify(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 🔽 追加：記事取得
export function getArticleById(id: string) {
  return articles.find((article) => article.id === id);
}