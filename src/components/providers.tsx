'use client'

import { WagmiProvider, QueryClientProvider, appKit } from '@/lib/wagmi'
import { AppKitProvider } from '@reown/appkit/react'
import { config, queryClient } from '@/lib/wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppKitProvider appKit={appKit}>
          {children}
        </AppKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
