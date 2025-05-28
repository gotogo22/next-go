import { HistoryItem as HistoryItemType } from "../types";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

type HistoryItemProps = {
  item: HistoryItemType;
};

export const HistoryItem = ({ item }: HistoryItemProps) => {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <Link href={`/video/${item.videoId}`} className="shrink-0">
        <div className="relative w-36 h-20 rounded-md overflow-hidden">
          <Image 
            src={item.thumbnail} 
            alt={item.videoTitle} 
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex-1 min-w-0">
        <Link href={`/video/${item.videoId}`}>
          <h3 className="font-medium text-lg truncate">{item.videoTitle}</h3>
        </Link>
        <div className="text-sm text-gray-500 mt-1">
          視聴日時: {item.watchedAt}
        </div>
        <div className="text-sm text-gray-500">
          再生時間: {item.duration}
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">視聴進捗</span>
            <span className="text-xs text-gray-500">{item.progress}%</span>
          </div>
          <Progress value={item.progress} className="h-1.5" />
        </div>
      </div>
    </div>
  );
}; 