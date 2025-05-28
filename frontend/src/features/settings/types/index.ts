/**
 * ユーザー設定の型定義
 */
export type UserSettings = {
  /** ユーザーID */
  id: string;
  /** ユーザー名 */
  username: string;
  /** メールアドレス */
  email: string;
  /** 表示名 */
  displayName: string;
  /** アバター画像URL */
  avatar?: string;
  /** テーマ設定 */
  theme: 'light' | 'dark' | 'system';
  /** 通知設定 */
  enableNotifications: boolean;
  /** 言語設定 */
  language: 'ja' | 'en';
  /** 作成日時 */
  createdAt: string;
  /** 更新日時 */
  updatedAt: string;
};

/**
 * 設定更新リクエストの型定義
 * id, createdAt, updatedAtは更新不可
 */
export type UpdateSettingsRequest = Partial<Omit<UserSettings, 'id' | 'createdAt' | 'updatedAt'>>;

/**
 * 設定APIレスポンスの型定義
 */
export type SettingsResponse = {
  /** ユーザー設定 */
  settings: UserSettings;
}; 
