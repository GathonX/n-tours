import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Nosy Be',
    slug: 'nosy-be',
    image: '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
    gallery: [
      '/images/Tours d\'ile de nosy be/nosy-be1.jpg',
      '/images/Tours d\'ile de nosy be/nosy-be2.jpg',
      '/images/Tours d\'ile de nosy be/nosy-be3.jpg',
    ],
    description: 'Surnommée "l\'île aux parfums", Nosy Be est un paradis tropical connu pour ses plages de sable blanc, ses eaux cristallines et ses plantations d\'ylang-ylang.',
    longDescription: `Nosy Be, véritable joyau de l'océan Indien, est une destination qui enchante les visiteurs par sa beauté naturelle et sa richesse culturelle. 
      
Située au nord-ouest de Madagascar, cette île paradisiaque offre :
- Des plages de sable blanc immaculées bordées de palmiers
- Des eaux turquoise parfaites pour la plongée et le snorkeling
- Des plantations d'ylang-ylang qui embaument l'air de leur parfum envoûtant
- Une culture locale vibrante et accueillante

L'île est également réputée pour sa biodiversité exceptionnelle, avec de nombreuses espèces endémiques à observer dans leur habitat naturel.`,
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
    region: 'Nord',
    category: ['Plage', 'Nature', 'Culture'],
    price: {
      from: 50,
      currency: 'EUR'
    }
  },
  {
    id: 2,
    name: 'Parc National d\'Andasibe-Mantadia',
    slug: 'andasibe-mantadia',
    image: '/images/Andasibe/andasibe1.jpg',
    gallery: [
      '/images/Andasibe/andasibe1.jpg',
      '/images/Andasibe/andasibe2.jpg',
      '/images/Andasibe/andasibe3.jpg',
    ],
    description: 'Une forêt tropicale luxuriante abritant le plus grand lémurien de Madagascar, l\'Indri Indri, et une biodiversité exceptionnelle.',
    longDescription: `Le Parc National d'Andasibe-Mantadia est l'une des réserves naturelles les plus accessibles et les plus riches en biodiversité de Madagascar.

Ce sanctuaire naturel est particulièrement connu pour :
- Ses populations d'Indri Indri, le plus grand lémurien existant
- Sa forêt primaire préservée
- Ses orchidées rares et sa flore endémique
- Sa diversité d'espèces d'oiseaux et de reptiles

Les visiteurs peuvent profiter de randonnées guidées de jour comme de nuit pour observer la faune unique de Madagascar dans son habitat naturel.`,
    highlights: ['Indri Indri', 'Forêt primaire', 'Biodiversité'],
    activities: [
      {
        name: 'Randonnée observation Indri',
        description: 'Partez à la rencontre des Indri Indri et écoutez leur chant matinal unique.',
        duration: '3-4 heures',
        price: 'À partir de 40€',
      },
      {
        name: 'Visite nocturne',
        description: 'Découvrez la vie nocturne de la forêt et ses espèces fascinantes.',
        duration: '2 heures',
        price: 'À partir de 35€',
      },
      {
        name: 'Circuit des orchidées',
        description: 'Explorez les sentiers à la découverte des orchidées endémiques.',
        duration: '4 heures',
        price: 'À partir de 45€',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Mars à Décembre',
      access: '3 heures de route depuis Antananarivo',
      accommodation: 'Lodges écologiques et hôtels en bordure du parc',
      mustBring: ['Chaussures de marche', 'Imperméable', 'Appareil photo', 'Jumelles'],
    },
    region: 'Centre-Est',
    category: ['Nature', 'Faune', 'Randonnée'],
    price: {
      from: 40,
      currency: 'EUR'
    }
  },
  {
    id: 3,
    name: 'Allée des Baobabs',
    slug: 'allee-des-baobabs',
    image: '/images/Baobabs/baobabs1.jpg',
    gallery: [
      '/images/Baobabs/baobabs1.jpg',
      '/images/Baobabs/baobabs2.jpg',
      '/images/Baobabs/baobabs3.jpg',
    ],
    description: 'Une avenue naturelle bordée de baobabs géants millénaires, offrant l\'un des paysages les plus emblématiques de Madagascar.',
    longDescription: `L'Allée des Baobabs est l'un des sites naturels les plus photographiés de Madagascar, et pour cause. 

Cette route mythique présente :
- Une vingtaine de baobabs géants âgés de plus de 800 ans
- Des arbres pouvant atteindre 30 mètres de hauteur
- Des couchers de soleil spectaculaires
- Un lieu chargé d'histoire et de légendes locales

Le site est particulièrement magique au lever et au coucher du soleil, lorsque la lumière dore les troncs massifs des baobabs.`,
    highlights: ['Baobabs géants', 'Couchers de soleil', 'Photographie'],
    activities: [
      {
        name: 'Tour photographique',
        description: 'Capturez les plus beaux moments de la journée avec un guide photographe.',
        duration: '3 heures',
        price: 'À partir de 60€',
      },
      {
        name: 'Balade en charrette',
        description: 'Découvrez l\'allée de manière traditionnelle en charrette à zébus.',
        duration: '1 heure',
        price: 'À partir de 25€',
      },
      {
        name: 'Visite culturelle',
        description: 'Apprenez l\'histoire et les légendes locales autour des baobabs.',
        duration: '2 heures',
        price: 'À partir de 30€',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Mai à Octobre',
      access: 'Route depuis Morondava (45 minutes)',
      accommodation: 'Hôtels et lodges à Morondava',
      mustBring: ['Appareil photo', 'Chapeau', 'Eau', 'Anti-moustiques'],
    },
    region: 'Ouest',
    category: ['Nature', 'Culture', 'Photographie'],
    price: {
      from: 25,
      currency: 'EUR'
    }
  },
  {
    id: 4,
    name: 'Parc National de l\'Isalo',
    slug: 'isalo',
    image: '/images/Isalo/isalo1.jpg',
    gallery: [
      '/images/Isalo/isalo1.jpg',
      '/images/Isalo/isalo2.jpg',
      '/images/Isalo/isalo3.jpg',
    ],
    description: 'Un paysage spectaculaire de canyons, de formations rocheuses et de piscines naturelles, surnommé le "Colorado malgache".',
    longDescription: `Le Parc National de l'Isalo est un massif ruiniforme spectaculaire qui s'étend sur près de 82 000 hectares.

Ce parc unique offre :
- Des canyons profonds et des formations rocheuses extraordinaires
- Des piscines naturelles d'eau cristalline
- Une flore endémique adaptée au climat semi-aride
- Des sites sacrés pour le peuple Bara

Le parc abrite également une faune diverse, incluant plusieurs espèces de lémuriens, d'oiseaux et de reptiles.`,
    highlights: ['Canyons', 'Piscines naturelles', 'Randonnée'],
    activities: [
      {
        name: 'Randonnée des canyons',
        description: 'Explorez les plus beaux canyons du parc avec un guide local.',
        duration: 'Journée complète',
        price: 'À partir de 70€',
      },
      {
        name: 'Baignade aux piscines naturelles',
        description: 'Profitez d\'une baignade rafraîchissante dans les piscines naturelles.',
        duration: '4 heures',
        price: 'À partir de 45€',
      },
      {
        name: 'Observation du coucher de soleil',
        description: 'Admirez le coucher de soleil depuis un point de vue panoramique.',
        duration: '2 heures',
        price: 'À partir de 35€',
      },
    ],
    practicalInfo: {
      bestPeriod: 'Avril à Octobre',
      access: 'Route depuis Tuléar ou Fianarantsoa',
      accommodation: 'Hôtels et lodges aux abords du parc',
      mustBring: ['Chaussures de randonnée', 'Chapeau', 'Crème solaire', 'Maillot de bain'],
    },
    region: 'Sud',
    category: ['Nature', 'Aventure', 'Randonnée'],
    price: {
      from: 35,
      currency: 'EUR'
    }
  }
]; 