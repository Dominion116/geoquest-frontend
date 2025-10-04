'use client'

import { AppKitProvider } from '@/lib/wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppKitProvider>
      {children}
    </AppKitProvider>
  )
}
