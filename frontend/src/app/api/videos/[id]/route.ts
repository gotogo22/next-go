import { NextResponse } from 'next/server';
import { Video } from '@/types/video';

/**
 * @api {get} /api/videos/:id 特定のビデオを取得
 * @apiName GetVideo
 * @apiGroup Videos
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id ビデオID
 * 
 * @apiSuccess {String} id ビデオID
 * @apiSuccess {String} title ビデオタイトル
 * @apiSuccess {String} url ビデオのURL
 * @apiSuccess {String} thumbnail サムネイル画像のURL
 * @apiSuccess {String} uploader アップローダー名
 * @apiSuccess {String} uploadedAt アップロード日（YYYY-MM-DD形式）
 * @apiSuccess {String} [description] ビデオの説明文
 * 
 * @apiExample {curl} 例:
 *     curl -i /api/videos/1
 * 
 * @apiSuccessExample {json} 成功時のレスポンス:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "サンプル動画1",
 *       "url": "/videos/sample1.mp4",
 *       "thumbnail": "/images/wich.jpg",
 *       "uploader": "管理者A",
 *       "uploadedAt": "2024-06-01",
 *       "description": "サンプル動画の説明1"
 *     }
 * 
 * @apiError {Object} error エラー情報
 * @apiError {String} error.error エラーメッセージ
 * 
 * @apiErrorExample {json} エラーレスポンス:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ビデオが見つかりませんでした"
 *     }
 */

/**
 * @api {put} /api/videos/:id ビデオの更新
 * @apiName UpdateVideo
 * @apiGroup Videos
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id ビデオID
 * 
 * @apiBody {String} [title] ビデオタイトル
 * @apiBody {String} [url] ビデオのURL
 * @apiBody {String} [thumbnail] サムネイル画像のURL
 * @apiBody {String} [uploader] アップローダー名
 * @apiBody {String} [description] ビデオの説明文
 * 
 * @apiSuccess {String} id ビデオID
 * @apiSuccess {String} title ビデオタイトル
 * @apiSuccess {String} url ビデオのURL
 * @apiSuccess {String} thumbnail サムネイル画像のURL
 * @apiSuccess {String} uploader アップローダー名
 * @apiSuccess {String} uploadedAt アップロード日（YYYY-MM-DD形式）
 * @apiSuccess {String} [description] ビデオの説明文
 * 
 * @apiExample {curl} 例:
 *     curl -X PUT /api/videos/1 \
 *       -H "Content-Type: application/json" \
 *       -d '{"title":"更新されたタイトル","description":"更新された説明文"}'
 * 
 * @apiSuccessExample {json} 成功時のレスポンス:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "更新されたタイトル",
 *       "url": "/videos/sample1.mp4",
 *       "thumbnail": "/images/wich.jpg",
 *       "uploader": "管理者A",
 *       "uploadedAt": "2024-06-01",
 *       "description": "更新された説明文"
 *     }
 * 
 * @apiError {Object} error エラー情報
 * @apiError {String} error.error エラーメッセージ
 * 
 * @apiErrorExample {json} 存在しないIDのエラー:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ビデオが見つかりませんでした"
 *     }
 * 
 * @apiErrorExample {json} リクエスト形式エラー:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "リクエストの形式が無効です"
 *     }
 */

/**
 * @api {delete} /api/videos/:id ビデオの削除
 * @apiName DeleteVideo
 * @apiGroup Videos
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id ビデオID
 * 
 * @apiSuccess {String} id 削除されたビデオID
 * @apiSuccess {String} title 削除されたビデオタイトル
 * @apiSuccess {String} url 削除されたビデオのURL
 * @apiSuccess {String} thumbnail 削除されたビデオのサムネイル画像のURL
 * @apiSuccess {String} uploader 削除されたビデオのアップローダー名
 * @apiSuccess {String} uploadedAt 削除されたビデオのアップロード日（YYYY-MM-DD形式）
 * @apiSuccess {String} [description] 削除されたビデオの説明文
 * 
 * @apiExample {curl} 例:
 *     curl -X DELETE /api/videos/1
 * 
 * @apiSuccessExample {json} 成功時のレスポンス:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "title": "サンプル動画1",
 *       "url": "/videos/sample1.mp4",
 *       "thumbnail": "/images/wich.jpg",
 *       "uploader": "管理者A",
 *       "uploadedAt": "2024-06-01",
 *       "description": "サンプル動画の説明1"
 *     }
 * 
 * @apiError {Object} error エラー情報
 * @apiError {String} error.error エラーメッセージ
 * 
 * @apiErrorExample {json} エラーレスポンス:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ビデオが見つかりませんでした"
 *     }
 */

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

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const video = videos.find(v => v.id === id);
  
  if (!video) {
    return NextResponse.json(
      { error: 'ビデオが見つかりませんでした' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(video);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const videoIndex = videos.findIndex(v => v.id === id);
    
    if (videoIndex === -1) {
      return NextResponse.json(
        { error: 'ビデオが見つかりませんでした' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    
    // 既存データを更新
    videos[videoIndex] = {
      ...videos[videoIndex],
      ...body,
    };
    
    return NextResponse.json(videos[videoIndex]);
  } catch (error) {
    return NextResponse.json(
      { error: 'リクエストの形式が無効です' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const videoIndex = videos.findIndex(v => v.id === id);
  
  if (videoIndex === -1) {
    return NextResponse.json(
      { error: 'ビデオが見つかりませんでした' },
      { status: 404 }
    );
  }
  
  // 配列から対象のビデオを削除
  const deletedVideo = videos[videoIndex];
  videos.splice(videoIndex, 1);
  
  return NextResponse.json(deletedVideo);
} 