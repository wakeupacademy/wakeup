"use client"

import { Button } from "@/components/ui/button"
import { Music, Play, Headphones } from "lucide-react"

export function MusicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-burgundy to-red-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden bg-red-950">
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Musical notes floating */}
        <div className="absolute top-1/4 left-1/4 text-white/10 text-6xl animate-bounce">♪</div>
        <div
          className="absolute top-1/3 right-1/3 text-white/10 text-4xl animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          ♫
        </div>
        <div
          className="absolute bottom-1/3 left-1/2 text-white/10 text-5xl animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          ♪
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <Music className="h-20 w-20 text-yellow-300 mx-auto mb-6 animate-pulse-slow" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            CHANTER POUR
            <span className="block text-yellow-300">MOTIVER</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Découvrez le pouvoir transformateur de la musique motivante. Des chansons inspirantes qui élèvent votre
            énergie et boostent votre motivation au quotidien.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-300 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <Play className="mr-2 h-6 w-6" />
              Écouter Maintenant
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-burgundy px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
            >
              <Headphones className="mr-2 h-6 w-6" />
              Playlist Complète
            </Button>
          </div>

          {/* Music Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-yellow-300 mb-2">25+</div>
              <div className="text-white/80">Chansons Motivantes</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-yellow-300 mb-2">100K+</div>
              <div className="text-white/80">Écoutes Mensuelles</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-yellow-300 mb-2">5★</div>
              <div className="text-white/80">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
