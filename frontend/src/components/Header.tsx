"use client";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?keyword=${encodeURIComponent(keyword)}`);
  };

  return (
    <header className="w-full h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-6 fixed top-0 left-0 z-30">
      {/* メニューボタン */}
      <button onClick={onMenuClick} className="mr-4">
        <Menu className="w-6 h-6" />
      </button>
      {/* ロゴ */}
      <Link href="/" className="text-2xl font-bold text-orange-500 mr-8">
        YouTubeクローン
      </Link>
      {/* 検索窓 */}
      <form className="flex-1 max-w-xl flex items-center" onSubmit={onSearch}>
        <input
          type="text"
          placeholder="動画を検索"
          className="w-full border rounded-l px-3 py-2 focus:outline-none"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-r"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>
      {/* ユーザーアイコン（ダミー） */}
      <div className="ml-8 flex items-center gap-2">
        <User className="w-7 h-7 text-gray-500" />
      </div>
    </header>
  );
} 
