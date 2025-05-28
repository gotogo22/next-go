"use client";

import { HistoryList } from "@/features/history/components/HistoryList";
import { useHistory } from "@/features/history/hooks/useHistory";
import { Button } from "@/components/ui/Button";
import { Trash2, RotateCcw } from "lucide-react";
import { HistoryResponse } from "@/features/history/types";
import { useState } from "react";

/**
 * 視聴履歴のクライアントコンポーネント
 * 
 * @param {Object} props - コンポーネントのプロパティ
 * @param {HistoryResponse} props.initialData - 初期データ
 * @returns {JSX.Element} 視聴履歴ページのコンポーネント
 */
export function HistoryClient({ initialData }: { initialData: HistoryResponse }) {
  const { history, isLoading, isClearing, error, total, refreshHistory, clearAllHistory } = useHistory(initialData);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  /**
   * 履歴をクリアする関数
   * 
   * 確認ダイアログを表示してから削除処理を実行
   */
  const handleClearHistory = () => {
    setShowConfirmDialog(true);
  };

  /**
   * 履歴削除を確定する関数
   */
  const confirmClearHistory = async () => {
    setShowConfirmDialog(false);
    await clearAllHistory();
  };

  /**
   * 履歴削除をキャンセルする関数
   */
  const cancelClearHistory = () => {
    setShowConfirmDialog(false);
  };

  return (
    <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* 確認ダイアログ */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">履歴を削除しますか？</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              すべての視聴履歴が削除されます。この操作は取り消すことができません。
            </p>
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={cancelClearHistory}
                disabled={isClearing}
              >
                キャンセル
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmClearHistory}
                disabled={isClearing}
                className="flex items-center gap-1"
              >
                {isClearing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    削除中...
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />
                    削除する
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">視聴履歴</h1>
          <p className="text-gray-500 mt-1">合計 {total} 件の履歴</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline"
            onClick={refreshHistory}
            disabled={isLoading || isClearing}
            className="flex items-center gap-1"
          >
            <RotateCcw className="h-4 w-4" />
            更新
          </Button>
          <Button 
            variant="destructive"
            onClick={handleClearHistory}
            disabled={isLoading || isClearing || history.items.length === 0}
            className="flex items-center gap-1"
          >
            <Trash2 className="h-4 w-4" />
            履歴を消去
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg overflow-hidden">
        <HistoryList 
          items={history.items} 
          isLoading={isLoading} 
          error={error} 
        />
      </div>
    </main>
  );
} 