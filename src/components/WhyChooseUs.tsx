import Image from 'next/image';

const features = [
  {
    id: 1,
    icon: '/icons/experience.svg',
    title: 'Expérience Locale',
    description: 'Notre équipe locale vous fait découvrir les trésors cachés de Madagascar.',
  },
  {
    id: 2,
    icon: '/icons/quality.svg',
    title: 'Qualité Premium',
    description: 'Des services haut de gamme et un confort optimal pendant votre séjour.',
  },
  {
    id: 3,
    icon: '/icons/price.svg',
    title: 'Prix Compétitifs',
    description: 'Les meilleurs tarifs pour des expériences inoubliables.',
  },
  {
    id: 4,
    icon: '/icons/support.svg',
    title: 'Support 24/7',
    description: 'Une équipe disponible à tout moment pour vous accompagner.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Pourquoi Nous Choisir
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Découvrez ce qui fait de N-Tours votre meilleur choix pour explorer Madagascar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full" />
                <div className="absolute inset-3">
                  <svg
                    className="w-full h-full text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Icône par défaut si l'image n'est pas disponible */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 