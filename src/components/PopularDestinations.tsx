import OptimizedImage from './OptimizedImage';
import Link from 'next/link';

const destinations = [
  {
    id: 1,
    name: 'Nosy Be',
    image: '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
    description: 'L\'île aux parfums, paradis tropical de Madagascar',
    price: 'À partir de 150€',
  },
  {
    id: 2,
    name: 'Nosy Komba',
    image: '/images/Nosy komba/komba1.jpg',
    description: 'L\'île aux lémuriens, une expérience unique',
    price: 'À partir de 120€',
  },
  {
    id: 3,
    name: 'Nosy Sakatia',
    image: '/images/Nosy sakatia/sakatia2.jpg',
    description: 'L\'île aux orchidées, un joyau préservé',
    price: 'À partir de 130€',
  },
  {
    id: 4,
    name: 'Lokobe',
    image: '/images/Lokobe/lokobe1.jpg',
    description: 'Réserve naturelle, biodiversité exceptionnelle',
    price: 'À partir de 100€',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Destinations Populaires
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Découvrez nos destinations les plus prisées et laissez-vous séduire par la beauté naturelle de Madagascar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <OptimizedImage
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {destination.name}
                </h3>
                <p className="text-text-secondary mb-4">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">
                    {destination.price}
                  </span>
                  <Link
                    href={`/destination/${destination.id}`}
                    className="text-secondary-dark hover:text-secondary transition-colors"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            Voir toutes les destinations
          </Link>
        </div>
      </div>
    </section>
  );
} 