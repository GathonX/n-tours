This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# n-tours












Alors que chaque fichier possede des contenu et chaque contenu sont important pour mon projet ; 
Est cce que tu peux arranger tous ça pour que je ne perd pas mes donné , si tu veux encore les autres fichier dit moi , 
src/app/destination/
├── [id]
│   └── page.tsx
└── [slug]
    └── page.tsx

" 
src/app/destination/
├── [id]
       └── page.tsx  "       'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const destinations = [
  {
    id: 1,
    name: 'Nosy Be',
    image: '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
    gallery: [
      '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
      '/images/Tours d\'ile de nosy be/nosy-be2.jpg',
      '/images/Tours d\'ile de nosy be/nosy-be3.jpg',
    ],
    description: 'Surnommée "l\'île aux parfums", Nosy Be est un paradis tropical connu pour ses plages de sable blanc, ses eaux cristallines et ses plantations d\'ylang-ylang.',
    longDescription: 
      Nosy Be, véritable joyau de l'océan Indien, est une destination qui enchante les visiteurs par sa beauté naturelle et sa richesse culturelle. 
      
      Située au nord-ouest de Madagascar, cette île paradisiaque offre :
      - Des plages de sable blanc immaculées bordées de palmiers
      - Des eaux turquoise parfaites pour la plongée et le snorkeling
      - Des plantations d'ylang-ylang qui embaument l'air de leur parfum envoûtant
      - Une culture locale vibrante et accueillante
      
      L'île est également réputée pour sa biodiversité exceptionnelle, avec de nombreuses espèces endémiques à observer dans leur habitat naturel.
    ,
    highlights: ['Plages paradisiaques', 'Spots de plongée', 'Culture locale'],
    activities: [
      {
        name: 'Plongée sous-marine',
        description: 'Découvrez les fonds marins exceptionnels et leur biodiversité unique.',
        duration: '2-3 heures',
        price: 'À partir de 50€',
      },
      {
        name: 'Tour des plantations',
        description: 'Visitez les plantations d\'ylang-ylang et découvrez le processus de fabrication des huiles essentielles.',
        duration: '3 heures',
        price: 'À partir de 30€',
      },
      {
        name: 'Excursion en bateau',
        description: 'Explorez les îles voisines et profitez de moments de détente sur des plages désertes.',
        duration: 'Journée complète',
        price: 'À partir de 80€',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre',
      access: 'Vol direct vers l\'aéroport de Nosy Be ou bateau depuis Ankify',
      accommodation: 'Hôtels, lodges et bungalows disponibles pour tous les budgets',
      mustBring: ['Crème solaire', 'Anti-moustiques', 'Chapeau', 'Maillot de bain'],
    },
  },
  // ... Ajoutez les autres destinations de la même manière
];

export default function DestinationPage() {
  const params = useParams();
  const destination = destinations.find(d => d.id === parseInt(params.id as string));

  if (!destination) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <OptimizedImage
            src={destination.image}
            alt={destination.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {destination.name}
              </h1>
              <p className="text-xl text-white/90">
                {destination.description}
              </p>
            </div>
          </div>
        </section>

        {/* Description détaillée */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                {destination.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-text-secondary mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galerie photos */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Galerie photos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src={image}
                    alt={${destination.name} - Photo ${index + 1}}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activités */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Activités à {destination.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.activities.map((activity, index) => (
                <div key={index} className="bg-background p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {activity.name}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {activity.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary">{activity.duration}</span>
                    <span className="font-medium">{activity.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Informations pratiques */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Informations pratiques
            </h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Meilleure période
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.bestPeriod}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Comment s'y rendre
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.access}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Hébergement
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.accommodation}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  À ne pas oublier
                </h3>
                <ul className="list-disc list-inside text-text-secondary">
                  {destination.practicalInfo.mustBring.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à découvrir {destination.name} ?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Réservez votre séjour dès maintenant et vivez une expérience inoubliable
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/reservation"
                className="inline-block bg-white hover:bg-gray-100 text-primary font-medium px-8 py-3 rounded-full transition-colors"
              >
                Réserver maintenant
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}        ";


src/app/destination/
└── [slug]
    └── page.tsx "       'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/destination/HeroSection';
import ActivitiesSection from '@/components/destination/ActivitiesSection';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinations } from '@/data/destinations';
import OptimizedImage from '@/components/OptimizedImage';

export default function DestinationPage() {
  const params = useParams();
  const destination = destinations.find(d => d.slug === params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroSection
          name={destination.name}
          description={destination.description}
          image={destination.image}
        />

        {/* Description détaillée */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                {destination.longDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-text-secondary mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galerie photos */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Galerie photos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destination.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <OptimizedImage
                    src={image}
                    alt={${destination.name} - Photo ${index + 1}}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ActivitiesSection
          destinationName={destination.name}
          activities={destination.activities}
        />

        {/* Informations pratiques */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Informations pratiques
            </h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Meilleure période
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.bestPeriod}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Comment s'y rendre
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.access}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Hébergement
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.accommodation}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  À ne pas oublier
                </h3>
                <ul className="list-disc list-inside text-text-secondary">
                  {destination.practicalInfo.mustBring.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à découvrir {destination.name} ?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Réservez votre séjour dès maintenant et vivez une expérience inoubliable
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/reservation"
                className="inline-block bg-white hover:bg-gray-100 text-primary font-medium px-8 py-3 rounded-full transition-colors"
              >
                Réserver maintenant
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}         ";

"