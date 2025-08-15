"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Heart, Share2, Clock, Music, Headphones, TrendingUp } from "lucide-react"

const songs = [
  {
    id: 1,
    title: "Réveil de Champion",
    duration: "3:45",
    genre: "Motivation",
    plays: "25K",
    featured: true,
    isNew: true,
  },
  {
    id: 2,
    title: "Force Intérieure",
    duration: "4:12",
    genre: "Inspiration",
    plays: "18K",
    featured: false,
    isNew: false,
  },
  {
    id: 3,
    title: "Objectif Réussite",
    duration: "3:28",
    genre: "Énergie",
    plays: "32K",
    featured: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Confiance Absolue",
    duration: "4:01",
    genre: "Motivation",
    plays: "21K",
    featured: false,
    isNew: false,
  },
  {
    id: 5,
    title: "Dépassement de Soi",
    duration: "3:55",
    genre: "Inspiration",
    plays: "28K",
    featured: true,
    isNew: true,
  },
  {
    id: 6,
    title: "Victoire Assurée",
    duration: "4:18",
    genre: "Énergie",
    plays: "35K",
    featured: false,
    isNew: false,
  },
]

const playlists = [
  {
    title: "Morning Motivation",
    description: "Commencez votre journée avec énergie",
    songCount: 12,
    duration: "45 min",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    title: "Workout Power",
    description: "Boostez vos séances d'entraînement",
    songCount: 15,
    duration: "58 min",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Success Mindset",
    description: "Cultivez votre mentalité de gagnant",
    songCount: 10,
    duration: "38 min",
    gradient: "from-green-400 to-blue-500",
  },
]

export function MusicContent() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Headphones className="h-12 w-12 text-[#941E28]" />
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-gray-900">
              Musique <span className="text-[#941E28]">Motivante</span>
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de musiques inspirantes conçues pour élever votre énergie et transformer votre état d'esprit
          </p>
        </div>

        {/* Featured Songs */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="h-8 w-8 text-[#941E28]" />
            <h2 className="font-serif text-4xl font-bold text-gray-900 animate-fade-in-up">
              Tendances <span className="text-[#941E28]">Populaires</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {songs
              .filter((song) => song.featured)
              .map((song, index) => (
                <Card
                  key={song.id}
                  className="overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up group bg-white/80 backdrop-blur-sm border-0 shadow-lg"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#941E28]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-2">
                        <Badge className="bg-[#941E28] text-white px-3 py-1 text-sm font-medium">
                          {song.genre}
                        </Badge>
                        {song.isNew && (
                          <Badge className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">
                            NOUVEAU
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4" />
                        {song.duration}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#941E28] transition-colors leading-tight">
                      {song.title}
                    </h3>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">{song.plays} écoutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-[#941E28]/10 hover:text-[#941E28] rounded-full">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-[#941E28]/10 hover:text-[#941E28] rounded-full">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button size="lg" className="flex-1 bg-[#941E28] hover:bg-[#941E28]/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        <Play className="mr-2 h-5 w-5" />
                        Écouter
                      </Button>
                      <Button variant="outline" size="lg" className="rounded-full bg-white/50 border-2 border-[#941E28]/20 hover:border-[#941E28] hover:bg-[#941E28]/10">
                        <Download className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Songs List */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
            Collection <span className="text-[#941E28]">Complète</span>
          </h2>
          <Card className="animate-fade-in-up bg-white/90 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-0">
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  className="flex items-center justify-between p-6 border-b border-gray-100/50 last:border-b-0 hover:bg-gradient-to-r hover:from-[#941E28]/5 hover:to-transparent transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full bg-[#941E28]/10 hover:bg-[#941E28] hover:text-white w-12 h-12 shadow-md transition-all duration-300"
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                      {song.isNew && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-[#941E28] transition-colors mb-1">
                        {song.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          {song.genre}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 bg-green-500 rounded-full"></div>
                          <span>{song.plays} écoutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-full">{song.duration}</span>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="hover:bg-[#941E28]/10 hover:text-[#941E28] rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-[#941E28]/10 hover:text-[#941E28] rounded-full">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Playlists */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-16 animate-fade-in-up">
            Playlists <span className="text-[#941E28]">Thématiques</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 animate-fade-in-up overflow-hidden border-0 bg-white/90 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${playlist.gradient}`}></div>
                <CardContent className="p-10">
                  <div className={`h-16 w-16 rounded-full bg-gradient-to-r ${playlist.gradient} mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                    <Music className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{playlist.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{playlist.description}</p>
                  <div className="flex justify-center gap-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <Music className="h-4 w-4" />
                      <span>{playlist.songCount} chansons</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span>{playlist.duration}</span>
                    </div>
                  </div>
                  <Button className="bg-[#941E28] hover:bg-[#941E28]/90 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Play className="mr-2 h-5 w-5" />
                    Écouter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative bg-gradient-to-br from-[#941E28] via-[#B91C1C] to-[#941E28] rounded-3xl p-16 text-center animate-fade-in-up overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Music className="h-20 w-20 text-yellow-300" />
              <Headphones className="h-16 w-16 text-yellow-300/80" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Transformez Votre Énergie<br/>
              <span className="text-yellow-300">avec la Musique</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Rejoignez notre communauté et recevez nos nouvelles chansons motivantes, playlists exclusives et contenus premium pour booster votre motivation quotidiennement
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-300 px-12 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              >
                <Music className="mr-3 h-6 w-6" />
                S'abonner Gratuitement
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-white text-white hover:bg-white hover:text-[#941E28] px-12 py-4 text-lg font-bold rounded-full bg-transparent hover:scale-105 transition-all duration-300"
              >
                <Headphones className="mr-3 h-6 w-6" />
                Découvrir Plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
