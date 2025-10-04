'use client'

import { WagmiProvider, QueryClientProvider } from '@/lib/wagmi'
import { AppKitProvider } from '@reown/appkit/react'
import { config, queryClient } from '@/lib/wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppKitProvider>
          {children}
        </AppKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
