"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-200/50 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            RÉVEILLEZ VOTRE
            <span className="block text-burgundy">POTENTIEL</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformez votre vie avec des stratégies éprouvées de développement personnel, de motivation et de
            réussite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Commencer Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-burgundy text-gray-700 hover:text-burgundy px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Voir la Vidéo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-burgundy mb-2">10K+</div>
              <div className="text-gray-600">Personnes Inspirées</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl font-bold text-burgundy mb-2">500+</div>
              <div className="text-gray-600">Vidéos Motivantes</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl font-bold text-burgundy mb-2">5★</div>
              <div className="text-gray-600">Note Moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
