// import { Destination } from '@/types/destination';

// export const destinations: Destination[] = [
//  // src/data/destinations.ts (extrait de l'objet id:1)
// {
//   id: 1,
//   name: 'Nosy Be',
//   slug: 'nosy-be',
//   image: '/images/Tours-ile-de-nosy-be/Andilana/a1.webp',
//   gallery: [
//     '/images/Tours-ile-de-nosy-be/Andilana/a1.webp',
//     '/images/Tours-ile-de-nosy-be/mont-passot/mp1.jpg',
//     '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar1.jpg',
//   ],
//   description: "L'île aux parfums : Nosy Be vous invite à un voyage sensoriel entre plages idylliques, forêts d'ylang-ylang et aventures marines.",
//   longDescription: `Nosy Be, joyau de l'océan Indien, est bien plus qu'une île paradisiaque : c'est une destination complète pour tous les voyageurs.

// - Plages de sable blanc à Andilana et Madirokely, idéales pour la baignade et le farniente
// - Spots de snorkeling et plongée sous-marine à Nosy Tanikely et Nosy Sakatia
// - Excursions en bateau à la rencontre des dauphins et, selon la saison, des baleines à bosse
// - Visite des plantations d'ylang-ylang avec dégustation d'huiles essentielles
// - Couchers de soleil inoubliables depuis le sommet du Mont Passot
// - Vie nocturne animée à Hell‑Ville, avec marchés locaux et restaurants de fruits de mer`,
//   highlights: [
//     'Snorkeling & plongée',
//     'Dauphins & baleines',
//     'Ylang-ylang centenaire',
//     'Coucher de soleil au Mont Passot',
//   ],
//   activities: [
//     {
//       name: 'Journée snorkeling à Nosy Tanikely',
//       description: 'Paradis sous-marin protégé, coraux multicolores et tortues marines.',
//       duration: 'Journée complète',
//       price: 'À partir de 60 €',
//     },
//     {
//       name: 'Safari dauphins au lever du soleil',
//       description: "Observation des dauphins dans le canal du Mozambique à bord d'un pirogue.",
//       duration: '3 heures',
//       price: 'À partir de 40 €',
//     },
//     {
//       name: "Visite d'une plantation d’ylang-ylang",
//       description: "Découverte du processus de distillation et dégustation d'huile essentielle.",
//       duration: '2 heures',
//       price: 'À partir de 25 €',
//     },
//     {
//       name: 'Randonnée au Mont Passot',
//       description: 'Accédez au meilleur point de vue pour un coucher de soleil magique.',
//       duration: 'Demi-journée',
//       price: 'Gratuit',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Avril à Novembre (visitez tôt le matin ou en fin d’après-midi)',
//     access: 'Vol direct vers l’aéroport de Nosy Be ; transferts disponibles en bateau ou taxi-brousse',
//     accommodation: 'Hôtels de charme, lodges de luxe et bungalows en bord de mer',
//     mustBring: ['Crème solaire haute protection', 'Masque/tuba', 'Chapeau', 'Appareil photo'],
//   },
//   region: 'Nord-Ouest',
//   category: ['Plages', 'Aventure', 'Bien-être'],
//   price: {
//     from: 25,
//     currency: 'EUR',
//   },
// },

  
//   {
//   id: 2,
//   name: 'Lemuria Land ',
//   slug: 'lemurialand',
//   image: '/images/Tours-ile-de-nosy-be/lemuria-land/l5.jpg',
//   gallery: [
//     '/images/Tours-ile-de-nosy-be/lemuria-land/l2.png',
//     '/images/Tours-ile-de-nosy-be/lemuria-land/l3.png',
//     '/images/Tours-ile-de-nosy-be/lemuria-land/l4.png',
//   ],
//   description: 'Sanctuaire de biodiversité tropicale au cœur d’une plantation centenaire d’ylang-ylang, accueillant lémuriens, reptiles et plantes endémiques.',
//   longDescription: `Lemuria Land est un parc privé situé dans une ancienne plantation d’ylang-ylang à Nosy Be. Véritable sanctuaire de la faune et de la flore malgaches, il offre :
// - Plus de 100 ans de vergers d’ylang-ylang pour la production d’huiles essentielles
// - Une grande variété de lémuriens en liberté (lémur catta, vari, saki…)
// - Caméléons, tortues et crocodiles juvéniles dans un vivarium naturel
// - Un jardin d’insectes et de papillons pour les passionnés de micro-faune

// Chaque billet contribue à la conservation des espèces menacées, avec des nourrissages interactifs pour une expérience immersive.`,
//   highlights: ['Ylang-ylang centenaire', 'Lémuriens libres', 'Reptiles & papillons'],
//   activities: [
//     {
//       name: 'Rencontre avec les lémuriens',
//       description: 'Alimentez et observez différentes espèces de lémuriens à la main.',
//       duration: '2 heures',
//       price: 'À partir de 15 €',
//     },
//     {
//       name: 'Visite de la distillerie',
//       description: 'Démonstration de la distillation de l’ylang-ylang et dégustation de produits artisanaux.',
//       duration: '1 heure',
//       price: 'À partir de 10 €',
//     },
//     {
//       name: 'Circuit des reptiles',
//       description: 'Observation guidée des caméléons, tortues et crocodiles du parc.',
//       duration: '1 heure',
//       price: 'À partir de 12 €',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Toute l’année (matin & fin d’après-midi conseillés)',
//     access: '15 min en voiture depuis Hell-Ville',
//     accommodation: 'Lodges à proximité de la plantation',
//     mustBring: ['Appareil photo', 'Chapeau', 'Eau', 'Chaussures fermées'],
//   },
//   region: 'Sud de Nosy Be',
//   category: ['Nature', 'Faune', 'Culture'],
//   price: {
//     from: 15,
//     currency: 'EUR',
//   },
// },

 
//   {
//     id: 3,
//     name: 'Mont Passot',
//     slug: 'mont-passot',
//     image: '/images/Tours-ile-de-nosy-be/mont-passot/mp2.png', // ajustez selon le dossier
//     gallery: [
//       '/images/Tours-ile-de-nosy-be/mont-passot/mp1.jpg',
//       '/images/Tours-ile-de-nosy-be/mont-passot/mp3.jpg',
//       '/images/Tours-ile-de-nosy-be/mont-passot/mp4.jpg',
//     ],
//     description: 'Point culminant de Nosy Be offrant un panorama à 360° sur l’île, les lacs de cratère et le canal du Mozambique.',
//     longDescription: `Mont Passot, véritable colline volcanique de 326 mètres, est le point le plus élevé de Nosy Be. Son sommet offre une vue imprenable sur huit lacs de cratère et sur la mer d'Andavakona, ainsi que sur le canal du Mozambique. Facilement accessible en voiture jusqu'au parking, une courte marche de 5 minutes mène à plusieurs plateformes panoramiques idéales pour observer le lever et le coucher du soleil.`,
//     highlights: ['Vue panoramique', 'Lacs de cratère', 'Couchers de soleil'],
//     activities: [
//       {
//         name: 'Observation du coucher de soleil',
//         description: 'Admirez le soleil se coucher sur l’horizon depuis la plateforme principale.',
//         duration: 'Demi-journée',
//         price: 'Gratuit',
//       },
//       {
//         name: 'Randonnée facile',
//         description: 'Balade de 5 minutes depuis le parking jusqu’au sommet.',
//         duration: '5-10 minutes',
//         price: 'Gratuit',
//       },
//       {
//         name: 'Visite guidée des lacs',
//         description: 'Découverte commentée des huit lacs de cratère avec un guide local.',
//         duration: '1 heure',
//         price: 'À partir de 15€',
//       },
//     ],
//     practicalInfo: {
//       bestPeriod: 'Avril à Décembre',
//       access: 'Route accessible en voiture jusqu’au parking, puis 5 min de marche',
//       accommodation: 'Lodges et bungalows disponibles à proximité',
//       mustBring: ['Veste légère', 'Chapeau', 'Appareil photo', 'Eau'],
//     },
//     region: 'Nord',
//     category: ['Panorama', 'Nature', 'Randonnée'],
//     price: {
//       from: 0,
//       currency: 'EUR',
//     },
//   },

