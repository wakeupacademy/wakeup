"use client"

import Image from "next/image"
import { Mic, Users } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <Image src="/professional-speaker-stage.png" alt="Background" fill className="object-cover opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-12 leading-tight tracking-wider">
            QUI SUIS-JE ?
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
            {/* Conférencier */}
            <div className="text-center animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <div className="mb-6">
                <Mic className="h-16 w-16 text-white mx-auto mb-4" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">CONFÉRENCIER</h2>
              <div className="w-24 h-1 bg-burgundy mx-auto"></div>
            </div>

            {/* Coach */}
            <div className="text-center animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
              <div className="mb-6">
                <Users className="h-16 w-16 text-white mx-auto mb-4" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">COACH</h2>
              <div className="w-24 h-1 bg-burgundy mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
