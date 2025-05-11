import { NextResponse } from 'next/server';
import { Video } from '@/types/video';

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

export async function GET(request: Request) {
  // URLからクエリパラメータを取得
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword') || '';
  
  // キーワードでフィルタリング
  const filteredVideos = videos.filter(video => 
    video.title.includes(keyword) ||
    video.uploader.includes(keyword) ||
    video.description?.includes(keyword)
  );
  
  return NextResponse.json(filteredVideos);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 実際のアプリでは、ここでデータベースに保存する処理を実装
    // この例では、単に受け取ったデータを返すだけ
    const newVideo: Video = {
      id: (videos.length + 1).toString(),
      ...body,
      uploadedAt: new Date().toISOString().split('T')[0]
    };
    
    // 仮のデータに追加
    videos.push(newVideo);
    
    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
} 