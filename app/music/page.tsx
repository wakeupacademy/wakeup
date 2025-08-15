import { Navigation } from "@/components/navigation"
import { MusicHero } from "@/components/music-hero"
import { MusicContent } from "@/components/music-content"

export default function MusicPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MusicHero />
      <MusicContent />
    </main>
  )
}
