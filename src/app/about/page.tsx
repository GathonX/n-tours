import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata = {
  title: 'À propos - N-Tours Madagascar',
  description: 'Découvrez l\'histoire et l\'équipe de N-Tours, votre partenaire de confiance pour explorer Madagascar.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[400px]">
          <OptimizedImage
            src="/images/Nosy komba/komba1.jpg"
            alt="L'équipe N-Tours"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Notre Histoire
              </h1>
              <p className="text-xl text-white/90">
                Votre partenaire de confiance pour découvrir Madagascar depuis 2020
              </p>
            </div>
          </div>
        </section>

        {/* Section Notre Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Notre Mission
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Chez N-Tours, notre mission est de vous faire découvrir les merveilles de Madagascar 
                tout en préservant son patrimoine naturel et culturel. Nous nous engageons à offrir 
                des expériences de voyage authentiques et responsables.
              </p>
            </div>
          </div>
        </section>

        {/* Section Nos Valeurs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Authenticité */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary text-center mb-4">
                  Authenticité
                </h3>
                <p className="text-text-secondary text-center">
                  Nous privilégions les expériences authentiques et les rencontres avec la population locale.
                </p>
              </div>

              {/* Responsabilité */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary text-center mb-4">
                  Responsabilité
                </h3>
                <p className="text-text-secondary text-center">
                  Nous nous engageons pour un tourisme durable et respectueux de l'environnement.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary text-center mb-4">
                  Excellence
                </h3>
                <p className="text-text-secondary text-center">
                  Nous visons l'excellence dans chaque aspect de nos services et de nos circuits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Équipe */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Notre Équipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Membre 1 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <OptimizedImage
                    src="/images/team/member1.jpg"
                    alt="Directeur"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Jean Rakoto
                </h3>
                <p className="text-primary mb-2">Directeur</p>
                <p className="text-text-secondary">
                  Plus de 15 ans d'expérience dans le tourisme à Madagascar
                </p>
              </div>

              {/* Membre 2 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <OptimizedImage
                    src="/images/team/member2.jpg"
                    alt="Responsable des circuits"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Marie Razafy
                </h3>
                <p className="text-primary mb-2">Responsable des circuits</p>
                <p className="text-text-secondary">
                  Experte en création d'itinéraires personnalisés
                </p>
              </div>

              {/* Membre 3 */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <OptimizedImage
                    src="/images/team/member3.jpg"
                    alt="Guide principal"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Paul Randria
                </h3>
                <p className="text-primary mb-2">Guide principal</p>
                <p className="text-text-secondary">
                  Guide certifié avec une passion pour la culture malgache
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 