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
      `序論
      最近、ファッションシーンでも「cortis」という名前を目にすることが増えてきた。
      K-POPグループであり、同時にアーティストとしても活動するcortis。
      cortisは音楽だけでなく、そのスタイルでも強い存在感を放っている。
      最近、若い世代を中心に「cortisのファッションは面白い」「かっこいい」といった声がよく上がる。
      ステージ上だけでなく、ビジュアルやスタイリングそのものが一つのカルチャーとして受け取られているのだ。

      では、なぜcortisはここまで若者を惹きつけるのか。
      本記事では、その理由をファッションという視点から掘り下げていく。

      cortisとは
      cortisは、近年K-POPシーンに登場したボーイズグループである。
      音楽活動と同時に強いビジュアル性とスタイル性でも注目を集めている存在である。
      楽曲やパフォーマンスはもちろんのこと、メンバーそれぞれのファッションや立ち振る舞いが若い世代を中心に支持されている。
      「アーティスト」としてだけでなく、「スタイルアイコン」としても語られることが多い。`,
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