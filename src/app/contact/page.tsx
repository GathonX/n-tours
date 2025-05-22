// src/app/contact/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export const metadata = {
  title: 'Contact - N-Tours Madagascar',
  description:
    'Contactez-nous pour planifier votre voyage à Madagascar. Notre équipe est là pour vous aider à organiser votre séjour de rêve.',
}

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px] bg-secondary-light">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 to-secondary-light" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Contactez-nous
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Infos */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Nos coordonnées
                </h2>

                {[
                  {
                    icon: <MapPin size={24} className="text-accent" />,
                    label: 'Adresse',
                    value: 'Hell-Ville, Nosy Be, Madagascar',
                  },
                  {
                    icon: <Mail size={24} className="text-accent" />,
                    label: 'Email',
                    value: (
                      <a
                        href="mailto:contact@n-tours.mg"
                        className="hover:text-primary transition-colors"
                      >
                        contact@n-tours.mg
                      </a>
                    ),
                  },
                  {
                    icon: <Phone size={24} className="text-accent" />,
                    label: 'Téléphone',
                    value: (
                      <a
                        href="tel:+261340000000"
                        className="hover:text-primary transition-colors"
                      >
                        +261 34 00 000 00
                      </a>
                    ),
                  },
                  {
                    icon: <Clock size={24} className="text-accent" />,
                    label: 'Horaires',
                    value: (
                      <>
                        <p>Lun - Sam : 8h00 – 18h00</p>
                        <p>Dim : 9h00 – 13h00</p>
                      </>
                    ),
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {label}
                      </h3>
                      <div className="text-text-secondary space-y-1">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formulaire */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Envoyez-nous un message
                </h2>
                {/* ContactForm est un client component */}
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
// Une erreur est survenue