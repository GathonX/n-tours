
// src/components/Hero.tsx

import OptimizedImage from '@/components/OptimizedImage';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <OptimizedImage
          src="/images/Nosy sakatia/sakatia1.jpg"
          alt="Plage paradisiaque"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-secondary-dark/50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
            Découvrez la magie de Madagascar
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Explorez des paysages à couper le souffle et vivez des expériences uniques
          </p>
          <Link
            href="/destinations"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Découvrir nos destinations
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
