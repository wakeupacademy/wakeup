"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Star, Download } from "lucide-react"
import Image from "next/image"

export function BookHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-burgundy overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book Cover */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="relative inline-block">
              <Image
                src="/book-cover-mockup.png"
                alt="Mon Livre - Wake Up Academy"
                width={400}
                height={600}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-burgundy text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                NOUVEAU
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <div className="mb-6">
              <BookOpen className="h-16 w-16 text-burgundy mx-auto lg:mx-0 mb-4" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              MON LIVRE
              <span className="block text-yellow-300">RÉVÉLATEUR</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Découvrez les secrets du succès et de la transformation personnelle dans ce guide complet qui a déjà
              changé la vie de milliers de personnes.
            </p>

            {/* Book Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">4.9/5</span>
                <span className="text-white/70">(2,847 avis)</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-green-400" />
                <span className="text-white font-semibold">15K+</span>
                <span className="text-white/70">téléchargements</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Acheter Maintenant - 29€
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-burgundy px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
              >
                Aperçu Gratuit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
