'use client';

import useSWR from 'swr';
import { HealthService, HealthResponse } from '../api/healthService';

/**
 * ヘルスチェックAPIを呼び出すカスタムフック
 * SWRを使用して、キャッシュとリロード機能を提供
 */
export function useHealth() {
  const fetcher = async () => {
    return await HealthService.checkHealth();
  };

  const { data, error, isLoading, mutate } = useSWR<HealthResponse, Error>(
    'api/health', 
    fetcher,
    {
      dedupingInterval: 10000, // 10秒間は同じリクエストを重複させない
    }
  );

  return {
    health: data,
    isLoading,
    isError: !!error,
    errorMessage: error?.message,
    // 手動で再取得するための関数
    refresh: () => mutate()
  };
}

export default useHealth; 
