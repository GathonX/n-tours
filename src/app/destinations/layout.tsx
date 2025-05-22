import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Destinations - N-Tours Madagascar',
  description: 'Découvrez nos destinations paradisiaques à Madagascar. Des plages de sable blanc aux forêts tropicales, trouvez votre prochaine aventure.',
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 