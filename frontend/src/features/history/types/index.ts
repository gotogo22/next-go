/**
 * 視聴履歴の1項目を表す型定義
 */
export type HistoryItem = {
  /** 履歴項目の一意のID */
  id: string;
  /** 動画のID */
  videoId: string;
  /** 動画のタイトル */
  videoTitle: string;
  /** サムネイル画像のURL */
  thumbnail: string;
  /** 視聴日時（YYYY-MM-DD HH:mm形式） */
  watchedAt: string;
  /** 動画の長さ（HH:mm形式） */
  duration: string;
  /** 視聴進捗（0-100の範囲で視聴進捗を表す） */
  progress: number;
};

/**
 * 視聴履歴のAPIレスポンス型定義
 */
export type HistoryResponse = {
  /** 視聴履歴の配列 */
  items: HistoryItem[];
  /** 履歴の総数 */
  total: number;
}; 