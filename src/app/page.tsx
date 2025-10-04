export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">GeoQuest Frontend</h1>
        <p className="text-muted-foreground text-lg">A geography quiz application with dark mode enabled</p>
        <div className="mt-8 p-4 border border-border rounded-lg bg-card">
          <p className="text-card-foreground">Dark mode is active by default</p>
        </div>
      </div>
    </main>
  )
}
