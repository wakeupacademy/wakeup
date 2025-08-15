import { Navigation } from "@/components/navigation"
import { VideoHero } from "@/components/video-hero"
import { VideoGallery } from "@/components/video-gallery"
import { VideoCategories } from "@/components/video-categories"

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <VideoHero />
      <VideoCategories />
      <VideoGallery />
    </main>
  )
}
