import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  )
}
