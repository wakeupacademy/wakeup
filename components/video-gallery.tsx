"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Eye, ThumbsUp } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Ton GUIDE Ultime ANTI-MANIPULATION - SUPPRIMER LA PEUR EN 9 MIN",
    thumbnail: "/video-thumb-1.png",
    duration: "9:15",
    views: "125K",
    likes: "3.2K",
    category: "Confiance en soi",
    description: "Découvrez comment vous protéger de la manipulation et développer une confiance inébranlable.",
    featured: true,
  },
  {
    id: 2,
    title: "NE Fais Pas le DEUIL de TA MOTIVATION - Tu n'es pas un LOSER",
    thumbnail: "/video-thumb-2.png",
    duration: "12:30",
    views: "89K",
    likes: "2.8K",
    category: "Motivation",
    description: "Retrouvez votre motivation et cessez de vous auto-saboter avec ces techniques puissantes.",
    featured: false,
  },
  {
    id: 3,
    title: "Le SECRET pour DÉVELOPPER une MENTALITÉ de CHAMPION",
    thumbnail: "/video-thumb-3.png",
    duration: "15:45",
    views: "156K",
    likes: "4.1K",
    category: "Mindset",
    description: "Adoptez la mentalité des grands gagnants et transformez votre approche du succès.",
    featured: true,
  },
  {
    id: 4,
    title: "Comment VAINCRE la PROCRASTINATION en 7 ÉTAPES",
    thumbnail: "/video-thumb-4.png",
    duration: "11:20",
    views: "98K",
    likes: "2.5K",
    category: "Habitudes",
    description: "Éliminez définitivement la procrastination avec cette méthode éprouvée.",
    featured: false,
  },
  {
    id: 5,
    title: "LEADERSHIP : Comment INFLUENCER sans MANIPULER",
    thumbnail: "/video-thumb-5.png",
    duration: "18:10",
    views: "134K",
    likes: "3.7K",
    category: "Leadership",
    description: "Développez votre leadership authentique et votre capacité d'influence positive.",
    featured: false,
  },
  {
    id: 6,
    title: "La FORMULE SECRÈTE du SUCCÈS que PERSONNE ne vous DIT",
    thumbnail: "/video-thumb-6.png",
    duration: "14:25",
    views: "201K",
    likes: "5.2K",
    category: "Réussite",
    description: "Découvrez les principes cachés que utilisent tous les grands entrepreneurs.",
    featured: true,
  },
]

export function VideoGallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Videos */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">Vidéos à la Une</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos
              .filter((video) => video.featured)
              .slice(0, 2)
              .map((video, index) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up group cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={600}
                      height={340}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-burgundy rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-burgundy/10 text-burgundy">{video.category}</Badge>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-burgundy transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {video.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {video.likes}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Videos Grid */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">Toutes les Vidéos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card
                key={video.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-burgundy rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-burgundy/10 text-burgundy text-xs">{video.category}</Badge>
                  <h3 className="font-bold text-base text-gray-900 mb-2 line-clamp-2 group-hover:text-burgundy transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {video.likes}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center animate-fade-in-up">
          <Button
            size="lg"
            className="bg-burgundy hover:bg-burgundy/90 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            VOIR TOUTES LES VIDÉOS
          </Button>
        </div>
      </div>
    </section>
  )
}