//  {
//   id: 4,
//   name: 'Arbre sacré de Mahatsinjo',
//   slug: 'arbre-sacre-mahatsinjo',
//   image:  '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar3.jpg',        // remplacez par le chemin réel
//   gallery: [
//     '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar2.jpg',
//    '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar1.jpg',
//     '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar4.jpg',
//   ],
//   description: 'Ficus religiosa sacré planté en l’honneur de la reine Tsiomeko, véritable sanctuaire spirituel de Nosy Be.',
//   longDescription: `L’Arbre sacré de Mahatsinjo est un figuier sacré (Ficus religiosa) établi en hommage à la reine Tsiomeko. 
  
//   Ses racines aériennes forment un labyrinthe mystique autour d’un tronc unique, couvrant près de 5 000 m². Autour, hommes et femmes viennent déposer des offrandes (fleurs, tissus, offrandes liquides) pour solliciter protection, fertilité et prospérité. 
   
//   Accessible en quelques minutes depuis Hell-Ville, ce lieu de prière ancestral offre un moment de recueillement hors du temps, au cœur d’une petite forêt sacrée où résonnent chants d’oiseaux et murmures du vent.`,
//   highlights: ['Lieu de culte ancestral', 'Racines aériennes', 'Recueillement'],
//   activities: [
//     {
//       name: 'Visite guidée culturelle',
//       description: 'Découvrez les rituels et l’histoire sacrée du site en compagnie d’un guide local.',
//       duration: '1 heure',
//       price: 'À partir de 10 €',
//     },
//     {
//       name: 'Recueillement au pied de l’arbre',
//       description: 'Offrandes et prières libres dans une atmosphère paisible et spirituelle.',
//       duration: 'Libre',
//       price: 'Gratuit',
//     },
//     {
//       name: 'Photographie spirituelle',
//       description: 'Immortalisez le lieu et ses racines emblématiques, idéal au lever ou coucher du soleil.',
//       duration: '30 minutes',
//       price: 'À partir de 5 €',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Toute l’année, évitez la mi-journée pour la chaleur',
//     access: '10 min en voiture depuis Hell-Ville, puis balade de 5 min',
//     accommodation: 'Lodges et hôtels à proximité',
//     mustBring: ['Fleurs ou tissu pour offrandes', 'Appareil photo', 'Chapeau', 'Eau'],
//   },
//   region: 'Nord',
//   category: ['Culture', 'Spiritualité', 'Nature'],
//   price: {
//     from: 0,
//     currency: 'EUR',
//   },
// },

// {
//   id: 5,
//   name: 'Ambanja',
//   slug: 'ambanja',
//   image: '/images/Ambanja/a1.jpg',
//   gallery: [
//     '/images/Ambanja/a2.jpg',
//     '/images/Ambanja/a3.png',
//     '/images/Ambanja/a4.webp',
//   ],
//   description: 'Ville historique de la vallée du Sambirano, réputée pour ses plantations de cacao et ses paysages fluviaux luxuriants.',
//   longDescription: `Ambanja est située au nord de Madagascar, sur la rive du fleuve Sambirano. Capitale du district du même nom, elle est célèbre pour ses plantations de cacao et de café qui profitent du microclimat unique de la vallée. À proximité, on peut découvrir :
// - Les impressionnantes chutes de Mahamanina (14 km au sud)  
// - La réserve de Manongarivo (35 km) et sa forêt primaire riche en biodiversité  
// - Le marché traditionnel « Bazary Be », cœur commerçant de la ville  
// Facilement accessible par la RN6, Ambanja offre un savant mélange de culture sakalava, de traditions agricoles et de nature luxuriante.`,
//   highlights: ['Plantations de cacao & café', 'Chutes de Mahamanina', 'Réserve de Manongarivo', 'Marché Bazary Be'],
//   activities: [
//     {
//       name: 'Visite de plantation de cacao',
//       description: 'Découvrez le parcours du cacao, du cabossage à la dégustation, dans une plantation familiale.',
//       duration: '2–3 heures',
//       price: 'À partir de 10 €',
//     },
//     {
//       name: 'Excursion aux chutes de Mahamanina',
//       description: 'Trek jusqu’aux cascades rafraîchissantes et bains naturels.',
//       duration: 'Journée complète',
//       price: 'À partir de 20 €',
//     },
//     {
//       name: 'Randonnée en réserve de Manongarivo',
//       description: 'Immersion dans la forêt primaire à la rencontre des lémuriens et oiseaux endémiques.',
//       duration: 'Demi-journée',
//       price: 'À partir de 30 €',
//     },
//     {
//       name: 'Découverte du marché Bazary Be',
//       description: 'Balade matinale parmi les étals de fruits tropicaux, épices et artisanat local.',
//       duration: '1–2 heures',
//       price: 'Gratuit',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Mai à Octobre (saison sèche)',
//     access: 'RN6 depuis Diego-Suarez (237 km) ou Nosy Be via Ankify puis route',
//     accommodation: 'Hôtels, lodges et guesthouses à Ambanja',
//     mustBring: ['Chapeau', 'Crème solaire', 'Répulsif anti-moustiques', 'Vêtements légers & imperméable léger'],
//   },
//   region: 'Nord',
//   category: ['Nature', 'Culture', 'Gastronomie'],
//   price: {
//     from: 0,
//     currency: 'EUR',
//   },
// },

