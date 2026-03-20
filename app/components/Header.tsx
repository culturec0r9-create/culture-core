// app/components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">
          culture core
        </Link>

        <nav className="flex gap-4 text-sm text-slate-600">
          <Link href="/">Home</Link>
          <Link href="/tags">Tags</Link>
        </nav>
      </div>
    </header>
  );
}