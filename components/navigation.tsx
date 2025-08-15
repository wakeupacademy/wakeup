"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ShoppingCart } from "lucide-react"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"

const navigationItems = [
  { name: "ACCUEIL", href: "/" },
  { name: "QUI SUIS-JE ?", href: "/about" },
  { name: "SE FORMER", href: "/training" },
  { name: "MON LIVRE", href: "/book" },
  { name: "VIDÉOS", href: "/videos" },
  { name: "CHANTER POUR MOTIVER", href: "/music" },
  { name: "CONTACT", href: "/contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs xl:text-sm font-medium transition-colors duration-300 relative group ${
                  pathname === item.href ? "text-[#941E28]" : "text-black hover:text-[#941E28]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#941E28] transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex hover:text-[#941E28] transition-colors h-8 w-8 sm:h-10 sm:w-10"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex hover:text-[#941E28] transition-colors h-8 w-8 sm:h-10 sm:w-10"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-8 w-8 sm:h-10 sm:w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm sm:text-base font-medium transition-colors duration-300 px-4 py-3 rounded-lg ${
                    pathname === item.href
                      ? "text-[#941E28] bg-[#941E28]/5"
                      : "text-black hover:text-[#941E28] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
