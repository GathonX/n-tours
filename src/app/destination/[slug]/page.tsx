// // src/app/destination/[slug]/page.tsx
// 'use client';

// import { useParams, notFound } from 'next/navigation';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import HeroSection from '@/components/destination/HeroSection';
// import ActivitiesSection from '@/components/destination/ActivitiesSection';
// import OptimizedImage from '@/components/OptimizedImage';
// import { destinations } from '@/data/destinations';
// import Link from 'next/link';

// export default function DestinationPage() {
//   const { slug } = useParams();
//   let destination = destinations.find(d => d.slug === slug);
//   if (!destination && !isNaN(Number(slug))) {
//     destination = destinations.find(d => d.id === Number(slug));
//   }
//   if (!destination) notFound();

//   return (
//     <>
//       <Header />
//       <main className="pt-20">
//         {/* Hero */}
//         <HeroSection
//           name={destination.name}
//           description={destination.description}
//           image={destination.image}
//         />

//         {/* Description détaillée */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-4">
//             <div className="max-w-3xl mx-auto prose prose-lg">
//               {destination.longDescription.split('\n').map((para, i) => (
//                 <p key={i} className="text-text-secondary mb-4">{para}</p>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Galerie photos */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
//               Galerie photos
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {destination.gallery.map((img, idx) => (
//                 <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
//                   <OptimizedImage
//                     src={img}
//                     alt={`${destination.name} - Photo ${idx + 1}`}
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-300"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Activités */}
//         <ActivitiesSection
//           destinationName={destination.name}
//           activities={destination.activities}
//         />

//         {/* Informations pratiques */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
//               Informations pratiques
//             </h2>
//             <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-white p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-text-primary mb-4">
//                   Meilleure période
//                 </h3>
//                 <p className="text-text-secondary">{destination.practicalInfo.bestPeriod}</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-text-primary mb-4">
//                   Comment s'y rendre
//                 </h3>
//                 <p className="text-text-secondary">{destination.practicalInfo.access}</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-text-primary mb-4">
//                   Hébergement
//                 </h3>
//                 <p className="text-text-secondary">{destination.practicalInfo.accommodation}</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold text-text-primary mb-4">
//                   À ne pas oublier
//                 </h3>
//                 <ul className="list-disc list-inside text-text-secondary">
//                   {destination.practicalInfo.mustBring.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-16 bg-primary">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold text-white mb-6">
//               Prêt à découvrir {destination.name} ?
//             </h2>
//             <p className="text-white/90 mb-8 max-w-2xl mx-auto">
//               Réservez votre séjour dès maintenant et vivez une expérience inoubliable
//             </p>
//             <div className="flex justify-center gap-4">
//               <Link href="/reservation" className="inline-block bg-white hover:bg-gray-100 text-primary font-medium px-8 py-3 rounded-full transition-colors">
//                 Réserver maintenant
//               </Link>
//               <Link href="/contact" className="inline-block border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-colors">
//                 Nous contacter
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }










'use client';

import { useParams, notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/destination/HeroSection';
import ActivitiesSection from '@/components/destination/ActivitiesSection';
import OptimizedImage from '@/components/OptimizedImage';
import { destinations } from '@/data/destinations';
import Link from 'next/link';

export default function DestinationPage() {
  const { slug } = useParams();
  let destination = destinations.find(d => d.slug === slug);
  if (!destination && !isNaN(Number(slug))) {
    destination = destinations.find(d => d.id === Number(slug));
  }
  if (!destination) notFound();

  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <HeroSection
          name={destination.name}
          description={destination.description}
          image={destination.image}
        />

        {/* À propos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-bold text-center text-text-primary mb-8 relative inline-block">
              À propos de {destination.name}
              <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-primary transform -translate-x-1/2 rounded-full" />
            </h2>
            <div className="text-text-secondary space-y-6 leading-relaxed">
              {destination.longDescription
                .split('\n')
                .map((p, i) => <p key={i}>{p.trim()}</p>)}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/offers"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition"
              >
                Découvrir nos offres
              </Link>
            </div>
          </div>
        </section>

        {/* Galerie photos */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
              Galerie photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg group"
                >
                  <OptimizedImage
                    src={img}
                    alt={`${destination.name} photo ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activités */}
        <ActivitiesSection
          destinationName={destination.name}
          activities={destination.activities}
        />

        {/* Informations pratiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
              Informations pratiques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background-alt p-6 rounded-xl shadow hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Meilleure période
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.bestPeriod}
                </p>
              </div>
              <div className="bg-background-alt p-6 rounded-xl shadow hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Comment s'y rendre
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.access}
                </p>
              </div>
              <div className="bg-background-alt p-6 rounded-xl shadow hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Hébergement
                </h3>
                <p className="text-text-secondary">
                  {destination.practicalInfo.accommodation}
                </p>
              </div>
              <div className="bg-background-alt p-6 rounded-xl shadow hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  À ne pas oublier
                </h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  {destination.practicalInfo.mustBring.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Prêt à découvrir {destination.name} ?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto leading-relaxed">
              Réservez maintenant et vivez une expérience inoubliable au cœur de Madagascar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/reservation"
                className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
              >
                Réserver maintenant
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition"
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
}
