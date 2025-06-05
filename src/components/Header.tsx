
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    
  ];

  const socialLinks = [
  {
    icon: <Mail size={16} className="text-[#D44638]" />,      // Gmail-red
    href: 'mailto:contact@n-tours.mg',
    label: 'Email',
  },
  {
    icon: <Phone size={16} className="text-[#008000]" />,     // sombre vert
    href: 'tel:+261326687543',
    label: 'Téléphone',
  },
  {
    icon: <Facebook size={16} className="text-[#1877F2]" />,  // bleu FB
    href: 'https://www.facebook.com/NToursMadagascar',
    label: 'Facebook',
  },
  {
    icon: <FaWhatsapp size={16} className="text-[#25D366]" />, // vert WhatsApp
    href: 'https://wa.me/261326687543',
    label: 'WhatsApp',
  },
];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-lg shadow z-50">
     
     {/* Sub-Header */}
<div className="bg-gray-50">
  <div className="container mx-auto px-6 lg:px-8 flex flex-wrap justify-center gap-4 py-2 text-sm text-gray-600">
    {socialLinks.map(({ icon, href, label }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        className="flex items-center space-x-1 hover:opacity-80 transition"
      >
        {icon}
        <span className="hidden md:inline">{label}</span>
      </a>
    ))}
  </div>
</div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-3xl font-extrabold text-primary">
              N-Tours
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                className="relative group"
              >
                <Link
                  href={link.href}
                  className="px-1 font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform"
                />
              </motion.div>
            ))}
          </nav>

          {/* CTA Desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-full shadow hover:shadow-lg transition transform hover:scale-105"
            >
              Contactez-nous
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-white backdrop-blur-lg z-40"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/*  → ici, on affiche logo + close button côte à côte */}
            <div className="flex items-center justify-between p-6 border-b">
              <Link href="/" className="text-2xl font-extrabold text-primary">
                N-Tours
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={28} className="text-gray-700" />
              </button>
            </div>

            <nav className="mt-6 space-y-6 px-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-lg font-medium text-gray-700 hover:text-primary transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-full shadow hover:shadow-lg transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Contactez-nous
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
