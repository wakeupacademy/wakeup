import { Navigation } from "@/components/navigation"
import { TrainingHero } from "@/components/training-hero"
import { TrainingPrograms } from "@/components/training-programs"
import { TrainingFeatures } from "@/components/training-features"

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TrainingHero />
      <TrainingPrograms />
      <TrainingFeatures />
    </main>
  )
}
