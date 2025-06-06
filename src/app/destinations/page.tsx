// 'use client';

// import { useState, useMemo } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import DestinationFilters from '@/components/destination/DestinationFilters';
// import DestinationGrid from '@/components/destination/DestinationGrid';
// import { destinations } from '@/data/destinations';
// import Hero from '@/components/Hero';

// export default function DestinationsPage() {
//   const [filters, setFilters] = useState({
//     region: '',
//     categories: [] as string[],
//     priceRange: [0, 1000] as [number, number],
//     searchTerm: '',
//   });

//   // Extraire toutes les régions et catégories uniques
//   const regions = useMemo(() => {
//     return Array.from(new Set(destinations.map((d) => d.region)));
//   }, []);

//   const categories = useMemo(() => {
//     const allCategories = destinations.flatMap((d) => d.category);
//     return Array.from(new Set(allCategories));
//   }, []);

//   // Filtrer les destinations
//   const filteredDestinations = useMemo(() => {
//     return destinations.filter((destination) => {
//       // Filtre par région
//       if (filters.region && destination.region !== filters.region) {
//         return false;
//       }

//       // Filtre par catégories
//       if (
//         filters.categories.length > 0 &&
//         !filters.categories.some((cat) => destination.category.includes(cat))
//       ) {
//         return false;
//       }

//       // Filtre par prix
//       if (destination.price.from > filters.priceRange[1]) {
//         return false;
//       }

//       // Filtre par recherche
//       if (filters.searchTerm) {
//         const searchLower = filters.searchTerm.toLowerCase();
//         return (
//           destination.name.toLowerCase().includes(searchLower) ||
//           destination.description.toLowerCase().includes(searchLower)
//         );
//       }

//       return true;
//     });
//   }, [filters]);

//   return (
//     <>
//       <Header />
      
//       <main className="pt-20 min-h-screen bg-background">
//         <div className="container mx-auto px-4 py-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
//               Nos Destinations
//             </h1>
//             <p className="text-xl text-text-secondary">
//               Découvrez les plus beaux endroits de Madagascar et trouvez votre prochaine aventure
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Filtres */}
//             <div className="lg:col-span-1">
//               <DestinationFilters
//                 regions={regions}
//                 categories={categories}
//                 onFilterChange={setFilters}
//               />
//             </div>

//             {/* Grille des destinations */}
//             <div className="lg:col-span-3">
//               {filteredDestinations.length === 0 ? (
//                 <div className="text-center py-12">
//                   <p className="text-xl text-text-secondary">
//                     Aucune destination ne correspond à vos critères.
//                   </p>
//                 </div>
//               ) : (
//                 <DestinationGrid destinations={filteredDestinations} />
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// } 






// src/app/destinations/page.tsx
'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DestinationFilters from '@/components/destination/DestinationFilters';
import DestinationGrid from '@/components/destination/DestinationGrid';
import { destinations } from '@/data/destinations';
import Hero from '@/components/Hero';

export default function DestinationsPage() {
  const [filters, setFilters] = useState({
    region: '',
    categories: [] as string[],
    minPrice: 0,
    maxPrice: 1000,
    searchTerm: '',
  });

  // Extraire toutes les régions et catégories uniques
  const regions = useMemo(() => Array.from(new Set(destinations.map(d => d.region))), []);
  const categories = useMemo(() => Array.from(new Set(destinations.flatMap(d => d.category))), []);

  // Appliquer les filtres
  const filteredDestinations = useMemo(() =>
    destinations.filter(dest => {
      if (filters.region && dest.region !== filters.region) return false;
      if (filters.categories.length && !filters.categories.some(c => dest.category.includes(c))) return false;
      if (dest.price.from < filters.minPrice || dest.price.from > filters.maxPrice) return false;
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        return (
          dest.name.toLowerCase().includes(term) ||
          dest.description.toLowerCase().includes(term)
        );
      }
      return true;
    }),
  [filters]);

  return (
    <>
      <Header />
      <main className="pt-20 bg-background min-h-screen">
        {/* Titre principal */}
        <section className="bg-white py-12 shadow-sm">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-text-primary mb-2 inline-block relative">
              Nos Destinations
              <span className="absolute bottom-0 left-1/2 w-20 h-1 bg-primary transform -translate-x-1/2 rounded-full"></span>
            </h1>
            <p className="text-lg text-text-secondary">
              Découvrez les plus beaux endroits de Madagascar et trouvez votre prochaine aventure
            </p>
          </div>
        </section>

        {/* Filtres & Grille */}
        <section className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtres sticky */}
          <div className="lg:col-span-1 sticky top-28">
            <DestinationFilters onFilterChange={setFilters} />
          </div>

          {/* Résultats */}
          <div className="lg:col-span-3">
            {filteredDestinations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-text-secondary">
                  Aucune destination ne correspond à vos critères.
                </p>
              </div>
            ) : (
              <DestinationGrid destinations={filteredDestinations} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
