import { useState } from 'react';

interface DestinationFiltersProps {
  regions: string[];
  categories: string[];
  onFilterChange: (filters: {
    region: string;
    categories: string[];
    priceRange: [number, number];
    searchTerm: string;
  }) => void;
}

export default function DestinationFilters({
  regions,
  categories,
  onFilterChange,
}: DestinationFiltersProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    onFilterChange({
      region,
      categories: selectedCategories,
      priceRange,
      searchTerm,
    });
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    onFilterChange({
      region: selectedRegion,
      categories: newCategories,
      priceRange,
      searchTerm,
    });
  };

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    onFilterChange({
      region: selectedRegion,
      categories: selectedCategories,
      priceRange: value,
      searchTerm,
    });
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onFilterChange({
      region: selectedRegion,
      categories: selectedCategories,
      priceRange,
      searchTerm: term,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Recherche */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher une destination..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Régions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Régions</h3>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedRegion}
          onChange={(e) => handleRegionChange(e.target.value)}
        >
          <option value="">Toutes les régions</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Catégories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Catégories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryToggle(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategories.includes(category)
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Fourchette de prix */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Budget</h3>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <span className="text-sm text-gray-600">
            Jusqu'à {priceRange[1]}€
          </span>
        </div>
      </div>
    </div>
  );
} 