// {
//   id: 6,
//   name: 'Réserve Naturelle de Lokobe',
//   slug: 'lokobe',
//   image: '/images/Lokobe/l1.jpg',
//   gallery: [
//     '/images/Lokobe/l1.jpg',
//     '/images/Lokobe/l2.jpg',
//     '/images/Lokobe/l3.jpg',
//     '/images/Lokobe/l4.jpg',
//   ],
//   description: 'Dernière forêt primaire de Nosy Be abritant une faune et une flore endémiques exceptionnelles.',
//   longDescription: `La Réserve Naturelle de Lokobe couvre les ultimes étendues de forêt tropicale primaire de l'île de Nosy Be. Accessible uniquement en pirogue traditionnelle depuis Ankify, elle offre :
// - Une biodiversité riche : plusieurs espèces de lémuriens (Microcèbe à ventre roux, Vari noir)
// - Une végétation dense et intacte (palmiers royaux, orchidées sauvages, fougères géantes)
// - Des sentiers de randonnée ombragés longeant la mangrove
// - Un authenticité culturelle avec les communautés locales Sakalava`,
//   highlights: ['Lémuriens endémiques', 'Forêt primaire', 'Mangrove', 'Orchidées sauvages'],
//   activities: [
//     {
//       name: 'Randonnée guidée',
//       description: 'Parcourez la forêt à la recherche des lémuriens et des oiseaux rares.',
//       duration: '2-3 heures',
//       price: 'À partir de 25 €',
//     },
//     {
//       name: 'Balade en pirogue',
//       description: 'Explorez la mangrove et observez la faune aquatique et les oiseaux.',
//       duration: '1 heure',
//       price: 'À partir de 15 €',
//     },
//     {
//       name: 'Visite nocturne',
//       description: 'Découvrez la vie nocturne de la réserve avec un guide spécialisé.',
//       duration: '2 heures',
//       price: 'À partir de 30 €',
//     },
//     {
//       name: 'Immersion culturelle',
//       description: 'Rencontrez une famille Sakalava et découvrez leurs traditions.',
//       duration: '1-2 heures',
//       price: 'À partir de 20 €',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Avril à Novembre (saison sèche)',
//     access: 'Pirogue depuis Ambondrona (10 min de traversée)',
//     accommodation: 'Écolodges et bungalows à proximité de la réserve',
//     mustBring: ['Chaussures de randonnée', 'Anti-moustiques', 'Appareil photo', 'Chapeau'],
//   },
//   region: 'Nord',
//   category: ['Nature', 'Faune', 'Aventure', 'Culture'],
//   price: {
//     from: 15,
//     currency: 'EUR',
//   },
// },

// {
//   id: 7,
//   name: 'Nosy Fanihy',
//   slug: 'nosy-fanihy',
//   image: '/images/nosy-fanihy/nf1.jpg',
//   gallery: [
//     '/images/nosy-fanihy/nf1.jpg',
//     '/images/nosy-fanihy/nf2.jpg',
//     '/images/nosy-fanihy/nf3.jpg',
//     '/images/nosy-fanihy/nf4.jpeg',
//   ],
//   description: 'Petite île privée au large de Nosy Be, célèbre pour son sable fin, ses lagons turquoise et sa tranquillité.',
//   longDescription: `Nosy Fanihy, ou « Île aux Tortues », est un écrin de sérénité situé à quelques minutes en bateau de Nosy Be. 
// - Plages de sable blanc bordées de filaos  
// - Lagons peu profonds, idéaux pour le snorkeling  
// - Faune marine : tortues, poissons tropicaux, raies  
// - Atmosphère intimiste avec très peu de visiteurs en haute saison  

// Accessible en excursion à la journée, l’île offre un cadre parfait pour une pause farniente, une balade slow life et la découverte d’un récif corallien protégé.`,
//   highlights: ['Plages désertes', 'Observation des tortues', 'Snorkeling dans le lagon', 'Calme absolu'],
//   activities: [
//     {
//       name: 'Snorkeling guidé',
//       description: 'Explorez les récifs coralliens et observez tortues et poissons multicolores.',
//       duration: '2–3 heures',
//       price: 'À partir de 40 €',
//     },
//     {
//       name: 'Balade sur l’île',
//       description: 'Découverte à pied de la petite mangrove et des points de vue panoramiques.',
//       duration: '1 heure',
//       price: 'Gratuit',
//     },
//     {
//       name: 'Pique-nique plage',
//       description: 'Repas traditionnel malgache préparé sur place, servi au bord du lagon.',
//       duration: '1–2 heures',
//       price: 'À partir de 25 €',
//     },
//     {
//       name: 'Observation du coucher de soleil',
//       description: 'Un moment magique avec vue sur le canal du Mozambique.',
//       duration: '30 minutes',
//       price: 'Gratuit',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Avril à Novembre (saison sèche)',
//     access: '15 min en bateau depuis Hell-Ville ou Andilana',
//     accommodation: 'Excursion à la journée uniquement, pas d’hébergement sur place',
//     mustBring: ['Chapeau', 'Crème solaire', 'Maillot de bain', 'Appareil photo', 'Serviette'],
//   },
//   region: 'Nord',
//   category: ['Plage', 'Nature', 'Snorkeling'],
//   price: {
//     from: 40,
//     currency: 'EUR',
//   },
// },

