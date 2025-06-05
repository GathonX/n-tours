// src/app/mentions-legales/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mentions légales - N-Tours Madagascar',
  description: 'Informations légales et coordonnées de N-Tours Madagascar.',
};

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 prose mt-20">
        <h1>Mentions légales</h1>
        <p>Éditeur du site : N-Tours Madagascar</p>
        <p>Siège social : Nosy Be, Madagascar</p>
        <p>RCS : …</p>
        <p>Directeur de la publication : Jean Rakoto</p>
        <h2>Hébergement</h2>
        <p>Ce site est hébergé par VOTRE hébergeur.</p>
        <h2>Responsable technique</h2>
        <p>Paul Randria – paul@ntours.mg</p>
        {/* … */}
      </main>
      <Footer />
    </>
  );
}
