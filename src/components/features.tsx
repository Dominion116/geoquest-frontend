import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Zap, 
  Trophy, 
  Globe, 
  Users, 
  Award,
  Lock,
  Sparkles
} from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Blockchain Security',
    description: 'All quiz data and results are stored on-chain, ensuring transparency and preventing tampering.',
    badge: 'Security'
  },
  {
    icon: Zap,
    title: 'Instant Rewards',
    description: 'Earn tokens immediately upon completing quizzes. No waiting, no delays.',
    badge: 'Rewards'
  },
  {
    icon: Trophy,
    title: 'Global Leaderboards',
    description: 'Compete with players worldwide and climb the ranks in real-time leaderboards.',
    badge: 'Competition'
  },
  {
    icon: Globe,
    title: 'Comprehensive Coverage',
    description: 'Questions covering all 195 countries, capitals, landmarks, and geographical features.',
    badge: 'Complete'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Submit your own questions and vote on community contributions.',
    badge: 'Community'
  },
  {
    icon: Award,
    title: 'Achievement System',
    description: 'Unlock badges and achievements as you progress through different difficulty levels.',
    badge: 'Progress'
  },
  {
    icon: Lock,
    title: 'Decentralized',
    description: 'No central authority controls the quiz content or your progress data.',
    badge: 'Decentralized'
  },
  {
    icon: Sparkles,
    title: 'NFT Certificates',
    description: 'Mint unique NFT certificates for completing special quiz challenges.',
    badge: 'NFTs'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose GeoQuest?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the future of educational gaming with blockchain technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
