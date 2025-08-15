"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-2xl border-0 animate-fade-in-up">
          <CardHeader className="text-center pb-8">
            <CardTitle className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Envoyez-nous un <span className="text-burgundy">Message</span>
            </CardTitle>
            <p className="text-gray-600">
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in-up">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Envoyé !</h3>
                <p className="text-gray-600">Nous vous répondrons dans les 24 heures.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <Input
                      type="text"
                      required
                      placeholder="Votre prénom"
                      className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                    />
                  </div>
                  <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <Input
                      type="text"
                      required
                      placeholder="Votre nom"
                      className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                    />
                  </div>
                </div>

                <div className="animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  />
                </div>

                <div className="animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <Input
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    className="border-gray-300 focus:border-burgundy focus:ring-burgundy"
                  />
                </div>

                <div className="animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sujet de votre demande *</label>
                  <Select required>
                    <SelectTrigger className="border-gray-300 focus:border-burgundy focus:ring-burgundy">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coaching">Coaching Personnel</SelectItem>
                      <SelectItem value="conference">Demande de Conférence</SelectItem>
                      <SelectItem value="formation">Formation en Entreprise</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="media">Demande Média</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    required
                    placeholder="Décrivez votre projet, vos objectifs ou votre demande..."
                    rows={6}
                    className="border-gray-300 focus:border-burgundy focus:ring-burgundy resize-none"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-burgundy hover:bg-burgundy/90 text-white py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le Message
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
