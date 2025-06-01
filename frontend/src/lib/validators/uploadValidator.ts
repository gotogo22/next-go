import { z } from "zod";
import { useState } from 'react';
import { ZodError } from 'zod';

/**
 * 動画アップロードフォームのバリデーションスキーマ
 */
export const UploadVideoValidator = z.object({
  title: z.string().min(1, {
    message: 'タイトルは必須です',
  }).max(100, {
    message: 'タイトルは100文字以内で入力してください',
  }),
  description: z.string().min(1, {
    message: '説明は必須です',
  }).max(1000, {
    message: '説明は1000文字以内で入力してください',
  }),
  thumbnail: z.string().optional(),
});

/**
 * 動画アップロードフォームの型定義
 */
export type TUploadVideoValidator = z.infer<typeof UploadVideoValidator>;

/**
 * 動画ファイルのバリデーションスキーマ
 */
export const VideoFileValidator = z.object({
  file: z.instanceof(File).refine(
    (file) => {
      const allowedTypes = ['video/mp4', 'video/mov', 'video/avi'];
      return allowedTypes.includes(file.type);
    },
    {
      message: '対応している動画形式はMP4、MOV、AVIです',
    }
  ).refine(
    (file) => {
      const maxSize = 100 * 1024 * 1024; // 100MB
      return file.size <= maxSize;
    },
    {
      message: 'ファイルサイズは100MB以下にしてください',
    }
  ),
});

/**
 * 動画ファイルの型定義
 */
export type TVideoFileValidator = z.infer<typeof VideoFileValidator>;

/**
 * 動画アップロードフォームのバリデーションフック
 */
export const useUploadValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  /**
   * フォームデータをバリデーションする
   * @param data バリデーション対象のデータ
   * @returns バリデーション結果
   */
  const validateForm = (data: TUploadVideoValidator): boolean => {
    try {
      UploadVideoValidator.parse(data);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  /**
   * 特定のフィールドのエラーをクリアする
   * @param fieldName フィールド名
   */
  const clearFieldError = (fieldName: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  /**
   * すべてのエラーをクリアする
   */
  const clearAllErrors = () => {
    setErrors({});
  };

  return {
    errors,
    validateForm,
    clearFieldError,
    clearAllErrors,
  };
}; 