// src/app/cookie-policy/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique de cookies - N-Tours Madagascar',
  description: 'Explications sur les cookies utilisés et comment gérer vos préférences.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 prose mt-20">
        <h1>Politique de cookies</h1>
        <p>Nous utilisons des cookies pour analyser le trafic du site et améliorer votre expérience.</p>
        <h2>Types de cookies</h2>
        <ul>
          <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site.</li>
          <li><strong>Cookies analytiques :</strong> statistiques d’utilisation (Google Analytics).</li>
        </ul>
        <h2>Gérer les cookies</h2>
        <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou effacer l’historique.</p>
      </main>
      <Footer />
    </>
  );
}
