import axios from 'axios';

// APIクライアントの基本設定
const API_BASE_URL = 'http://localhost:8000';

// Axiosインスタンスの作成
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// レスポンスの型定義
export interface ApiResponse<T> {
  data: T;
  status: number;
}

// エラーハンドリング用のヘルパー関数
export const handleApiError = (error: any): string => {
  if (error.response) {
    // サーバーからのレスポンスがある場合
    const { status, data } = error.response;
    if (status === 401) {
      return '認証エラー: ログインが必要です';
    } else if (status === 403) {
      return 'アクセス権限がありません';
    } else if (status === 404) {
      return 'リソースが見つかりません';
    } else if (status >= 500) {
      return 'サーバーエラーが発生しました';
    } else if (data && data.message) {
      return data.message;
    }
  } else if (error.request) {
    // リクエストは送信されたがレスポンスがない場合
    return 'サーバーに接続できませんでした。ネットワーク接続を確認してください。';
  }
  
  // その他のエラー
  return 'エラーが発生しました: ' + error.message;
}; 
