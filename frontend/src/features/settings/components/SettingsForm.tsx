import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import { UserSettings, UpdateSettingsRequest } from "../types";
import { Loader2, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SettingsFormProps {
  settings: UserSettings;
  isSaving: boolean;
  onSave: (data: UpdateSettingsRequest) => Promise<boolean>;
}

export const SettingsForm = ({
  settings,
  isSaving,
  onSave,
}: SettingsFormProps) => {
  const [form, setForm] = useState<UpdateSettingsRequest>({
    displayName: settings.displayName,
    email: settings.email,
    theme: settings.theme,
    enableNotifications: settings.enableNotifications,
    language: settings.language,
  });
  const { toast } = useToast();

  // フォームフィールドの変更を処理
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" 
        ? (e.target as HTMLInputElement).checked 
        : value,
    }));
  }, []);

  // フォーム送信処理
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // バリデーション
    if (!form.displayName?.trim()) {
      toast({
        title: "表示名は必須です",
        variant: "destructive",
      });
      return;
    }
    
    if (!form.email?.trim()) {
      toast({
        title: "メールアドレスは必須です",
        variant: "destructive",
      });
      return;
    }
    
    // 変更がない場合は何もしない
    if (
      form.displayName === settings.displayName &&
      form.email === settings.email &&
      form.theme === settings.theme &&
      form.enableNotifications === settings.enableNotifications &&
      form.language === settings.language
    ) {
      toast({
        title: "変更がありません",
      });
      return;
    }
    
    await onSave(form);
  }, [form, onSave, settings, toast]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-1">
          <label htmlFor="displayName" className="text-sm font-medium">
            表示名
          </label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            value={form.displayName}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="表示名"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="メールアドレス"
          />
        </div>

        <div className="grid gap-1">
          <label htmlFor="theme" className="text-sm font-medium">
            テーマ
          </label>
          <select
            id="theme"
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="light">ライト</option>
            <option value="dark">ダーク</option>
            <option value="system">システム設定に合わせる</option>
          </select>
        </div>

        <div className="grid gap-1">
          <label htmlFor="language" className="text-sm font-medium">
            言語
          </label>
          <select
            id="language"
            name="language"
            value={form.language}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ja">日本語</option>
            <option value="en">英語</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="enableNotifications"
            name="enableNotifications"
            type="checkbox"
            checked={form.enableNotifications}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="enableNotifications" className="text-sm font-medium">
            通知を有効にする
          </label>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button
          variant="default"
          type="submit"
          disabled={isSaving}
          className="flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> 保存中...
            </>
          ) : (
            <>
              <Save className="h-4 w-4" /> 保存
            </>
          )}
        </Button>
      </div>
    </form>
  );
}; 