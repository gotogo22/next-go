import { Video } from "@/types/video";
import Link from "next/link";
import Image from "next/image";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/video/${video.id}`}>
      <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-gray-900">
        <Image src={video.thumbnail} alt={video.title} width={320} height={180} className="w-full h-40 object-cover" />
        <div className="p-3">
          <h2 className="font-semibold text-lg truncate">{video.title}</h2>
          <div className="text-xs text-gray-500">{video.uploader}・{video.uploadedAt}</div>
        </div>
      </div>
    </Link>
  );
} 
