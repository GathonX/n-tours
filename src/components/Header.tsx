// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-primary">
            N-Tours
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8 text-secondary-dark">
            {['Accueil','À propos','Destinations','Circuits'].map((label) => (
              <Link
                key={label}
                href={label === 'Accueil' ? '/' : `/${label.toLowerCase()}`}
                className="hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition"
            >
              Contacter-nous maintenant
            </Link>
          </div>

          {/* Bouton mobile */}
          <button
            className="md:hidden text-secondary-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {mobileOpen && (
          <nav className="md:hidden bg-white shadow-inner py-4">
            <ul className="space-y-4 text-center">
              {['Accueil','À propos','Destinations','Circuits','Contact'].map((label) => (
                <li key={label}>
                  <Link
                    href={label === 'Accueil' ? '/' : `/${label.toLowerCase()}`}
                    className="text-secondary-dark hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservation"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Réserver maintenant
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
);
}