//  {
//     id:8,
//     name: 'Nosy Mitsio',
//     slug: 'nosy-mitsio',
//     image: '/images/nosy-mitsio/nm1.jpg',
//     gallery: [
//       '/images/nosy-mitsio/nm1.jpg',
//       '/images/nosy-mitsio/nm2.jpg',
//       '/images/nosy-mitsio/nm3.jpg',
//       '/images/nosy-mitsio/nm4.jpg',
//     ],
//     description: 'Archipel sauvage composé d’une vingtaine d’îlots isolés, réputé pour ses fonds marins exceptionnels.',
//     longDescription: `Les îles Mitsio, situées au nord-ouest de Nosy Be, offrent :
// - Des récifs coralliens vierges et des épaves sous-marines  
// - Une faune marine riche (poissons multicolores, tortues, raies)  
// - Des plages désertes et des lagons cristallins  
// - Un cadre totalement préservé, accessible uniquement en bateau privé`,
//     highlights: ['Plongée & snorkeling', 'Îles désertes', 'Épaves sous-marines', 'Biodiversité'],
//     activities: [
//       {
//         name: 'Plongée bouteille',
//         description: 'Exploration de tombants coralliens et épaves.',
//         duration: '3 heures',
//         price: 'À partir de 80 €',
//       },
//       {
//         name: 'Snorkeling guidé',
//         description: 'Parcours des lagons à la rencontre des tortues.',
//         duration: '2 heures',
//         price: 'À partir de 50 €',
//       },
//       {
//         name: 'Trek d’île en île',
//         description: 'Balade à la découverte des criques et points de vue.',
//         duration: 'Journée complète',
//         price: 'À partir de 100 €',
//       },
//       {
//         name: 'Pique-nique plage',
//         description: 'Repas traditionnel servi sur une plage isolée.',
//         duration: '1–2 heures',
//         price: 'À partir de 30 €',
//       },
//     ],
//     practicalInfo: {
//       bestPeriod: 'Avril à Novembre',
//       access: 'Bateau privatif depuis Hell-Ville (2h)',
//       accommodation: 'Aucun hébergement, excursion à la journée',
//       mustBring: ['Maillot de bain','Crème solaire','Serviette','Appareil photo'],
//     },
//     region: 'Nord',
//     category: ['Plage','Snorkeling','Aventure'],
//     price: {
//       from: 50,
//       currency: 'EUR',
//     },
//   },

//   {
//     id: 9,
//     name: 'Nosy Sakatia',
//     slug: 'nosy-sakatia',
//     image: '/images/Nosy-sakatia/sk1.jpg',
//     gallery: [
//       '/images/Nosy-sakatia/sk1.jpg',
//       '/images/Nosy-sakatia/sk2.webp',
//       '/images/Nosy-sakatia/sk3.jpg',
//       '/images/Nosy-sakatia/sk4.jpg',
//       '/images/Nosy-sakatia/sk4.jpg',
//       '/images/Nosy-sakatia/sk4.jpg',
//       '/images/Nosy-sakatia/sk4.jpg',
//     ],
//     description: 'Île-jardin réputée pour sa forêt, ses plages intimes et son sanctuaire de tortues.',
//     longDescription: `À seulement 15 min de bateau de Nosy Be, Nosy Sakatia – l’« île aux orchidées » – propose :
// - Une forêt primaire et un sentier botanique  
// - Des tortues marines protégées dans une baie abritée  
// - Des criques discrètes pour nager et plonger  
// - Un village de pêcheurs accueillant`,
//     highlights: ['Forêt & orchidées','Tortues marines','Plages intimes','Snorkeling'],
//     activities: [
//       {
//         name: 'Randonnée botanique',
//         description: 'Sentier guidé à travers la forêt d’orchidées.',
//         duration: '2 heures',
//         price: 'À partir de 20 €',
//       },
//       {
//         name: 'Baptême de plongée',
//         description: 'Première rencontre avec les fonds coralliens.',
//         duration: '1h30',
//         price: 'À partir de 60 €',
//       },
//       {
//         name: 'Rencontre tortues',
//         description: 'Observation des tortues dans leur nurserie naturelle.',
//         duration: '1 heure',
//         price: 'À partir de 30 €',
//       },
//       {
//         name: 'Kayak de mer',
//         description: 'Exploration des baies en kayak transparent.',
//         duration: '2 heures',
//         price: 'À partir de 40 €',
//       },
//     ],
//     practicalInfo: {
//       bestPeriod: 'Mai à Octobre',
//       access: '15 min en bateau depuis Hell-Ville',
//       accommodation: 'Bungalows et ecolodges sur l’île',
//       mustBring: ['Chaussures d’eau','Crème solaire','Chapeau','Appareil photo'],
//     },
//     region: 'Nord',
//     category: ['Nature','Faune','Snorkeling'],
//     price: {
//       from: 30,
//       currency: 'EUR',
//     },
//   },

//   {
//     id: 10,
//     name: 'Nosy Tanikely',
//     slug: 'nosy-tanikely',
//     image: '/images/Tanikely/nt1.jpg',
//     gallery: [
//       '/images/Tanikely/nt1.jpg',
//       '/images/Tanikely/nt2.jpg',
//       '/images/Tanikely/nt3.jpg',
//       '/images/Tanikely/nt4.jpg',
//       '/images/Tanikely/nt5.jpg',
//     ],
//     description: 'Réserve marine protégée, célèbre pour ses sentiers sous-marins et son phare pittoresque.',
//     longDescription: `Classée réserve marine, Nosy Tanikely est un sanctuaire pour :
// - Les tortues et poissons tropicaux  
// - Les tombants coralliens accessibles en masque-tuba  
// - Le phare historique offrant une vue 360°  
// - Des sentiers pédestres en bord de falaise`,
//     highlights: ['Réserve marine','Snorkeling','Phare historique','Tortues'],
//     activities: [
//       {
//         name: 'Snorkeling libre',
//         description: 'Masque et tuba autour du récif protégé.',
//         duration: 'Libre',
//         price: 'Gratuit',
//       },
//       {
//         name: 'Balade au phare',
//         description: 'Randonnée courte jusqu’au sommet du phare.',
//         duration: '30 minutes',
//         price: 'Gratuit',
//       },
//       {
//         name: 'Observation tortues',
//         description: 'Rencontre de tortues marines dans la baie.',
//         duration: '1 heure',
//         price: 'Gratuit',
//       },
//       {
//         name: 'Kayak transparent',
//         description: 'Exploration des fonds sans se mouiller.',
//         duration: '1–2 heures',
//         price: 'À partir de 35 €',
//       },
//     ],
//     practicalInfo: {
//       bestPeriod: 'Avril à Novembre',
//       access: 'Bateau depuis Hell-Ville (30 min)',
//       accommodation: 'Excursion à la journée seulement',
//       mustBring: ['Maillot de bain','Crème solaire','Serviette','Masque-tuba'],
//     },
//     region: 'Nord',
//     category: ['Plage','Snorkeling','Nature'],
//     price: {
//       from: 0,
//       currency: 'EUR',
//     },
//   },

  

