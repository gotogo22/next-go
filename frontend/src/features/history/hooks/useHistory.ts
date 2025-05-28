import { useState } from "react";
import { historyApi } from "../api";
import { HistoryResponse } from "../types";

/**
 * 視聴履歴を管理するカスタムフック
 * 
 * @param {HistoryResponse} initialData - 初期データ
 * @returns {Object} 視聴履歴の状態と操作関数
 * @returns {HistoryResponse} history - 視聴履歴データ
 * @returns {boolean} isLoading - 読み込み中かどうか
 * @returns {boolean} isClearing - 削除処理中かどうか
 * @returns {Error | null} error - エラー情報
 * @returns {number} total - 総件数
 * @returns {() => Promise<void>} refreshHistory - 履歴を更新する関数
 * @returns {() => Promise<void>} clearAllHistory - 履歴を全削除する関数
 */
export function useHistory(initialData: HistoryResponse) {
  const [history, setHistory] = useState<HistoryResponse>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isClearing, setIsClearing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  /**
   * 履歴を更新する関数
   * 
   * APIから最新の履歴を取得し、状態を更新する
   */
  const refreshHistory = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await historyApi.getHistory();
      setHistory(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("履歴の取得に失敗しました"));
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * 履歴を全削除する関数
   * 
   * APIで履歴を全削除し、状態を空に更新する
   */
  const clearAllHistory = async () => {
    try {
      setIsClearing(true);
      setError(null);
      
      // 履歴削除APIを呼び出し
      await historyApi.clearHistory();
      
      // ローカル状態を空に更新
      setHistory({
        items: [],
        total: 0
      });
      
    } catch (err) {
      setError(err instanceof Error ? err : new Error("履歴の削除に失敗しました"));
    } finally {
      setIsClearing(false);
    }
  };

  return {
    history,
    isLoading,
    isClearing,
    error,
    total: history.total,
    refreshHistory,
    clearAllHistory,
  };
} 