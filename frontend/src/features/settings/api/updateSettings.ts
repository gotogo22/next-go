import { SettingsResponse, UpdateSettingsRequest } from "../types";
import { getSettings } from "./getSettings";

export const updateSettings = async (
  data: UpdateSettingsRequest
): Promise<SettingsResponse> => {
  // 実際の実装ではAPIにデータを送信する
  // const response = await fetch('/api/settings', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // return await response.json();

  // モック実装：現在の設定を取得して更新したものを返す
  const current = await getSettings();
  
  // 更新日時を現在時刻に
  const updatedSettings = {
    ...current.settings,
    ...data,
    updatedAt: new Date().toISOString().replace('T', ' ').substring(0, 19)
  };
  
  return {
    settings: updatedSettings
  };
}; 