
// src/app/contact/page.tsx


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact - N-Tours Madagascar',
  description:
    'Contactez-nous pour planifier votre voyage à Madagascar. Notre équipe est là pour vous aider à organiser votre séjour de rêve.',
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] min-h-[400px] bg-secondary-light overflow-hidden">
          {/* Image de fond si souhaitée */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/h3.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-secondary-light" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                Contactez-nous
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Notre équipe est à votre disposition pour répondre à toutes vos questions.
              </p>
            </div>
          </div>
        </section>

        {/* Section de contact */}
        <section className="py-16 md:py-24 bg-background-alt">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bloc coordonnées */}
              <div className="space-y-10">
                <h2 className="text-3xl font-bold text-text-primary">Nos coordonnées</h2>

                {[
                  {
                    icon: <MapPin size={24} className="text-primary" />,
                    label: 'Adresse',
                    value: 'Hell-Ville, Nosy Be, Madagascar',
                  },
                  {
                    icon: <Mail size={24} className="text-primary" />,
                    label: 'Email',
                    value: (
                      <a
                        href="mailto:contact@n-tours.mg"
                        className="hover:text-primary-dark transition"
                      >
                        contact@n-tours.mg
                      </a>
                    ),
                  },
                  {
                    icon: <Phone size={24} className="text-primary" />,
                    label: 'Téléphone',
                    value: (
                      <a
                        href="tel:+261340000000"
                        className="hover:text-primary-dark transition"
                      >
                        +261 34 00 000 00
                      </a>
                    ),
                  },
                  {
                    icon: <Clock size={24} className="text-primary" />,
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
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-1">
                        {label}
                      </h3>
                      <div className="text-text-secondary space-y-1">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bloc formulaire */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Envoyez-nous un message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
