import { BookHero } from "@/components/book-hero"
import { BookContent } from "@/components/book-content"

export default function BookPage() {
  return (
    <main className="min-h-screen">
      <BookHero />
      <BookContent />
    </main>
  )
}
