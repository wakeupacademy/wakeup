"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Quote, Award, Target, Heart } from "lucide-react"

export function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile image */}
          <div className="animate-fade-in-up">
            <div className="relative">
              <Image
                src="/motivational-speaker-portrait.png"
                alt="Portrait professionnel"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              Passionné par le <span className="text-burgundy">Développement Humain</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis plus de 10 ans, j'accompagne des milliers de personnes dans leur quête de réussite personnelle et
              professionnelle. Ma mission est simple : vous aider à révéler le meilleur de vous-même.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              À travers mes conférences, mes formations et mes contenus inspirants, je partage des stratégies concrètes
              pour transformer votre mindset, développer votre confiance et atteindre vos objectifs les plus ambitieux.
            </p>

            <Button
              size="lg"
              className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Découvrir Mon Parcours
            </Button>
          </div>
        </div>

        {/* Values section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div
            className="text-center p-8 bg-gray-50 rounded-2xl animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
            style={{ animationDelay: "0.2s" }}
          >
            <Award className="h-12 w-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">Recherche constante de l'excellence dans tout ce que j'entreprends</p>
          </div>

          <div
            className="text-center p-8 bg-gray-50 rounded-2xl animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
            style={{ animationDelay: "0.4s" }}
          >
            <Target className="h-12 w-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Résultats</h3>
            <p className="text-gray-600">Focus sur des stratégies concrètes qui génèrent des résultats mesurables</p>
          </div>

          <div
            className="text-center p-8 bg-gray-50 rounded-2xl animate-fade-in-up transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
            style={{ animationDelay: "0.6s" }}
          >
            <Heart className="h-12 w-12 text-burgundy mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Authenticité</h3>
            <p className="text-gray-600">Approche humaine et authentique basée sur l'expérience réelle</p>
          </div>
        </div>

        {/* Quote section */}
        <div className="bg-burgundy rounded-3xl p-12 text-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl">
          <Quote className="h-16 w-16 text-white/30 mx-auto mb-6" />
          <blockquote className="text-2xl font-serif text-white mb-6 leading-relaxed">
            "Le succès n'est pas une destination, c'est un voyage. Et ce voyage commence par la décision de croire en
            soi."
          </blockquote>
          <cite className="text-white/80 text-lg">- Fondateur de Wake Up Academy</cite>
        </div>
      </div>
    </section>
  )
}
