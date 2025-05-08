export default function ProfilePage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">マイページ</h1>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 max-w-xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div>
            <div className="text-xl font-semibold">ユーザー名</div>
            <div className="text-gray-500 text-sm">user@example.com</div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">プロフィール情報</h2>
          <ul className="text-gray-700 dark:text-gray-300">
            <li>登録日: 2024-06-01</li>
            <li>アップロード動画数: 0</li>
            {/* 必要に応じて追加 */}
          </ul>
        </div>
      </div>
    </main>
  );
} 
