// src/app/conditions-generales/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Conditions générales de vente - N-Tours Madagascar',
  description: 'Conditions générales de vente des prestations N-Tours Madagascar.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16 prose mt-20">
        <h1>Conditions générales de vente</h1>
        <h2>1. Objet</h2>
        <p>Les présentes conditions régissent la vente en ligne des circuits et services de N-Tours Madagascar.</p>
        <h2>2. Tarifs et paiement</h2>
        <p>Nos tarifs sont indiqués TTC. Le paiement s’effectue en ligne ou par virement bancaire.</p>
        <h2>3. Annulation et remboursement</h2>
        <p>Conditions selon le type de prestation : consultez vos documents de voyage ou contactez-nous.</p>
        <h2>4. Responsabilité</h2>
        <p>N-Tours Madagascar ne peut être tenu responsable des événements indépendants de sa volonté (météo, grèves, etc.).</p>
        <h2>5. Litiges</h2>
        <p>En cas de litige, la loi malgache s’applique. Vous pouvez recourir au médiateur du tourisme.</p>
      </main>
      <Footer />
    </>
  );
}
