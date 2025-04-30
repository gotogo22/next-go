import { apiClient, handleApiError } from './index';

// ヘルスチェックのレスポンス型
export interface HealthResponse {
  status: string;
  message: string;
}

/**
 * ヘルスチェックAPI関連の関数を提供するサービス
 */
export const HealthService = {
  /**
   * APIサーバーのヘルスチェックを実行します
   * @returns ヘルスステータス情報
   */
  async checkHealth(): Promise<HealthResponse> {
    try {
      const response = await apiClient.get<HealthResponse>('/api/health');
      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      throw new Error(errorMessage);
    }
  }
};

export default HealthService; 
