import type { Projet } from '@/lib/types/projet'

// Image URLs — à remplacer par les URLs Cloudinary en Phase 8
export const projets: Projet[] = [
  {
    slug: 'villa-dream',
    nom: 'Villa DREAM',
    lieu: 'Saly, Sénégal',
    statut: 'En Construction',
    annee: 2026,
    type: 'Luxe Contemporain',
    expertiseSlug: 'immobilier',
    heroImage: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1776933920/hero_villa_dream_lfymrq.webp',
    gallery: [
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1777409375/gallery1_w1nceq.jpg',
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1777409378/gallery2_mw0u6c.jpg',
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1777409378/gallery3_zbkeuz.jpg'
    ],
    specs: [
      { label: 'Surface terrain', valeur: '316 m²' },
      { label: 'Surface bâtie', valeur: '194 m²' },
      { label: 'Volumes', valeur: 'Des pieces bien pensé au besoin' },
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
