"use client"

import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Clock, Award } from "lucide-react"

export function TrainingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-burgundy via-red-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <GraduationCap className="h-20 w-20 text-white mx-auto mb-6 animate-pulse-slow" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            SE FORMER POUR
            <span className="block text-yellow-300">RÉUSSIR</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos programmes de formation exclusifs conçus pour transformer votre mindset et accélérer votre
            réussite personnelle et professionnelle.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-burgundy hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Voir Nos Formations
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-burgundy px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 bg-transparent"
            >
              Consultation Gratuite
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <Users className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">2000+</div>
              <div className="text-white/80 text-sm">Étudiants Formés</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <Clock className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">50h</div>
              <div className="text-white/80 text-sm">de Contenu</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <Award className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-sm">de Satisfaction</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
              <GraduationCap className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">12</div>
              <div className="text-white/80 text-sm">Programmes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
