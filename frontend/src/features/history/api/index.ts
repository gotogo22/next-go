import { HistoryItem, HistoryResponse } from "../types";

/**
 * モックの視聴履歴データ
 * 
 * 開発用の仮データとして使用
 */
const mockHistoryData: HistoryItem[] = [
  {
    id: "1",
    videoId: "1",
    videoTitle: "サンプル動画1",
    thumbnail: "/images/wich.jpg",
    watchedAt: "2024-06-15 14:30",
    duration: "12:34",
    progress: 75,
  },
  {
    id: "2",
    videoId: "2",
    videoTitle: "サンプル動画2",
    thumbnail: "/images/tatsumaki.jpg",
    watchedAt: "2024-06-14 18:45",
    duration: "5:21",
    progress: 100,
  },
  {
    id: "3",
    videoId: "1",
    videoTitle: "サンプル動画1",
    thumbnail: "/images/wich.jpg",
    watchedAt: "2024-06-13 10:15",
    duration: "12:34",
    progress: 30,
  },
];

/**
 * 視聴履歴関連のAPIクライアント
 * 
 * 履歴の取得、削除などの操作を統一的に管理
 */
export const historyApi = {
  /**
   * 視聴履歴を取得する
   * 
   * @returns {Promise<HistoryResponse>} 視聴履歴のデータ
   * @throws {Error} 履歴の取得に失敗した場合
   */
  async getHistory(): Promise<HistoryResponse> {
    // 実際の実装ではAPIからデータを取得する
    // const response = await fetch('/api/history', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('履歴の取得に失敗しました');
    // }
    // 
    // const data = await response.json();
    // return data;

    // モックデータを返す（開発用）
    return {
      items: mockHistoryData,
      total: mockHistoryData.length
    };
  },

  /**
   * 視聴履歴を全削除する
   * 
   * @returns {Promise<void>} 削除処理の完了を示すPromise
   * @throws {Error} 削除処理に失敗した場合
   */
  async clearHistory(): Promise<void> {
    // 実際の実装ではAPIに削除リクエストを送信する
    // const response = await fetch('/api/history', {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('履歴の削除に失敗しました');
    // }

    // モック実装：2秒の遅延を追加してAPI呼び出しをシミュレート
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 成功として処理完了
    console.log('履歴を全削除しました（モック実装）');
  },

  /**
   * 特定の履歴項目を削除する（将来的な拡張用）
   * 
   * @param {string} historyId - 削除する履歴項目のID
   * @returns {Promise<void>} 削除処理の完了を示すPromise
   * @throws {Error} 削除処理に失敗した場合
   */
  async deleteHistoryItem(historyId: string): Promise<void> {
    // 実際の実装ではAPIに削除リクエストを送信する
    // const response = await fetch(`/api/history/${historyId}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // 
    // if (!response.ok) {
    //   throw new Error('履歴項目の削除に失敗しました');
    // }

    // モック実装
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`履歴項目 ${historyId} を削除しました（モック実装）`);
  }
}; 