'use client';

import { SWRConfig } from 'swr';
import { ReactNode } from 'react';

interface SWRProviderProps {
  children: ReactNode;
}

export default function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig 
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  );
} 
