import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SettingsErrorProps {
  message: string;
  onRetry: () => void;
}

export const SettingsError = ({ message, onRetry }: SettingsErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
        <AlertTriangle size={32} />
      </div>
      <h3 className="text-lg font-medium text-center mb-2">設定の取得に失敗しました</h3>
      <p className="text-sm text-gray-500 text-center mb-4">{message}</p>
      <Button
        variant="outline"
        onClick={onRetry}
        className="mt-2"
      >
        再試行
      </Button>
    </div>
  );
}; 