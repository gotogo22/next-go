import { SettingsResponse, UserSettings } from "../types";

// モックデータ
const mockSettings: UserSettings = {
  id: "1",
  username: "user123",
  email: "user@example.com",
  displayName: "テストユーザー",
  avatar: "/images/default-avatar.png",
  theme: "system",
  enableNotifications: true,
  language: "ja",
  createdAt: "2024-01-01 00:00:00",
  updatedAt: "2024-06-20 15:30:00"
};

export const getSettings = async (): Promise<SettingsResponse> => {
  // 実際の実装ではAPIからデータを取得する
  // const response = await fetch('/api/settings');
  // const data = await response.json();
  // return data;

  // モックデータを返す
  return {
    settings: mockSettings
  };
}; 