//   {
//   id: 10,
//   name: 'Marodoka',
//   slug: 'marodoka',
//   image: '/images/Marodoka/m1.jpg',
//   gallery: [
//     '/images/Marodoka/m1.jpg',
//     '/images/Marodoka/m2.jpg',
//     '/images/Marodoka/m3.jpg',
//     '/images/Marodoka/m4.jpg',
//   ],
//   description: 'Le plus ancien village de Nosy Be, fondé au XIXᵉ siècle par des marchands arabes, cœur historique et culturel de l’île.',
//   longDescription: `Marodoka (appelé aussi Andoany ou Hell-Ville) est le village originel de Nosy Be, établi par des commerçants arabes. Vous y découvrirez :
// - Des vestiges coloniaux et des maisons traditionnelles  
// - Une mosquée historique et son cimetière musulman  
// - Le marché local, animé chaque matin  
// - Des spectacles et danses traditionnelles organisés par l’association des femmes du village  
// C’est le lieu idéal pour plonger dans l’histoire et les traditions Sakalava de Nosy Be.`,
//   highlights: ['Patrimoine historique', 'Marché traditionnel', 'Architecture arabe', 'Culture locale'],
//   activities: [
//     {
//       name: 'Visite guidée historique',
//       description: 'Balade commentée autour des ruines coloniales et de la mosquée.',
//       duration: '1 heure',
//       price: 'À partir de 15 €',
//     },
//     {
//       name: 'Spectacle culturel',
//       description: 'Danse et chants traditionnels par l’association des femmes.',
//       duration: '1 heure',
//       price: 'À partir de 10 €',
//     },
//     {
//       name: 'Découverte du marché',
//       description: 'Dégustation de produits locaux et artisanat sakalava.',
//       duration: '1–2 heures',
//       price: 'Libre',
//     },
//     {
//       name: 'Visite de la mosquée',
//       description: 'Découverte de l’architecture et de l’histoire de la mosquée ancestrale.',
//       duration: '30 minutes',
//       price: 'Gratuit',
//     },
//   ],
//   practicalInfo: {
//     bestPeriod: 'Toute l’année (matins recommandés pour le marché)',
//     access: '5 min à pied depuis le port de Hell-Ville',
//     accommodation: 'Hôtels et guesthouses à Hell-Ville',
//     mustBring: ['Chapeau', 'Appareil photo', 'Respect des traditions'],
//   },
//   region: 'Nord',
//   category: ['Histoire', 'Culture', 'Découverte'],
//   price: {
//     from: 0,
//     currency: 'EUR',
//   },
// }




// ]; 


















