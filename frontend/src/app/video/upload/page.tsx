"use client";
import { useState } from "react";

export default function VideoUploadPage() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでアップロード処理を実装（API連携など）
    alert("アップロード機能は未実装です");
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">動画アップロード</h1>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 max-w-xl mx-auto flex flex-col gap-4">
        <div>
          <label className="block font-semibold mb-1">タイトル</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">動画ファイル</label>
          <input type="file" accept="video/*" onChange={e => setFile(e.target.files?.[0] ?? null)} className="w-full" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">サムネイル画像</label>
          <input type="file" accept="image/*" onChange={e => setThumbnail(e.target.files?.[0] ?? null)} className="w-full" required />
        </div>
        <div>
          <label className="block font-semibold mb-1">説明</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border rounded px-3 py-2" rows={3} />
        </div>
        <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition">アップロード</button>
      </form>
    </main>
  );
} 
