/**
 * Next.jsアプリケーションのローディングコンポーネント
 * 
 * ページが読み込み中の際に表示される
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        {/* スピナーアニメーション */}
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
        
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          読み込み中...
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300">
          しばらくお待ちください
        </p>
      </div>
    </div>
  );
} 