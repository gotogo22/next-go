import { Video } from "@/types/video";
import { notFound } from "next/navigation";

// 仮データ
const videos: Video[] = [
  {
    id: "1",
    title: "サンプル動画1",
    url: "/videos/sample1.mp4",
    thumbnail: "/images/wich.jpg",
    uploader: "管理者A",
    uploadedAt: "2024-06-01",
    description: "サンプル動画の説明1",
  },
  {
    id: "2",
    title: "サンプル動画2",
    url: "/videos/sample2.mp4",
    thumbnail: "/images/tatsumaki.jpg",
    uploader: "管理者B",
    uploadedAt: "2024-06-02",
    description: "サンプル動画の説明2",
  },
];

export default function VideoDetail({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id === params.id);
  if (!video) return notFound();

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{video.title}</h1>
      <video controls src={video.url} className="w-full max-w-2xl mb-4" />
      <div className="text-gray-500 mb-2">{video.uploader}・{video.uploadedAt}</div>
      <p>{video.description}</p>
    </main>
  );
} 
