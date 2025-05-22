// src/components/Footer.tsx
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* À propos */}
          <div>
            <h3 className="text-2xl font-bold mb-4">N-Tours</h3>
            <p className="mb-4">
              Partenaire de confiance pour découvrir Madagascar.  
              Des expériences uniques et authentiques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Liens rapides</h3>
            <ul className="space-y-2">
              {['À propos','Destinations','Circuits','Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'À propos' ? '/about' : `/${link.toLowerCase()}`}
                    className="hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              {['Réservation','Transport','Hébergement','Guides locaux'].map((svc) => (
                <li key={svc}>
                  <Link
                    href={`/${svc.toLowerCase().replace(/ /g, '')}`}
                    className="hover:text-accent transition-colors"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-accent"/>
                <span>Madagascar, Nosy Be</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent"/>
                <a href="mailto:contact@n-tours.mg" className="hover:text-accent">
                  contact@n-tours.mg
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent"/>
                <a href="tel:+261340000000" className="hover:text-accent">
                  +261 34 00 000 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-gray-300">
          © {new Date().getFullYear()} N-Tours. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
