"use client"
import { Play, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function VideoHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden bg-slate-100">
        <div className="absolute top-10 right-10 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 left-10 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <Play className="h-20 w-20 text-burgundy mx-auto mb-6 animate-pulse-slow" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            VIDÉOS
            <span className="block text-burgundy">INSPIRANTES</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Découvrez notre collection de vidéos motivantes conçues pour transformer votre mindset et booster votre
            réussite personnelle.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <Input
                type="text"
                placeholder="Rechercher une vidéo, un sujet..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-burgundy focus:ring-burgundy"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-burgundy mb-2">500+</div>
              <div className="text-gray-600">Vidéos Inspirantes</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-burgundy mb-2">2M+</div>
              <div className="text-gray-600">Vues Totales</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
              <div className="text-4xl font-bold text-burgundy mb-2">50K+</div>
              <div className="text-gray-600">Abonnés Inspirés</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
