"use client"

import { MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-burgundy via-red-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <MessageCircle className="h-20 w-20 text-white mx-auto mb-6 animate-pulse-slow" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            CONTACTEZ
            <span className="block text-yellow-300">NOUS</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Prêt à transformer votre vie ? Parlons de vos objectifs et découvrons comment Wake Up Academy peut vous
            accompagner vers le succès.
          </p>

          {/* Quick contact options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <Phone className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold mb-1">Appelez-nous</div>
              <div className="text-white/80 text-sm">Réponse immédiate</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <Mail className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold mb-1">Écrivez-nous</div>
              <div className="text-white/80 text-sm">Réponse sous 24h</div>
            </div>
            <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <MessageCircle className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <div className="text-white font-semibold mb-1">Consultation</div>
              <div className="text-white/80 text-sm">30 min gratuit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
