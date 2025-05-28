import { HistoryItem as HistoryItemType } from "../types";
import { HistoryItem } from "./HistoryItem";

type HistoryListProps = {
  items: HistoryItemType[];
  isLoading: boolean;
  error: Error | null;
};

export const HistoryList = ({ items, isLoading, error }: HistoryListProps) => {
  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-gray-500">履歴を読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-red-500">エラーが発生しました: {error.message}</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-gray-500">視聴履歴がありません</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => (
        <HistoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}; 