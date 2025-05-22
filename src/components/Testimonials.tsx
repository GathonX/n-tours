'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Voyageuse passionnée',
    image: '/images/testimonials/avatar1.jpg',
    quote: 'Une expérience inoubliable à Madagascar. L\'équipe de N-Tours a rendu notre séjour magique avec une organisation parfaite.',
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'Photographe',
    image: '/images/testimonials/avatar2.jpg',
    quote: 'Des paysages à couper le souffle et des guides locaux exceptionnels. Je recommande vivement N-Tours pour découvrir Madagascar.',
  },
  {
    id: 3,
    name: 'Julie Leroux',
    role: 'Blogueuse voyage',
    image: '/images/testimonials/avatar3.jpg',
    quote: 'Un service client irréprochable et des circuits bien pensés. N-Tours a dépassé toutes mes attentes.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Découvrez les expériences vécues par nos voyageurs à Madagascar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Témoignage actif */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full" />
                  <svg
                    className="w-full h-full text-primary rounded-full"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <blockquote className="text-xl text-text-primary text-center mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="text-center">
                  <cite className="font-semibold text-lg text-text-primary not-italic">
                    {testimonials[activeIndex].name}
                  </cite>
                  <p className="text-text-secondary">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons de navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
              <div className="flex justify-between">
                <button
                  onClick={previousTestimonial}
                  className="bg-white/80 hover:bg-white text-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center -translate-x-5"
                  aria-label="Témoignage précédent"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-white/80 hover:bg-white text-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center translate-x-5"
                  aria-label="Témoignage suivant"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-primary'
                    : 'bg-primary/20 hover:bg-primary/40'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 