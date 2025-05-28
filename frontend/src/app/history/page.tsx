import { HistoryClient } from "./HistoryClient";
import { historyApi } from "@/features/history/api";

/**
 * 視聴履歴ページのサーバーコンポーネント
 * 
 * @returns {Promise<JSX.Element>} 視聴履歴ページのコンポーネント
 */
export default async function HistoryPage() {
  const initialData = await historyApi.getHistory();

  return <HistoryClient initialData={initialData} />;
} 