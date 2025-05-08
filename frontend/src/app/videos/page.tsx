"use client";
import { useState } from "react";
import { Video as VideoIcon, TrendingUp, Clock } from "lucide-react";

// ダミーデータ
const dummyVideos = [
  {
    id: 1,
    title: "Next.js入門チュートリアル",
    thumbnail: "https://picsum.photos/320/180",
    channelName: "Web開発チャンネル",
    views: "12.5万回視聴",
    uploadedAt: "3日前",
  },
  {
    id: 2,
    title: "TypeScriptで学ぶモダンな開発",
    thumbnail: "https://picsum.photos/320/181",
    channelName: "プログラミング学習",
    views: "8.3万回視聴",
    uploadedAt: "1週間前",
  },
  {
    id: 3,
    title: "React Hooks完全ガイド",
    thumbnail: "https://picsum.photos/320/182",
    channelName: "フロントエンド開発",
    views: "15.2万回視聴",
    uploadedAt: "2日前",
  },
  // 他のダミーデータも同様に追加
];

type SortOption = "popular" | "newest";

export default function VideosPage() {
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  return (
    <div className="p-6">
      {/* フィルターセクション */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <VideoIcon className="w-5 h-5" />
          <h1 className="text-2xl font-bold">動画</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy("popular")}
            className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              sortBy === "popular"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>人気順</span>
          </button>
          <button
            onClick={() => setSortBy("newest")}
            className={`flex items-center gap-1 px-3 py-1 rounded-full ${
              sortBy === "newest"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>新着順</span>
          </button>
        </div>
      </div>

      {/* 動画グリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {dummyVideos.map((video) => (
          <div key={video.id} className="cursor-pointer hover:scale-[1.02] transition-transform">
            <div className="relative aspect-video mb-2">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-medium line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {video.channelName}
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              <span>{video.views}</span>
              <span className="mx-1">•</span>
              <span>{video.uploadedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
