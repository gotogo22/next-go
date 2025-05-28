"use client"

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Next.jsアプリケーションのエラー境界コンポーネント
 * 
 * アプリケーション内でエラーが発生した際に表示される
 * 
 * @param error - 発生したエラー
 * @param reset - エラー状態をリセットする関数
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーログを出力（本番環境では適切なログサービスに送信）
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center">
        <div className="text-red-500 mb-4">
          <svg
            className="mx-auto h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          エラーが発生しました
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          申し訳ございません。予期しないエラーが発生しました。
          しばらく経ってから再度お試しください。
        </p>

        {/* 開発環境でのみエラー詳細を表示 */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3 mb-4">
            <p className="text-xs text-red-700 dark:text-red-300 font-mono">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            再試行
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            ホームに戻る
          </Button>
        </div>
      </div>
    </div>
  );
} 