This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# n-tours












Alors que chaque fichier possede des contenu et chaque contenu sont important pour mon projet ; 
Est cce que tu peux arranger tous ça pour que je ne perd pas mes donné , si tu veux encore les autres fichier dit moi , 

const destinations = [
  {
    id: 1,
    name: 'Nosy Be',
    image: '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
    gallery: [
      '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
      '/images/Tours d\'ile de nosy be/nosy-be2.jpg',
      '/images/Tours d\'ile de nosy be/nosy-be3.jpg',
    ],
    description: 'Surnommée "l\'île aux parfums", Nosy Be est un paradis tropical connu pour ses plages de sable blanc, ses eaux cristallines et ses plantations d\'ylang-ylang.',
    longDescription: 
      Nosy Be, véritable joyau de l'océan Indien, est une destination qui enchante les visiteurs par sa beauté naturelle et sa richesse culturelle. 
      
      Située au nord-ouest de Madagascar, cette île paradisiaque offre :
      - Des plages de sable blanc immaculées bordées de palmiers
      - Des eaux turquoise parfaites pour la plongée et le snorkeling
      - Des plantations d'ylang-ylang qui embaument l'air de leur parfum envoûtant
      - Une culture locale vibrante et accueillante
      
      L'île est également réputée pour sa biodiversité exceptionnelle, avec de nombreuses espèces endémiques à observer dans leur habitat naturel.
    ,
    highlights: ['Plages paradisiaques', 'Spots de plongée', 'Culture locale'],
    activities: [
      {
        name: 'Plongée sous-marine',
        description: 'Découvrez les fonds marins exceptionnels et leur biodiversité unique.',
        duration: '2-3 heures',
        price: 'À partir de 50€',
      },
      {
        name: 'Tour des plantations',
        description: 'Visitez les plantations d\'ylang-ylang et découvrez le processus de fabrication des huiles essentielles.',
        duration: '3 heures',
        price: 'À partir de 30€',
      },
      {
        name: 'Excursion en bateau',
        description: 'Explorez les îles voisines et profitez de moments de détente sur des plages désertes.',
        duration: 'Journée complète',
        price: 'À partir de 80€',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre',
      access: 'Vol direct vers l\'aéroport de Nosy Be ou bateau depuis Ankify',
      accommodation: 'Hôtels, lodges et bungalows disponibles pour tous les budgets',
      mustBring: ['Crème solaire', 'Anti-moustiques', 'Chapeau', 'Maillot de bain'],
    },
  },
  // ... Ajoutez les autres destinations de la même manière
];

