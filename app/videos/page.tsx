import { VideoHero } from "@/components/video-hero"
import { VideoCategories } from "@/components/video-categories"
import { VideoGallery } from "@/components/video-gallery"

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <VideoCategories />
      <VideoGallery />
    </main>
  )
}
