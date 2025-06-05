// src/app/about/page.tsx


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OptimizedImage from '@/components/OptimizedImage';

export const metadata = {
  title: 'À propos - N-Tours Madagascar',
  description: 'Découvrez l\'histoire, la mission et l\'équipe de N-Tours, votre partenaire de confiance pour explorer Madagascar de manière authentique et responsable.',
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <OptimizedImage
            src="/images/Ambanja/about.webp"
            alt="Paysage de Madagascar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Notre Histoire
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Fondée en 2020 à Hell-Ville, N‑Tours est née de la passion de ses fondateurs pour la culture,
              la faune et les traditions malgaches. Depuis plus de 1000 voyages racontés,
              nous vous invitons à découvrir Madagascar sous un nouvel angle, toujours
              respectueux de l’environnement et des communautés locales.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-background-alt">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Notre Mission
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Offrir des expériences de voyage authentiques, immersives et responsables,
                en valorisant les richesses naturelles et culturelles de Madagascar.
                Nous collaborons étroitement avec les acteurs locaux pour garantir
                un tourisme durable et équitable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Notre Vision
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Devenir le leader du tourisme éco-responsable à Madagascar,
                sensibiliser et impliquer chaque voyageur dans la préservation
                des écosystèmes et le développement des communautés Sakalava,
                Bara et Betsimisaraka.
              </p>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Authenticité */}
              <div className="bg-background p-8 rounded-xl shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Authenticité</h3>
                <p className="text-text-secondary">
                  Rencontres et échanges sincères avec les communautés malgaches,
                  pour des souvenirs vrais et durables.
                </p>
              </div>

              {/* Durabilité */}
              <div className="bg-background p-8 rounded-xl shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Durabilité</h3>
                <p className="text-text-secondary">
                  Pratiques éco-responsables à chaque étape du voyage,
                  pour minimiser notre empreinte écologique.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-background p-8 rounded-xl shadow hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary mb-2">Excellence</h3>
                <p className="text-text-secondary">
                  Qualité de service irréprochable et accompagnement personnalisé
                  pour une expérience sans compromis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe */}
        <section className="py-16 bg-background-alt">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
              Notre Équipe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Membre 1 */}
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <OptimizedImage
                    src="/images/team/jean.jpg"
                    alt="Jean Rakoto"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">Jean Rakoto</h3>
                <p className="text-primary mb-2">Fondateur & Directeur</p>
                <p className="text-text-secondary text-sm">
                  15 ans d’expérience dans le tourisme responsable à Madagascar.
                </p>
              </div>

              {/* Membre 2 */}
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <OptimizedImage
                    src="/images/team/marie.jpg"
                    alt="Marie Razafy"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">Marie Razafy</h3>
                <p className="text-primary mb-2">Responsable des circuits</p>
                <p className="text-text-secondary text-sm">
                  Experte en création d’itinéraires sur mesure et partenariats locaux.
                </p>
              </div>

              {/* Membre 3 */}
              <div className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <OptimizedImage
                    src="/images/team/paul.jpg"
                    alt="Paul Randria"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-1">Paul Randria</h3>
                <p className="text-primary mb-2">Guide principal</p>
                <p className="text-text-secondary text-sm">
                  Passionné de culture malgache et spécialiste de la faune endémique.
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
