"use client";

import { SettingsForm } from "@/features/settings/components/SettingsForm";
import { SettingsSkeleton } from "@/features/settings/components/SettingsSkeleton";
import { SettingsError } from "@/features/settings/components/SettingsError";
import { useSettings } from "@/features/settings/hooks/useSettings";

export default function SettingsPage() {
  const { settings, isLoading, error, isSaving, saveSettings, fetchSettings } = useSettings();

  return (
    <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">設定</h1>
        <p className="text-gray-500 mt-1">アカウント設定を管理する</p>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6">
        {isLoading ? (
          <SettingsSkeleton />
        ) : error ? (
          <SettingsError message={error} onRetry={fetchSettings} />
        ) : settings ? (
          <SettingsForm 
            settings={settings} 
            isSaving={isSaving} 
            onSave={saveSettings} 
          />
        ) : null}
      </div>
    </main>
  );
} 