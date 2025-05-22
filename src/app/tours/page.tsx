import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata = {
  title: 'Circuits - N-Tours Madagascar',
  description: 'Découvrez nos circuits touristiques à Madagascar. Des excursions d\'une journée aux circuits de plusieurs jours, trouvez le voyage qui vous correspond.',
};

const tours = [
  {
    id: 1,
    name: 'Tour des îles',
    duration: '3 jours',
    price: 'À partir de 350€',
    image: '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
    description: 'Un circuit complet pour découvrir les plus belles îles autour de Nosy Be.',
    includes: [
      'Transport en bateau',
      'Guide francophone',
      'Hébergement',
      'Repas',
      'Activités nautiques',
    ],
    destinations: ['Nosy Be', 'Nosy Komba', 'Nosy Sakatia'],
  },
  {
    id: 2,
    name: 'Aventure Lokobe',
    duration: '1 jour',
    price: 'À partir de 100€',
    image: '/images/Lokobe/lokobe1.jpg',
    description: 'Une journée immersive dans la réserve naturelle de Lokobe.',
    includes: [
      'Transport',
      'Guide naturaliste',
      'Déjeuner',
      'Randonnée guidée',
      'Observation de la faune',
    ],
    destinations: ['Lokobe'],
  },
  {
    id: 3,
    name: 'Paradis Marin',
    duration: '2 jours',
    price: 'À partir de 250€',
    image: '/images/Nosy iranja/iranja1.jpg',
    description: 'Découverte des plus beaux spots de plongée et de snorkeling.',
    includes: [
      'Transport en bateau',
      'Équipement de plongée',
      'Guide certifié',
      'Hébergement',
      'Repas',
    ],
    destinations: ['Nosy Iranja', 'Nosy Mitsio'],
  },
  {
    id: 4,
    name: 'Culture et Traditions',
    duration: '4 jours',
    price: 'À partir de 450€',
    image: '/images/Nosy komba/komba1.jpg',
    description: 'Immersion dans la culture malgache et rencontre avec les habitants.',
    includes: [
      'Transport',
      'Guide culturel',
      'Hébergement',
      'Repas',
      'Activités culturelles',
    ],
    destinations: ['Nosy Be', 'Nosy Komba', 'Villages traditionnels'],
  },
];

export default function ToursPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px]">
          <OptimizedImage
            src="/images/Lokobe/lokobe1.jpg"
            alt="Circuits touristiques à Madagascar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Nos Circuits
              </h1>
              <p className="text-xl text-white/90">
                Des expériences uniques pour découvrir Madagascar autrement
              </p>
            </div>
          </div>
        </section>

        {/* Liste des circuits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <OptimizedImage
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-text-primary">
                          {tour.name}
                        </h2>
                        <div className="text-right">
                          <span className="block text-primary font-medium">
                            {tour.price}
                          </span>
                          <span className="text-text-secondary text-sm">
                            {tour.duration}
                          </span>
                        </div>
                      </div>
                      <p className="text-text-secondary mb-4">
                        {tour.description}
                      </p>
                      <div className="mb-4">
                        <h3 className="font-semibold text-text-primary mb-2">
                          Inclus :
                        </h3>
                        <ul className="grid grid-cols-2 gap-2">
                          {tour.includes.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center text-text-secondary text-sm"
                            >
                              <svg
                                className="w-4 h-4 text-primary mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-text-primary mb-2">
                            Destinations :
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {tour.destinations.map((destination, index) => (
                              <span
                                key={index}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                              >
                                {destination}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={`/tour/${tour.id}`}
                          className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2 rounded-full transition-colors"
                        >
                          Réserver
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Comment réserver un circuit ?
                </h3>
                <p className="text-text-secondary">
                  Vous pouvez réserver directement en ligne en cliquant sur le bouton "Réserver" 
                  du circuit qui vous intéresse, ou nous contacter par téléphone ou email pour 
                  une réservation personnalisée.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Les circuits sont-ils adaptables ?
                </h3>
                <p className="text-text-secondary">
                  Oui, tous nos circuits peuvent être personnalisés selon vos préférences et 
                  la durée de votre séjour. Contactez-nous pour créer votre circuit sur mesure.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Que dois-je emporter ?
                </h3>
                <p className="text-text-secondary">
                  Une liste détaillée vous sera fournie lors de la réservation. En général, 
                  prévoyez des vêtements légers, de la crème solaire, un chapeau et des 
                  chaussures confortables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Besoin d'un circuit personnalisé ?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour créer le voyage de vos rêves
            </p>
            <a
              href="/contact"
              className="inline-block bg-white hover:bg-gray-100 text-primary font-medium px-8 py-3 rounded-full transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 