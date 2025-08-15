import { Navigation } from "@/components/navigation"
import { BookHero } from "@/components/book-hero"
import { BookContent } from "@/components/book-content"

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BookHero />
      <BookContent />
    </main>
  )
}
