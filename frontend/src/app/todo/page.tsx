"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHealth } from "@/lib/hooks/useHealth";
import { useEffect, useState } from "react";

export default function TodoPage() {
  const { health, isLoading, isError, errorMessage, refresh } = useHealth();
  const [mounted, setMounted] = useState(false);

  // クライアントサイドのみでレンダリングを確認
  useEffect(() => {
    setMounted(true);
  }, []);

  // サーバーサイドレンダリング中はコンテンツを表示しない
  if (!mounted) {
    return null;
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">APIヘルスチェック</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>サーバー状態を確認</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={refresh} 
            disabled={isLoading}
          >
            {isLoading ? "読み込み中..." : "ヘルスチェック実行"}
          </Button>
          
          {isError && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {errorMessage || "APIサーバーに接続できませんでした。サーバーが起動しているか確認してください。"}
            </div>
          )}
          
          {health && (
            <div className="mt-4 p-4 bg-green-50 rounded-md">
              <p className="font-medium">ステータス: {health.status}</p>
              <p>メッセージ: {health.message}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 
