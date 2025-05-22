import Link from 'next/link';
import OptimizedImage from '@/components/OptimizedImage';
import { Destination } from '@/types/destination';

interface DestinationGridProps {
  destinations: Destination[];
}

export default function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <Link
          href={`/destination/${destination.slug}`}
          key={destination.id}
          className="group"
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <OptimizedImage
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {destination.name}
              </h3>
              <p className="text-text-secondary mb-4 line-clamp-2">
                {destination.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-background rounded-full text-sm text-text-secondary"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-semibold">
                  À partir de {destination.price.from}€
                </span>
                <span className="text-sm text-text-secondary">
                  {destination.region}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 