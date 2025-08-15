"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download, MessageCircle, Trophy, Smartphone, Headphones } from "lucide-react"

const features = [
  {
    icon: Play,
    title: "Vidéos HD",
    description: "Contenu vidéo haute qualité accessible 24h/24",
  },
  {
    icon: Download,
    title: "Ressources Téléchargeables",
    description: "PDF, exercices et outils pratiques inclus",
  },
  {
    icon: MessageCircle,
    title: "Support Communauté",
    description: "Échangez avec d'autres apprenants motivés",
  },
  {
    icon: Trophy,
    title: "Certification",
    description: "Obtenez votre certificat de réussite",
  },
  {
    icon: Smartphone,
    title: "Accès Mobile",
    description: "Apprenez où que vous soyez, quand vous voulez",
  },
  {
    icon: Headphones,
    title: "Format Audio",
    description: "Écoutez vos formations en déplacement",
  },
]

export function TrainingFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <feature.icon className="h-12 w-12 text-burgundy mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-burgundy to-red-800 rounded-3xl p-12 text-center animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Prêt à Transformer Votre Vie ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de personnes qui ont déjà transformé leur vie grâce à nos formations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-burgundy hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full"
            >
              Commencer Gratuitement
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-burgundy px-8 py-4 text-lg font-bold rounded-full bg-transparent"
            >
              En Savoir Plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
