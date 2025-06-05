// import { useState } from 'react';

// interface DestinationFiltersProps {
//   regions: string[];
//   categories: string[];
//   onFilterChange: (filters: {
//     region: string;
//     categories: string[];
//     priceRange: [number, number];
//     searchTerm: string;
//   }) => void;
// }

// export default function DestinationFilters({
//   regions,
//   categories,
//   onFilterChange,
// }: DestinationFiltersProps) {
//   const [selectedRegion, setSelectedRegion] = useState<string>('');
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleRegionChange = (region: string) => {
//     setSelectedRegion(region);
//     onFilterChange({
//       region,
//       categories: selectedCategories,
//       priceRange,
//       searchTerm,
//     });
//   };

//   const handleCategoryToggle = (category: string) => {
//     const newCategories = selectedCategories.includes(category)
//       ? selectedCategories.filter((c) => c !== category)
//       : [...selectedCategories, category];
    
//     setSelectedCategories(newCategories);
//     onFilterChange({
//       region: selectedRegion,
//       categories: newCategories,
//       priceRange,
//       searchTerm,
//     });
//   };

//   const handlePriceChange = (value: [number, number]) => {
//     setPriceRange(value);
//     onFilterChange({
//       region: selectedRegion,
//       categories: selectedCategories,
//       priceRange: value,
//       searchTerm,
//     });
//   };

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//     onFilterChange({
//       region: selectedRegion,
//       categories: selectedCategories,
//       priceRange,
//       searchTerm: term,
//     });
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       {/* Recherche */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Rechercher une destination..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           value={searchTerm}
//           onChange={(e) => handleSearch(e.target.value)}
//         />
//       </div>

//       {/* Régions */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-3">Régions</h3>
//         <select
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           value={selectedRegion}
//           onChange={(e) => handleRegionChange(e.target.value)}
//         >
//           <option value="">Toutes les régions</option>
//           {regions.map((region) => (
//             <option key={region} value={region}>
//               {region}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Catégories */}
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-3">Catégories</h3>
//         <div className="flex flex-wrap gap-2">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryToggle(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 selectedCategories.includes(category)
//                   ? 'bg-primary text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Fourchette de prix */}
//       <div>
//         <h3 className="text-lg font-semibold mb-3">Budget</h3>
//         <div className="flex items-center gap-4">
//           <input
//             type="range"
//             min="0"
//             max="1000"
//             step="50"
//             value={priceRange[1]}
//             onChange={(e) => handlePriceChange([0, parseInt(e.target.value)])}
//             className="w-full"
//           />
//           <span className="text-sm text-gray-600">
//             Jusqu'à {priceRange[1]}€
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// } 








// src/components/DestinationFilters.tsx
import { useState, useEffect } from 'react';

interface Filters {
  region: string;
  categories: string[];
  minPrice: number;
  maxPrice: number;
  searchTerm: string;
}

interface DestinationFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

// Valeurs réelles selon vos destinations
const AVAILABLE_REGIONS = ['Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Centre-Est'];
const AVAILABLE_CATEGORIES = [
  'Plages', 'Nature', 'Culture', 'Panorama', 'Aventure',
  'Randonnée', 'Faune', 'Spiritualité', 'Bien-être'
];
const PRICE_STEP = 10;
const MAX_PRICE = 1000;

export default function DestinationFilters({ onFilterChange }: DestinationFiltersProps) {
  const [filters, setFilters] = useState<Filters>({
    region: '',
    categories: [],
    minPrice: 0,
    maxPrice: MAX_PRICE,
    searchTerm: '',
  });

  // Émet les filtres au parent dès qu'ils changent
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleReset = () => {
    setFilters({ region: '', categories: [], minPrice: 0, maxPrice: MAX_PRICE, searchTerm: '' });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
      {/* Recherche */}
      <div>
        <input
          type="text"
          placeholder="Rechercher une destination..."
          value={filters.searchTerm}
          onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

      {/* Région */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Région</h3>
        <select
          value={filters.region}
          onChange={(e) => setFilters({ ...filters, region: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
        >
          <option value="">Toutes les régions</option>
          {AVAILABLE_REGIONS.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Catégories */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Catégories</h3>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_CATEGORIES.map((cat) => {
            const active = filters.categories.includes(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  const newCats = active
                    ? filters.categories.filter((c) => c !== cat)
                    : [...filters.categories, cat];
                  setFilters({ ...filters, categories: newCats });
                }}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors 
                  ${active ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Fourchette de prix double */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Budget</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Min: {filters.minPrice}€</span>
            <input
              type="range"
              min="0"
              max={MAX_PRICE}
              step={PRICE_STEP}
              value={filters.minPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                const newMin = val <= filters.maxPrice ? val : filters.maxPrice;
                setFilters({ ...filters, minPrice: newMin });
              }}
              className="flex-1"
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Max: {filters.maxPrice}€</span>
            <input
              type="range"
              min="0"
              max={MAX_PRICE}
              step={PRICE_STEP}
              value={filters.maxPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                const newMax = val >= filters.minPrice ? val : filters.minPrice;
                setFilters({ ...filters, maxPrice: newMax });
              }}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* Bouton Réinitialiser */}
      <button
        type="button"
        onClick={handleReset}
        className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
      >
        Réinitialiser les filtres
      </button>
    </div>
  );
}
