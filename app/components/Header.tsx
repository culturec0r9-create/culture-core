// app/components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold tracking-wide text-white">
          culture core
        </Link>

        <nav className="flex gap-4 text-sm text-slate-200">
          <Link href="/" className="hover:text-white">
            最新記事
          </Link>
          {/* ここで /categories/all に飛ばす */}
          <Link href="/categories/all" className="hover:text-white">
            カテゴリ
          </Link>
          <Link href="/articles/1" className="hover:text-white">
            特集（仮）
          </Link>
        </nav>
      </div>
    </header>
  );
}