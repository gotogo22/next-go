"use client";
import { useState, useCallback } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      // ここで実際のアップロード処理を実装
      console.log("Uploading file:", file);
      setIsUploading(true);
      
      // ダミーのアップロード進捗
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsUploading(false);
        }
      }, 500);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi']
    },
    maxFiles: 1
  });

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際のアップロード処理を実装
    console.log("Submitting:", { title, description, thumbnail });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">動画をアップロード</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 動画アップロードエリア */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? "border-orange-500 bg-orange-50" : "border-gray-300 hover:border-orange-500"}`}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg mb-2">
            {isDragActive
              ? "ファイルをドロップしてください"
              : "動画ファイルをドラッグ&ドロップ、またはクリックして選択"}
          </p>
          <p className="text-sm text-gray-500">
            対応形式: MP4, MOV, AVI
          </p>
        </div>

        {/* アップロード進捗 */}
        {isUploading && (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-orange-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        {/* タイトル入力 */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="動画のタイトルを入力"
            required
          />
        </div>

        {/* 説明文入力 */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            説明
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32"
            placeholder="動画の説明を入力"
          />
        </div>

        {/* サムネイルアップロード */}
        <div>
          <label className="block text-sm font-medium mb-2">
            サムネイル
          </label>
          <div className="flex items-center gap-4">
            {thumbnail ? (
              <div className="relative w-48 h-27">
                <img
                  src={thumbnail}
                  alt="サムネイル"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setThumbnail(null)}
                  className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50">
                <ImageIcon className="w-5 h-5" />
                <span>サムネイルを選択</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* アップロードボタン */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
          disabled={isUploading}
        >
          {isUploading ? "アップロード中..." : "アップロード"}
        </button>
      </form>
    </div>
  );
} 
