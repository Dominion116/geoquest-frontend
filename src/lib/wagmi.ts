import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum, polygon, base, sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createConfig, http } from 'wagmi'

// Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'YOUR_PROJECT_ID'

// Create a metadata object - this will be used by the app kit
const metadata = {
  name: 'GeoQuest',
  description: 'A geography quiz application on the blockchain',
  url: 'https://geoquest.app',
  icons: ['https://geoquest.app/icon.png']
}

// Create the AppKit instance
const appKit = createAppKit({
  projectId,
  chains: [mainnet, arbitrum, polygon, base, sepolia],
  metadata
})

// Create wagmi config
const config = createConfig({
  chains: [mainnet, arbitrum, polygon, base, sepolia],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
    [sepolia.id]: http(),
  },
})

const queryClient = new QueryClient()

export { config, queryClient, WagmiProvider, QueryClientProvider, appKit }