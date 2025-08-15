"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Youtube, Instagram, Linkedin, Facebook } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Contact Information */}
          <Card className="shadow-lg border-0 animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                  <Mail className="h-6 w-6 text-burgundy mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@wakeupacademy.fr</div>
                    <div className="text-gray-600">coaching@wakeupacademy.fr</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                  <Phone className="h-6 w-6 text-burgundy mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">+33 1 23 45 67 89</div>
                    <div className="text-sm text-gray-500">Lun-Ven 9h-18h</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                  <MapPin className="h-6 w-6 text-burgundy mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">123 Avenue de la Réussite</div>
                    <div className="text-gray-600">75001 Paris, France</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
                  <Clock className="h-6 w-6 text-burgundy mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Horaires</div>
                    <div className="text-gray-600">Lundi - Vendredi : 9h - 18h</div>
                    <div className="text-gray-600">Samedi : 10h - 16h</div>
                    <div className="text-gray-600">Dimanche : Fermé</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="shadow-lg border-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Suivez-nous</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-3 p-4 h-auto border-gray-300 hover:border-red-500 hover:text-red-500 transition-colors animate-slide-in-left bg-transparent"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Youtube className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">YouTube</div>
                    <div className="text-xs text-gray-500">50K abonnés</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center gap-3 p-4 h-auto border-gray-300 hover:border-pink-500 hover:text-pink-500 transition-colors animate-slide-in-left bg-transparent"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Instagram className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Instagram</div>
                    <div className="text-xs text-gray-500">25K followers</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center gap-3 p-4 h-auto border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors animate-slide-in-left bg-transparent"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Linkedin className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-xs text-gray-500">15K connexions</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="flex items-center gap-3 p-4 h-auto border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors animate-slide-in-left bg-transparent"
                  style={{ animationDelay: "0.4s" }}
                >
                  <Facebook className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold">Facebook</div>
                    <div className="text-xs text-gray-500">30K fans</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card
            className="shadow-lg border-0 bg-burgundy text-white animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Consultation Gratuite</h3>
              <p className="mb-6 text-white/90">
                Réservez votre consultation gratuite de 30 minutes pour discuter de vos objectifs.
              </p>
              <Button
                size="lg"
                className="bg-white text-burgundy hover:bg-gray-100 px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Réserver Maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
