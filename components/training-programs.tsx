"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, CheckCircle } from "lucide-react"

const programs = [
  {
    id: 1,
    title: "Confiance en Soi Absolue",
    description: "Développez une confiance inébranlable et surmontez tous vos blocages mentaux",
    duration: "8 semaines",
    students: "500+",
    rating: 4.9,
    price: "297€",
    level: "Débutant",
    features: ["12 modules vidéo", "Exercices pratiques", "Suivi personnalisé", "Groupe privé"],
    popular: true,
  },
  {
    id: 2,
    title: "Leadership & Influence",
    description: "Maîtrisez l'art du leadership et développez votre capacité d'influence",
    duration: "10 semaines",
    students: "300+",
    rating: 4.8,
    price: "497€",
    level: "Intermédiaire",
    features: ["15 modules vidéo", "Cas pratiques", "Coaching de groupe", "Certification"],
    popular: false,
  },
  {
    id: 3,
    title: "Mindset de Champion",
    description: "Adoptez la mentalité des grands gagnants et atteignez l'excellence",
    duration: "12 semaines",
    students: "800+",
    rating: 5.0,
    price: "697€",
    level: "Avancé",
    features: ["20 modules vidéo", "Masterclass live", "Coaching 1-on-1", "Accès à vie"],
    popular: false,
  },
]

export function TrainingPrograms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-burgundy">Programmes</span> de Formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le programme qui correspond à vos objectifs et commencez votre transformation dès aujourd'hui
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up ${
                program.popular ? "ring-2 ring-burgundy" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {program.popular && (
                <div className="absolute top-0 right-0 bg-burgundy text-white px-4 py-1 text-sm font-bold">
                  POPULAIRE
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={
                      program.level === "Débutant"
                        ? "secondary"
                        : program.level === "Intermédiaire"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {program.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{program.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{program.title}</CardTitle>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students}
                  </div>
                </div>

                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-burgundy">{program.price}</span>
                    <span className="text-sm text-gray-500">Paiement unique</span>
                  </div>
                  <Button
                    className={`w-full py-3 font-semibold rounded-full transition-all duration-300 ${
                      program.popular
                        ? "bg-burgundy hover:bg-burgundy/90 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    Commencer Maintenant
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-gray-600 mb-4">Pas sûr de votre choix ?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white bg-transparent"
          >
            Consultation Gratuite de 30 min
          </Button>
        </div>
      </div>
    </section>
  )
}
