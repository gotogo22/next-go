import { useState, useEffect, useCallback } from "react";
import { getSettings } from "../api/getSettings";
import { updateSettings } from "../api/updateSettings";
import { UpdateSettingsRequest, UserSettings } from "../types";
import { useToast } from "@/components/ui/use-toast";

export const useSettings = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  // 設定を取得する
  const fetchSettings = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getSettings();
      setSettings(response.settings);
    } catch (err) {
      setError("設定の取得に失敗しました");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 設定を更新する
  const saveSettings = useCallback(async (data: UpdateSettingsRequest) => {
    try {
      setIsSaving(true);
      setError(null);
      const response = await updateSettings(data);
      setSettings(response.settings);
      toast({
        title: "設定を保存しました",
        variant: "default"
      });
      return true;
    } catch (err) {
      setError("設定の保存に失敗しました");
      console.error(err);
      toast({
        title: "設定の保存に失敗しました",
        variant: "destructive"
      });
      return false;
    } finally {
      setIsSaving(false);
    }
  }, [toast]);

  // 初回マウント時に設定を取得
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    settings,
    isLoading,
    error,
    isSaving,
    fetchSettings,
    saveSettings
  };
}; 