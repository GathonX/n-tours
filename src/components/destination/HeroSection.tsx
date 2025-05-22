
// src/components/HeroSection.tsx

'use client';
import OptimizedImage from '@/components/OptimizedImage';

interface HeroSectionProps {
  name: string;
  description: string;
  image: string;
}

export default function HeroSection({ name, description, image }: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px]">
      <OptimizedImage
        src={image}
        alt={name}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-secondary-dark/60" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
            {name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 leading-relaxed">
            {description}
          </p>
          <a
            href="/destinations"
            className="inline-block bg-accent hover:bg-accent/90 text-secondary-dark font-semibold py-3 px-8 rounded-lg transition"
          >
            Découvrir nos offres
          </a>
        </div>
      </div>
    </section>
  );
}
