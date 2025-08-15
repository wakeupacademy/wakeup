"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, BookOpen, Video, Mic, Star, Quote, Zap, Target, Trophy, Rocket } from "lucide-react"
import Link from "next/link"

export function HomepageHero() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Pure black background with burgundy accents */}
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-burgundy/10 rounded-full blur-2xl animate-bounce-slow"
          style={{ animationDelay: "4s" }}
        ></div>

        <div
          className="absolute top-20 left-20 w-4 h-4 bg-burgundy rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-white rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-5 h-5 bg-burgundy rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block bg-burgundy text-white px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase animate-slide-in-down hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Zap className="inline w-4 h-4 mr-2" />
                Conférencier • Coach • Auteur
              </span>
            </div>

            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block animate-slide-in-left hover:text-burgundy transition-colors duration-500">
                RÉVEILLE
              </span>
              <span
                className="block text-burgundy animate-slide-in-right hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0.3s" }}
              >
                TON POTENTIEL
              </span>
            </h1>

            <p
              className="text-2xl sm:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light"
              style={{ animationDelay: "0.6s" }}
            >
              Transforme ta vie avec les stratégies qui ont aidé des{" "}
              <span className="text-burgundy font-bold">milliers de personnes</span> à atteindre leurs rêves les plus
              fous.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-white px-12 py-6 text-xl font-black rounded-full transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-burgundy/50 group"
              >
                <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                COMMENCER MAINTENANT
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl font-black rounded-full transition-all duration-500 bg-transparent hover:scale-110 hover:-translate-y-2 shadow-2xl group"
              >
                <Play className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                VOIR LES VIDÉOS
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-burgundy rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-black rounded-full animate-spin-reverse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-black text-black mb-4 animate-count-up">
              <span className="text-burgundy">+50K</span> Abonnés.
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-black mb-8">
              <span className="text-burgundy">1 Mission</span> qui Change des Vies
            </h3>
            <p className="text-xl text-black/80 mb-12 font-medium max-w-2xl mx-auto">
              Simple, inspirant et direct. <span className="text-burgundy font-bold">Exactement comme moi !</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-8">
              <input
                type="text"
                placeholder="Ton Prénom*"
                className="flex-1 px-8 py-5 rounded-full border-3 border-black text-black placeholder-black/60 font-medium text-lg focus:outline-none focus:ring-4 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-300 hover:scale-105"
              />
              <input
                type="email"
                placeholder="Ton Email*"
                className="flex-1 px-8 py-5 rounded-full border-3 border-black text-black placeholder-black/60 font-medium text-lg focus:outline-none focus:ring-4 focus:ring-burgundy/30 focus:border-burgundy transition-all duration-300 hover:scale-105"
              />
            </div>

            <Button
              size="lg"
              className="bg-black hover:bg-burgundy text-white px-16 py-6 text-xl font-black rounded-full transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl group"
            >
              <Target className="mr-3 h-6 w-6 group-hover:animate-spin" />
              REJOINS-NOUS
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 animate-fade-in-up">
              DÉCOUVRE MON <span className="text-burgundy">UNIVERS</span>
            </h2>
            <p
              className="text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Trois piliers pour transformer ta vie et atteindre tes objectifs les plus ambitieux
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link href="/videos" className="group">
              <div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:shadow-burgundy/20 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent"></div>
                  <div className="relative text-center text-white z-10 group-hover:scale-110 transition-transform duration-500">
                    <Video className="w-20 h-20 mx-auto mb-4 text-burgundy group-hover:animate-pulse" />
                    <div className="text-sm font-bold text-white/90">CONTENU EXCLUSIF</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-burgundy text-white px-4 py-2 rounded-full text-xs font-bold animate-bounce">
                    NOUVEAU
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-burgundy mb-6 group-hover:scale-105 transition-transform">
                    VIDÉOS DE MOTIVATION
                  </h3>
                  <p className="text-black leading-relaxed font-medium text-lg">
                    Sur ma chaîne YouTube, retrouve mes meilleures vidéos pour te motiver et t'inspirer. Apprends toutes
                    les stratégies de réussite que l'école ne t'a pas apprises.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/book" className="group">
              <div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:shadow-burgundy/20 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="aspect-video bg-burgundy flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="relative text-center text-white z-10 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-sm font-bold mb-2">OBJECTIF :</div>
                    <div className="text-5xl font-black mb-4 group-hover:animate-pulse">RÊVES !</div>
                    <Star className="w-16 h-16 mx-auto text-white group-hover:animate-spin" />
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-burgundy mb-6 group-hover:scale-105 transition-transform">
                    MON LIVRE
                  </h3>
                  <p className="text-black leading-relaxed font-medium text-lg">
                    Un concentré des meilleures stratégies pour passer à l'action et réaliser ses rêves. Mes astuces de
                    coach pour être motivé en permanence.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/training" className="group">
              <div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 hover:shadow-burgundy/20 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent"></div>
                  <div className="relative text-center text-white z-10 group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-20 h-20 mx-auto mb-4 text-burgundy group-hover:animate-bounce" />
                    <div className="text-sm font-bold text-white/90">PROGRAMME COMPLET</div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full text-xs font-bold animate-pulse">
                    POPULAIRE
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-black text-burgundy mb-6 group-hover:scale-105 transition-transform">
                    FORMATION
                  </h3>
                  <p className="text-black leading-relaxed font-medium text-lg">
                    Le programme en 7 modules pour développer ta confiance en soi. Modules courts mais puissants pour
                    des résultats rapides et durables.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-8 border-burgundy rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-6 border-black rounded-full animate-spin-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-burgundy rounded-full animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-burgundy text-white px-12 py-10 rounded-3xl inline-block mb-12 transform -rotate-3 shadow-2xl hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <h2 className="text-4xl sm:text-5xl font-black leading-tight">
                  ACTIVE LE SUPER POUVOIR
                  <br />
                  DE LA <span className="text-black">CONFIANCE EN SOI</span>
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-2xl text-black leading-relaxed font-medium">
                  Découvre la méthode révolutionnaire qui a transformé la vie de{" "}
                  <span className="text-burgundy font-bold">milliers de personnes</span>. Un système simple mais
                  puissant pour développer une confiance inébranlable.
                </p>

                <Button
                  size="lg"
                  className="bg-black hover:bg-burgundy text-white px-12 py-6 text-xl font-black rounded-full transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl group"
                >
                  <Trophy className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  DÉCOUVRIR LE PROGRAMME
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="bg-burgundy rounded-3xl p-12 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                  <div className="text-center">
                    <Quote className="w-16 h-16 mx-auto mb-8 text-white/80" />
                    <div className="text-xl font-bold mb-6 text-white/90">COMMENT ACTIVER LE</div>
                    <div className="text-5xl font-black mb-6 text-white">SUPER POUVOIR</div>
                    <div className="text-2xl font-bold mb-8 text-white/90">DE LA</div>
                    <div className="text-4xl font-black mb-12 text-white">CONFIANCE EN SOI</div>

                    <div className="flex justify-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer hover:scale-110 transform duration-300 group">
                        <Play className="w-12 h-12 text-white ml-1 group-hover:animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-black rounded-3xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 hover:scale-110">
                  <div className="text-white text-center">
                    <div className="text-sm font-bold text-burgundy">SLIMANE</div>
                    <div className="text-2xl font-black text-white">VIS TON</div>
                    <div className="text-2xl font-black text-burgundy">RÊVE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-burgundy rounded-full animate-float"></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-burgundy rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl sm:text-6xl font-black mb-8 animate-fade-in-up">
            Trouve l'inspiration dont tu as <span className="text-burgundy">besoin</span>.
          </h2>
          <p
            className="text-2xl text-white/80 mb-16 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Découvre le contenu qui va débloquer ton potentiel. Trouve les stratégies, conseils et motivation que tu
            cherches. <span className="text-burgundy font-bold">Rapidement.</span>
          </p>

          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Rechercher par mot-clé..."
                className="w-full px-10 py-6 rounded-full bg-white text-black text-xl font-medium focus:outline-none focus:ring-6 focus:ring-burgundy/50 hover:scale-105 transition-transform duration-300"
              />
              <Button
                size="lg"
                className="absolute right-3 top-3 bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-8 hover:scale-110 transition-transform"
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "CONFIANCE" },
              { icon: Star, label: "MOTIVATION" },
              { icon: BookOpen, label: "HABITUDES" },
              { icon: Mic, label: "LEADERSHIP" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-white/10 hover:bg-burgundy rounded-3xl p-10 transition-all duration-500 transform hover:scale-110 hover:-translate-y-4 cursor-pointer group animate-fade-in-up border-2 border-transparent hover:border-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-16 h-16 mx-auto mb-6 text-burgundy group-hover:text-white transition-colors group-hover:animate-bounce" />
                <div className="text-xl font-black text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
