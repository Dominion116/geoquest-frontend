import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum, polygon, base, sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'YOUR_PROJECT_ID'

// Create a metadata object - this will be used by the app kit
const metadata = {
  name: 'GeoQuest',
  description: 'A geography quiz application on the blockchain',
  url: 'https://geoquest.app',
  icons: ['https://geoquest.app/icon.png']
}

// Set up Wagmi config
const config = createAppKit({
  projectId,
  chains: [mainnet, arbitrum, polygon, base, sepolia],
  metadata
})

const queryClient = new QueryClient()

export { config, queryClient, WagmiProvider, QueryClientProvider }
