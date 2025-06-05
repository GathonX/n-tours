// src/components/Hero.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination }    from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import OptimizedImage from '@/components/OptimizedImage';
import Link           from 'next/link';

interface Slide {
  file: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    file: 'h2.png',
    title: 'Explorez Nosy Be',
    description: 'Plages de sable blanc et plantations d’ylang-ylang vous attendent.',
  },
  {
    file: 'h3.png',
    title: 'Plongée sous-marine',
    description: 'Découvrez les fonds marins exceptionnels et leur biodiversité unique.',
  },
  {
    file: 'h4.png',
    title: 'Safari dans la forêt',
    description: 'Partez à la rencontre des lémuriens et admirez la faune endémique.',
  },
  {
    file: 'h5.png',
    title: 'Couchers de soleil magiques',
    description: 'Vivez l’instant spectaculaire sur l’Allée des Baobabs.',
  },
  {
    file: 'h6.png',
    title: 'Tours culturels',
    description: 'Imprégnez-vous des traditions locales et de l’artisanat malgaches.',
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden
                       h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map(({ file, title, description }, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* Image de fond */}
            <div className="absolute inset-0">
              <OptimizedImage
                src={`/images/hero/${file}`}
                alt={title}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-secondary-dark/20" />
            </div>

            {/* Contenu dynamique */}
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">
                  {title}
                </h1>
                <p className="text-lg md:text-xl mb-6 leading-relaxed">
                  {description}
                </p>
                <Link
                  href="/destinations"
                  className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full transition"
                >
                  Découvrir nos destinations
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flèche “scroll” */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
