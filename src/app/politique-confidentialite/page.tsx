// src/app/privacy-policy/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique de confidentialité - N-Tours Madagascar',
  description: 'Gestion de vos données personnelles selon la RGPD et la loi Informatique et Libertés.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 mt-20 py-16 prose">
        <h1>Politique de confidentialité</h1>
        <p>Chez N-Tours Madagascar, nous attachons une grande importance à la protection de vos données personnelles.</p>
        <h2>1. Données collectées</h2>
        <p>Nous collectons votre nom, email et téléphone lors de la prise de contact.</p>
        <h2>2. Finalités</h2>
        <p>Vos données servent uniquement à traiter votre demande de réservation.</p>
        <h2>3. Durée de conservation</h2>
        <p>Nous conservons vos données pendant 3 ans, puis elles sont supprimées.</p>
        <h2>4. Vos droits</h2>
        <p>Droit d’accès, rectification, suppression : contactez-nous à contact@n-tours.mg.</p>
        <h2>5. Cookies</h2>
        <p>Notre site utilise des cookies pour améliorer votre expérience (voir Politique de cookies).</p>
      </main>
      <Footer />
    </>
  );
}
