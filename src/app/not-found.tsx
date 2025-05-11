import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">404 - ページが見つかりません</h1>
      <p className="text-xl mb-6">お探しのページは存在しないか、移動した可能性があります。</p>
      <Link
        href="/"
        className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        ホームに戻る
      </Link>
    </div>
  );
} 