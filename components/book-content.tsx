"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Lightbulb, Heart, Trophy } from "lucide-react"

const chapters = [
  {
    number: "01",
    title: "Réveillez Votre Potentiel",
    description: "Découvrez les blocages qui vous empêchent d'avancer et comment les surmonter.",
  },
  {
    number: "02",
    title: "La Confiance Absolue",
    description: "Développez une confiance inébranlable en vous et en vos capacités.",
  },
  {
    number: "03",
    title: "Mindset de Champion",
    description: "Adoptez la mentalité des grands gagnants et transformez votre approche.",
  },
  {
    number: "04",
    title: "L'Art de la Motivation",
    description: "Maintenez votre motivation au plus haut niveau en toutes circonstances.",
  },
  {
    number: "05",
    title: "Stratégies de Réussite",
    description: "Les méthodes concrètes pour atteindre tous vos objectifs.",
  },
  {
    number: "06",
    title: "Votre Nouvelle Vie",
    description: "Intégrez tous les apprentissages pour une transformation durable.",
  },
]

const benefits = [
  {
    icon: Target,
    title: "Clarté des Objectifs",
    description: "Définissez et atteignez vos objectifs les plus ambitieux",
  },
  {
    icon: Lightbulb,
    title: "Stratégies Éprouvées",
    description: "Des méthodes testées par des milliers de personnes",
  },
  {
    icon: Heart,
    title: "Transformation Durable",
    description: "Changements profonds et durables dans votre vie",
  },
  {
    icon: Trophy,
    title: "Succès Garanti",
    description: "Résultats mesurables en suivant la méthode",
  },
]

export function BookContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What You'll Learn */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
            Ce Que Vous Allez <span className="text-burgundy">Découvrir</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un guide complet pour transformer votre vie et révéler votre véritable potentiel
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <benefit.icon className="h-12 w-12 text-burgundy mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chapters */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-12 animate-fade-in-up">
            Table des <span className="text-burgundy">Matières</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.map((chapter, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <Badge className="bg-burgundy text-white text-lg px-3 py-1 rounded-full">{chapter.number}</Badge>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{chapter.title}</h3>
                    <p className="text-gray-600">{chapter.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-burgundy to-red-800 rounded-3xl p-12 text-center animate-fade-in-up">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            Commencez Votre Transformation Aujourd'hui
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez les milliers de personnes qui ont déjà transformé leur vie grâce à ce livre révolutionnaire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-burgundy hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full"
            >
              Acheter le Livre - 29€
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-burgundy px-10 py-4 text-lg font-bold rounded-full bg-transparent"
            >
              Télécharger l'Extrait
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
