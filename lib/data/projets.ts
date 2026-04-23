import type { Projet } from '@/lib/types/projet'

// Image URLs — à remplacer par les URLs Cloudinary en Phase 8
export const projets: Projet[] = [
  {
    slug: 'villa-dream',
    nom: 'Villa DREAM',
    lieu: 'Saly, Sénégal',
    statut: 'En Construction',
    annee: 2024,
    type: 'Luxe Contemporain',
    expertiseSlug: 'immobilier',
    heroImage: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1776933920/hero_villa_dream_lfymrq.webp',
    gallery: [
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934491/exterieur1_l09jpr.webp',
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934488/exterieur2_ejytk9.webp',
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934485/exterieur3_xatcpb.webp'
    ],
    specs: [
      { label: 'Surface terrain', valeur: '1 200 m²' },
      { label: 'Surface bâtie', valeur: '450 m²' },
      { label: 'Volumes', valeur: '5 Suites parentales · Séjour triple hauteur' },
      { label: 'Équipements', valeur: 'Domotique intégrée · Solaire hybride' },
      { label: 'Piscine', valeur: 'Miroir à débordement 15m × 4m' },
      { label: 'Structure', valeur: 'Béton armé · Pierre locale · Verre haute perf.' },
    ],
    description: [
      "La Villa DREAM redéfinit les standards de l'architecture résidentielle sur la Petite Côte. Conçue comme un dialogue entre le béton brut et la lumière naturelle du Sénégal, cette demeure de prestige s'inscrit dans une démarche de pureté géométrique.",
      "Chaque angle a été étudié pour maximiser la ventilation transversale, utilisant les vents marins pour réguler naturellement la température intérieure. Les matériaux nobles — pierre locale, verre haute performance et acier — composent une partition architecturale intemporelle.",
    ],
    planImage: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934692/plan_bjdjd4.webp',
  },
]
