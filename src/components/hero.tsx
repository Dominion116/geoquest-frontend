'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useAppKit } from '@reown/appkit/react'
import { ArrowRight, Globe, Trophy, Users } from 'lucide-react'

export function Hero() {
  const { open, isConnected } = useAppKit()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6">
            <Globe className="mr-2 h-4 w-4" />
            Blockchain-Powered Geography Quiz
          </Badge>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Test Your{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Geography
            </span>{' '}
            Knowledge
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Challenge yourself with interactive geography quizzes, earn rewards, and compete with players worldwide. 
            All powered by blockchain technology for transparency and fairness.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {isConnected ? (
              <Button size="lg" className="text-lg">
                Start Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            ) : (
              <Button size="lg" onClick={open} className="text-lg">
                Connect Wallet to Start
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
            <Button variant="outline" size="lg" className="text-lg">
              Learn More
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-muted-foreground">Questions</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm text-muted-foreground">Players</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-2xl font-bold">195</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/20 to-primary/10 opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