// src/data/destinations.ts
import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Nosy Be',
    slug: 'nosy-be',
    image: '/images/Tours-ile-de-nosy-be/Andilana/a1.webp',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Andilana/a1.webp',
      '/images/Tours-ile-de-nosy-be/mont-passot/mp1.jpg',
      '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar1.jpg',
    ],
    description:
      "L'île aux parfums : Nosy Be vous invite à un voyage sensoriel entre plages idylliques, forêts d'ylang-ylang et aventures marines.",
    longDescription: `Nosy Be, joyau de l'océan Indien, est un lieu complet pour tous les voyageurs.

- Plages de sable blanc à Andilana et Madirokely  
- Spots de snorkeling et plongée sous-marine à Nosy Tanikely et Nosy Sakatia  
- Excursions dauphins et, selon saison, observation des baleines à bosse  
- Visite des plantations d'ylang-ylang et dégustation d'huiles essentielles  
- Coucher de soleil depuis le sommet du Mont Passot  
- Vie nocturne animée à Hell-Ville, marchés et restaurants de fruits de mer`,
    highlights: [
      'Snorkeling & plongée',
      'Dauphins & baleines',
      'Ylang-ylang centenaire',
      'Coucher de soleil au Mont Passot',
    ],
    activities: [
      {
        name: 'Journée snorkeling à Nosy Tanikely',
        description: 'Coraux multicolores et tortues marines.',
        duration: 'Journée complète',
        price: 'À partir de 60 €',
      },
      {
        name: 'Safari dauphins au lever du soleil',
        description: 'Observation à bord d’une pirogue dans le canal du Mozambique.',
        duration: '3 heures',
        price: 'À partir de 40 €',
      },
      {
        name: "Visite d'une plantation d’ylang-ylang",
        description: 'Processus de distillation et dégustation artisanale.',
        duration: '2 heures',
        price: 'À partir de 25 €',
      },
      {
        name: 'Randonnée au Mont Passot',
        description: 'Courte marche jusqu’au meilleur point de vue.',
        duration: 'Demi-journée',
        price: 'Gratuit',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre (matin & fin d’après-midi)',
      access:
        'Vol direct vers l’aéroport de Nosy Be ; transfers en bateau ou taxi-brousse',
      accommodation:
        'Hôtels de charme, lodges de luxe et bungalows en bord de mer',
      mustBring: [
        'Crème solaire haute protection',
        'Masque/tuba',
        'Chapeau',
        'Appareil photo',
      ],
    },
    region: 'Nord-Ouest',
    category: ['Plages', 'Aventure', 'Bien-être'],
    price: { from: 25, currency: 'EUR' },
  },

  {
    id: 2,
    name: 'Lemuria Land',
    slug: 'lemuria-land',
    image: '/images/Tours-ile-de-nosy-be/lemuria-land/l5.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/lemuria-land/l2.png',
      '/images/Tours-ile-de-nosy-be/lemuria-land/l3.png',
      '/images/Tours-ile-de-nosy-be/lemuria-land/l4.png',
    ],
    description:
      'Sanctuaire de biodiversité au cœur d’une ancienne plantation d’ylang-ylang.',
    longDescription: `Lemuria Land, parc privé à Nosy Be, offre :

- Verger centenaire d’ylang-ylang  
- Lémuriens (catta, vari, saki…) en liberté  
- Vivarium naturel (caméléons, tortues, crocodiles)  
- Jardin d’insectes et de papillons

Chaque billet participe à la conservation, avec nourrissages interactifs.`,
    highlights: ['Ylang-ylang centenaire', 'Lémuriens libres', 'Reptiles & papillons'],
    activities: [
      {
        name: 'Rencontre avec les lémuriens',
        description: 'Alimentation et observation rapprochée.',
        duration: '2 heures',
        price: 'À partir de 15 €',
      },
      {
        name: 'Visite de la distillerie',
        description: 'Démonstration et dégustation d’huile essentielle.',
        duration: '1 heure',
        price: 'À partir de 10 €',
      },
      {
        name: 'Circuit des reptiles',
        description: 'Observation guidée des caméléons et tortues.',
        duration: '1 heure',
        price: 'À partir de 12 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Toute l’année (matin & fin d’après-midi)',
      access: '15 min en voiture depuis Hell-Ville',
      accommodation: 'Lodges proches de la plantation',
      mustBring: ['Appareil photo', 'Chapeau', 'Eau', 'Chaussures fermées'],
    },
    region: 'Centre-Est',
    category: ['Nature', 'Faune', 'Culture'],
    price: { from: 15, currency: 'EUR' },
  },

  {
    id: 3,
    name: 'Mont Passot',
    slug: 'mont-passot',
    image: '/images/Tours-ile-de-nosy-be/mont-passot/mp2.png',
    gallery: [
      '/images/Tours-ile-de-nosy-be/mont-passot/mp1.jpg',
      '/images/Tours-ile-de-nosy-be/mont-passot/mp3.jpg',
      '/images/Tours-ile-de-nosy-be/mont-passot/mp4.jpg',
    ],
    description:
      'Point culminant de Nosy Be offrant un panorama à 360° sur l’île.',
    longDescription: `Mont Passot (326 m) est le plus haut point de Nosy Be. Vue sur huit lacs de cratère et le canal du Mozambique. Accès facile en voiture, 5 min de marche jusqu’aux plateformes panoramiques.`,
    highlights: ['Vue panoramique', 'Lacs de cratère', 'Couchers de soleil'],
    activities: [
      {
        name: 'Observation du coucher de soleil',
        description: 'Depuis la plateforme principale.',
        duration: 'Demi-journée',
        price: 'Gratuit',
      },
      {
        name: 'Randonnée facile',
        description: '5 min depuis le parking.',
        duration: '5–10 minutes',
        price: 'Gratuit',
      },
      {
        name: 'Visite guidée des lacs',
        description: 'Découverte commentée des cratères.',
        duration: '1 heure',
        price: 'À partir de 15 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Décembre',
      access:
        'Route praticable jusqu’au parking, puis 5 min de marche',
      accommodation: 'Lodges & bungalows à proximité',
      mustBring: ['Veste légère', 'Chapeau', 'Appareil photo', 'Eau'],
    },
    region: 'Nord',
    category: ['Panorama', 'Nature', 'Randonnée'],
    price: { from: 0, currency: 'EUR' },
  },

  {
    id: 4,
    name: 'Arbre sacré de Mahatsinjo',
    slug: 'arbre-sacre-mahatsinjo',
    image: '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar3.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar2.jpg',
      '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar1.jpg',
      '/images/Tours-ile-de-nosy-be/Arbre-sacre/ar4.jpg',
    ],
    description:
      'Ficus religiosa sacré honorant la reine Tsiomeko, sanctuaire spirituel.',
    longDescription: `À Mahatsinjo, un figuier couvre 5 000 m² de labyrinthes racinaires. Lieu d’offrandes pour protection, fertilité et prospérité. Calme propice au recueillement.`,
    highlights: ['Lieu de prière', 'Racines aériennes', 'Croyances ancestrales'],
    activities: [
      {
        name: 'Visite guidée spirituelle',
        description: 'Rituels et histoire Sakalava.',
        duration: '1 heure',
        price: 'Gratuit',
      },
      {
        name: 'Balade botanique',
        description: 'Découverte de la flore sacrée.',
        duration: '1–2 heures',
        price: 'À partir de 10 €',
      },
      {
        name: 'Photo au lever du jour',
        description: 'Immortalisez l’arbre sous la lumière matinale.',
        duration: '1 heure',
        price: 'À partir de 20 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Toute l’année',
      access: 'Voiture + 5 min de marche',
      accommodation: 'Lodges à proximité',
      mustBring: ['Offrandes (fleurs/tissus)', 'Vêtements respectueux', 'Appareil photo'],
    },
    region: 'Nord',
    category: ['Culture', 'Spiritualité', 'Nature'],
    price: { from: 0, currency: 'EUR' },
  },

  {
    id: 5,
    name: 'Ambanja',
    slug: 'ambanja',
    image: '/images/Tours-ile-de-nosy-be/Ambanja/a1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Ambanja/a2.jpg',
      '/images/Tours-ile-de-nosy-be/Ambanja/a3.png',
      '/images/Tours-ile-de-nosy-be/Ambanja/a4.webp',
    ],
    description:
      'Ville historique du Sambirano, réputée pour ses cacao-cafés et paysages fluviaux.',
    longDescription: `Ambanja, au bord du Sambirano, est la capitale du cacao & café malgache. À découvrir :
- Chutes de Mahamanina (14 km au sud)  
- Réserve de Manongarivo (35 km)  
- Marché « Bazary Be »  
Accessible par RN6, Ambanja allie culture sakalava et nature luxuriante.`,
    highlights: [
      'Plantations de cacao & café',
      'Chutes de Mahamanina',
      'Réserve de Manongarivo',
      'Marché Bazary Be',
    ],
    activities: [
      {
        name: 'Visite plantation cacao',
        description: 'Du cabossage à la dégustation.',
        duration: '2–3 heures',
        price: 'À partir de 10 €',
      },
      {
        name: 'Excursion aux chutes',
        description: 'Trek et bains naturels.',
        duration: 'Journée complète',
        price: 'À partir de 20 €',
      },
      {
        name: 'Randonnée Manongarivo',
        description: 'Forêt primaire et lémuriens.',
        duration: 'Demi-journée',
        price: 'À partir de 30 €',
      },
      {
        name: 'Découverte du marché',
        description: 'Fruits tropicaux, épices et artisanat.',
        duration: '1–2 heures',
        price: 'Gratuit',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Mai à Octobre',
      access: 'RN6 depuis Diego-Suarez ou via Ankify puis route',
      accommodation: 'Guesthouses, lodges et hôtels',
      mustBring: [
        'Chapeau',
        'Crème solaire',
        'Répulsif anti-moustiques',
        'Vêtements légers et imperméable léger',
      ],
    },
    region: 'Sambirano',
    category: ['Nature', 'Culture', 'Gastronomie'],
    price: { from: 0, currency: 'EUR' },
  },

  {
    id: 6,
    name: 'Réserve de Lokobe',
    slug: 'lokobe',
    image: '/images/Tours-ile-de-nosy-be/Lokobe/l1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Lokobe/l1.jpg',
      '/images/Tours-ile-de-nosy-be/Lokobe/l2.jpg',
      '/images/Tours-ile-de-nosy-be/Lokobe/l3.jpg',
      '/images/Tours-ile-de-nosy-be/Lokobe/l4.jpg',
    ],
    description:
      'Dernière forêt primaire de Nosy Be, abritant lémuriens et orchidées endémiques.',
    longDescription: `Lokobe offre :

- Lémuriens endémiques (Microcèbe à ventre roux, Vari noir)  
- Mangrove et sentiers ombragés  
- Orchidées sauvages  
- Immersion culturelle avec communautés Sakalava`,
    highlights: ['Lémuriens', 'Forêt primaire', 'Mangrove', 'Orchidées'],
    activities: [
      {
        name: 'Randonnée guidée',
        description: 'À la recherche des lémuriens.',
        duration: '2–3 heures',
        price: 'À partir de 25 €',
      },
      {
        name: 'Balade en pirogue',
        description: 'Exploration de la mangrove.',
        duration: '1 heure',
        price: 'À partir de 15 €',
      },
      {
        name: 'Visite nocturne',
        description: 'Faune nocturne avec guide spécialisé.',
        duration: '2 heures',
        price: 'À partir de 30 €',
      },
      {
        name: 'Immersion culturelle',
        description: 'Rencontre d’une famille Sakalava.',
        duration: '1–2 heures',
        price: 'À partir de 20 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre',
      access: 'Pirogue depuis Ambondrona (10 min)',
      accommodation: 'Écolodges & bungalows à proximité',
      mustBring: ['Chaussures de rando', 'Anti-moustiques', 'Appareil photo', 'Chapeau'],
    },
    region: 'Nord',
    category: ['Nature', 'Faune', 'Aventure', 'Culture'],
    price: { from: 15, currency: 'EUR' },
  },

  {
    id: 7,
    name: 'Nosy Fanihy',
    slug: 'nosy-fanihy',
    image: '/images/Tours-ile-de-nosy-be/Fanihy/f1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Fanihy/f1.jpg',
      '/images/Tours-ile-de-nosy-be/Fanihy/f2.jpg',
      '/images/Tours-ile-de-nosy-be/Fanihy/f3.jpg',
      '/images/Tours-ile-de-nosy-be/Fanihy/f4.jpg',
    ],
    description:
      'Petite île privée, sable fin, lagons turquoise et tranquillité.',
    longDescription: `Nosy Fanihy, « Île aux Tortues », est un écrin de sérénité proche de Nosy Be :

- Plages désertes bordées de filaos  
- Lagon peu profond idéal pour snorkeling  
- Tortues et poissons tropicaux  
- Atmosphère intimiste`,
    highlights: [
      'Plages désertes',
      'Observation tortues',
      'Snorkeling',
      'Calme absolu',
    ],
    activities: [
      {
        name: 'Snorkeling guidé',
        description: 'Exploration du récif protégé.',
        duration: '2–3 heures',
        price: 'À partir de 40 €',
      },
      {
        name: 'Balade sur l’île',
        description: 'Mangrove et points de vue.',
        duration: '1 heure',
        price: 'Gratuit',
      },
      {
        name: 'Pique-nique plage',
        description: 'Repas malgache au bord du lagon.',
        duration: '1–2 heures',
        price: 'À partir de 25 €',
      },
      {
        name: 'Coucher de soleil',
        description: 'Vue magique sur le canal du Mozambique.',
        duration: '30 minutes',
        price: 'Gratuit',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre',
      access: '15 min en bateau depuis Hell-Ville',
      accommodation: 'Excursion à la journée uniquement',
      mustBring: ['Chapeau', 'Crème solaire', 'Maillot de bain', 'Serviette'],
    },
    region: 'Nord',
    category: ['Plage', 'Nature', 'Snorkeling'],
    price: { from: 40, currency: 'EUR' },
  },

  {
    id: 8,
    name: 'Nosy Mitsio',
    slug: 'nosy-mitsio',
    image: '/images/Tours-ile-de-nosy-be/nosy-mitsio/nm1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/nosy-mitsio/nm1.jpg',
      '/images/Tours-ile-de-nosy-be/nosy-mitsio/nm2.jpg',
      '/images/Tours-ile-de-nosy-be/nosy-mitsio/nm3.jpg',
      '/images/Tours-ile-de-nosy-be/nosy-mitsio/nm4.jpg',
    ],
    description:
      'Archipel sauvage d’îlots isolés, fonds marins exceptionnels.',
    longDescription: `Les îles Mitsio offrent :

- Récifs vierges et épaves sous-marines  
- Tortues, raies et poissons multicolores  
- Plages désertes et lagons cristallins  
- Accès en bateau privé`,
    highlights: ['Plongée & snorkeling', 'Îles désertes', 'Épaves', 'Biodiversité'],
    activities: [
      {
        name: 'Plongée bouteille',
        description: 'Tombants coralliens et épaves.',
        duration: '3 heures',
        price: 'À partir de 80 €',
      },
      {
        name: 'Snorkeling guidé',
        description: 'Lagons et tortues.',
        duration: '2 heures',
        price: 'À partir de 50 €',
      },
      {
        name: 'Trek d’île en île',
        description: 'Criques et panoramas.',
        duration: 'Journée complète',
        price: 'À partir de 100 €',
      },
      {
        name: 'Pique-nique plage',
        description: 'Repas traditionnel isolé.',
        duration: '1–2 heures',
        price: 'À partir de 30 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre',
      access: 'Bateau privatif (2 h depuis Hell-Ville)',
      accommodation: 'Excursion à la journée',
      mustBring: ['Maillot de bain', 'Crème solaire', 'Serviette', 'Appareil photo'],
    },
    region: 'Nord',
    category: ['Plage', 'Snorkeling', 'Aventure'],
    price: { from: 50, currency: 'EUR' },
  },

  {
    id: 9,
    name: 'Nosy Sakatia',
    slug: 'nosy-sakatia',
    image: '/images/Tours-ile-de-nosy-be/Nosy-sakatia/sk1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Nosy-sakatia/sk1.jpg',
      '/images/Tours-ile-de-nosy-be/Nosy-sakatia/sk2.webp',
      '/images/Tours-ile-de-nosy-be/Nosy-sakatia/sk3.jpg',
      '/images/Tours-ile-de-nosy-be/Nosy-sakatia/sk4.jpg',
    ],
    description:
      'Île-jardin avec forêt, sanctuaire de tortues et plages intimes.',
    longDescription: `À 15 min de Nosy Be :

- Forêt d’orchidées et sentier botanique  
- Nurserie à tortues marines  
- Criques discrètes pour nager  
- Village de pêcheurs`,
    highlights: ['Forêt & orchidées', 'Tortues', 'Plages intimes', 'Snorkeling'],
    activities: [
      {
        name: 'Randonnée botanique',
        description: 'Sentier guidé d’orchidées.',
        duration: '2 heures',
        price: 'À partir de 20 €',
      },
      {
        name: 'Baptême de plongée',
        description: 'Première rencontre corail.',
        duration: '1 h 30',
        price: 'À partir de 60 €',
      },
      {
        name: 'Rencontre tortues',
        description: 'Observation dans leur nurserie.',
        duration: '1 heure',
        price: 'À partir de 30 €',
      },
      {
        name: 'Kayak de mer',
        description: 'Baies en kayak transparent.',
        duration: '2 heures',
        price: 'À partir de 40 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Mai à Octobre',
      access: '15 min en bateau depuis Hell-Ville',
      accommodation: 'Bungalows & écolodges',
      mustBring: ['Chaussures d’eau', 'Crème solaire', 'Chapeau', 'Appareil photo'],
    },
    region: 'Nord',
    category: ['Nature', 'Faune', 'Snorkeling'],
    price: { from: 30, currency: 'EUR' },
  },

  {
    id: 10,
    name: 'Nosy Tanikely',
    slug: 'nosy-tanikely',
    image: '/images/Tours-ile-de-nosy-be/Tanikely/nt1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Tanikely/nt1.jpg',
      '/images/Tours-ile-de-nosy-be/Tanikely/nt2.jpg',
      '/images/Tours-ile-de-nosy-be/Tanikely/nt3.jpg',
      '/images/Tours-ile-de-nosy-be/Tanikely/nt4.jpg',
      '/images/Tours-ile-de-nosy-be/Tanikely/nt5.jpg',
    ],
    description:
      'Réserve marine protégée, sentiers sous-marins et phare pittoresque.',
    longDescription: `Nosy Tanikely, réserve marine, est un sanctuaire pour :

- Tortues et poissons tropicaux  
- Tombants coralliens en masque-tuba  
- Phare historique (vue 360°)  
- Sentiers côtiers`,
    highlights: ['Réserve marine', 'Snorkeling', 'Phare historique', 'Tortues'],
    activities: [
      {
        name: 'Snorkeling libre',
        description: 'Masque & tuba autour du récif.',
        duration: 'Libre',
        price: 'Gratuit',
      },
      {
        name: 'Balade au phare',
        description: 'Randonnée jusqu’au sommet.',
        duration: '30 minutes',
        price: 'Gratuit',
      },
      {
        name: 'Observation tortues',
        description: 'Rencontre marine.',
        duration: '1 heure',
        price: 'Gratuit',
      },
      {
        name: 'Kayak transparent',
        description: 'Exploration sans se mouiller.',
        duration: '1–2 heures',
        price: 'À partir de 35 €',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Novembre',
      access: 'Bateau depuis Hell-Ville (30 min)',
      accommodation: 'Excursion journée',
      mustBring: ['Maillot de bain', 'Crème solaire', 'Serviette', 'Masque-tuba'],
    },
    region: 'Nord',
    category: ['Plage', 'Snorkeling', 'Nature'],
    price: { from: 0, currency: 'EUR' },
  },

  {
    id: 11,
    name: 'Marodoka (Hell-Ville)',
    slug: 'marodoka',
    image: '/images/Tours-ile-de-nosy-be/Marodoka/m1.jpg',
    gallery: [
      '/images/Tours-ile-de-nosy-be/Marodoka/m1.jpg',
      '/images/Tours-ile-de-nosy-be/Marodoka/m2.jpg',
      '/images/Tours-ile-de-nosy-be/Marodoka/m3.jpg',
      '/images/Tours-ile-de-nosy-be/Marodoka/m4.jpg',
    ],
    description:
      'Le plus ancien village de Nosy Be, cœur historique et culturel (Hell-Ville).',
    longDescription: `Marodoka (Andoany/Hell-Ville), fondé au XIXᵉ siècle par des marchands arabes :

- Vestiges coloniaux & maisons traditionnelles  
- Mosquée historique et cimetière musulman  
- Marché animé chaque matin  
- Spectacles et danses Sakalava  

Plongez dans l’histoire et les traditions Sakalava.`,
    highlights: [
      'Patrimoine historique',
      'Marché traditionnel',
      'Architecture arabe',
      'Culture locale',
    ],
    activities: [
      {
        name: 'Visite guidée historique',
        description: 'Ruines coloniales et mosquée.',
        duration: '1 heure',
        price: 'À partir de 15 €',
      },
      {
        name: 'Spectacle culturel',
        description: 'Danses et chants traditionnels.',
        duration: '1 heure',
        price: 'À partir de 10 €',
      },
      {
        name: 'Découverte du marché',
        description: 'Dégustation locale.',
        duration: '1–2 heures',
        price: 'Gratuit',
      },
      {
        name: 'Visite de la mosquée',
        description: 'Architecture ancestrale.',
        duration: '30 minutes',
        price: 'Gratuit',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Toute l’année (matins pour le marché)',
      access: '5 min à pied du port',
      accommodation: 'Hôtels & guesthouses à Hell-Ville',
      mustBring: ['Chapeau', 'Appareil photo', 'Respect des traditions'],
    },
    region: 'Nord-Ouest',
    category: ['Histoire', 'Culture', 'Découverte'],
    price: { from: 0, currency: 'EUR' },
  },
];
