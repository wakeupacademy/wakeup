"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const categories = [
  { id: "all", name: "Toutes les vidéos", count: 500 },
  { id: "motivation", name: "Motivation", count: 120 },
  { id: "confiance", name: "Confiance en soi", count: 85 },
  { id: "leadership", name: "Leadership", count: 65 },
  { id: "mindset", name: "Mindset", count: 95 },
  { id: "success", name: "Réussite", count: 75 },
  { id: "habits", name: "Habitudes", count: 60 },
]

export function VideoCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full px-6 py-3 transition-all duration-300 animate-slide-in-left ${
                activeCategory === category.id
                  ? "bg-burgundy hover:bg-burgundy/90 text-white"
                  : "border-gray-300 text-gray-700 hover:border-burgundy hover:text-burgundy"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-gray-100 text-gray-600">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
