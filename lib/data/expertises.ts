import type { Expertise, ExpertiseSlug } from '@/lib/types/expertise'

// Image URLs — à remplacer par les URLs Cloudinary en Phase 8
const IMG = {
  etude1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMoTaQpFGPBXDi96A0RLUQtytKoV9xD1HHOUBpalYwX5_Ha8kZVS8z6zPVarTkGp8jKwRUf5ZQlquUEW4a3FTb6TpYCnEwPO9uhrju32wIfJ4tHLjRJlTL-GZ33TjyV7EnKQv-mGfTliWQODyas5E_IrOXov1B1yzszJtiHG04e4yxSn6b4VQfvsBZeEhESeeZZ5GPpWj4IgWWAJBiPlHELmazuhVDDbu53-qQ3kKTLLejxxjfV23pDDG9T7NR8PAB7l_m5bPmGcgI',
  etude2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ7X2RZdwluGKoEmHM8CuN_bSHRG6kVG1tnOvq2cYdPl_EUJrMe8dt2kPfv6z3pVIWs4ivIbRLroJU6e6VdsszU_Xg53VWR2h0d5VlM4vGvHQBdA0B99vDJaYJzz6obaEcTINPBuTO9m8nb67w3eon7sl_xsNoPX8-QDPIzd2HQREou-D5e8MvHW7Tc3B6So1xZkCwofK964itn1eT7Sl4GhvJtO25NKbv1ceUVZO8y4G3EMGU8rcLrQKBZOM-DTFfoUUZIGevYWDF',
  etude3: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNDIHjevOqCFwF0h1xjhdcknGjeMj7_BRDA2fRc0l_TPs2-TAUEsvMFriEKKKpZzrdIe859mflmtIxOlIkTU4BpmGtqTtgzEa0cv-qJFEZWdywR2sJ2IrkFSCb_CPZTPSylv86_mhrVy8XFGjBieAf1OU2qo8A5u-YbM5eemX-kwsSBkJzLFZQrWqg3x7e3JsWBo_dZck-4EGM5GINEvkKa5gnO88VWpGa9jpRtJkjYWy2S7HGEteQdH5ShmrBOscOTju9OevqrNM3',
  etude4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtUd-BN1E4yi1_h-6DI_f1rRgKx2mjjVvnpedLmTbRmuTSmj__qIhcj1zuPFypAt5VZDA2A9yYzfd5Ix377eJtWKyiYyYTwGbUDtmMkIybW3Ltdv9XqHKeTHrgQULQIDDYDvcsR8f6Oazxor5KNwS4VTIOXSTV0Ed_ugsYM8g7XGe8Os6h4Kv4CA4bynYRhFX-i2Sn3C6trpaXysPDhRbYUTO8VMWsQSW4fKy6eS_hx1I9LmX8yu8orPYLFkhLVt4DAnyrhV6DLjlN',
  construction4: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs4V_9oZE2qrjqWeMChUEZYwBHddw80gfsQACfToHAn1mArzD6O5UwQpIWNK2oiz2HG_9KXEiApgJusHX83U-beGh9t9y7aQlnBfYL_OfvWor0wyTGief_T55SjLUGhmpQlgJgvBtJP0J3QG-bFLlEzCd7Y3sHy2U20idJsV2sPl4beuv_LO1AD6ENaDoPYYnZzaP2keqltP5IPXJszb0da2HPu_ZXzVDbOo4_K-_qzce8zDcBNn0rU1xHmI0HRqpDHn9Ui2Np9uUa',
}

export const expertises: Record<ExpertiseSlug, Expertise> = {
  etude: {
    slug: 'etude',
    numero: '01',
    titre: 'Étude, Conception & Ingénierie',
    sousTitre: 'Accompagnement AMO',
    hero: {
      image: IMG.etude1,
      sousTitre: "Accompagnement AMO — De l'analyse du besoin jusqu'à la livraison, nous pilotons chaque étape avec précision technique et rigueur méthodologique.",
    },
    points: [
      "Études de faisabilité & avant-projets",
      "Conception architecturale & structurelle",
      "Modélisation 3D & BIM",
      "Études techniques & calculs de structure",
      "Assistance à Maîtrise d'Ouvrage (AMO)",
      "Pilotage & suivi de chantier",
    ],
    description: [
      "MB Holding place l'ingénierie au cœur de chaque projet. Notre équipe pluridisciplinaire intervient dès les premières réflexions pour garantir la viabilité technique, réglementaire et financière de vos ambitions.",
      "En tant qu'Assistant à Maîtrise d'Ouvrage, nous représentons vos intérêts face aux entreprises et bureaux d'études, en assurant la cohérence globale du projet. Chaque décision est fondée sur des analyses rigoureuses et des outils de modélisation avancés.",
      "Notre approche intègre les normes environnementales et les réalités locales africaines pour concevoir des ouvrages durables, efficaces et adaptés à leur contexte.",
    ],
    stats: [
      { valeur: '15+', label: 'Études réalisées' },
      { valeur: '100%', label: 'Conformité réglementaire' },
      { valeur: 'AMO', label: 'Accompagnement complet' },
    ],
    projets: [IMG.etude1, IMG.etude2, IMG.etude3, IMG.etude4],
  },

  construction: {
    slug: 'construction',
    numero: '02',
    titre: 'Construction & Industrie',
    sousTitre: 'Bâtiment · Industrie · Forages',
    hero: {
      image: IMG.etude3,
      sousTitre: "Bâtiment · Industrie · Forages — Réalisation d'ouvrages résidentiels, tertiaires et industriels avec une maîtrise complète des procédés de construction modernes.",
    },
    points: [
      "Bâtiments résidentiels & tertiaires",
      "Bâtiments industriels & métalliques",
      "Travaux de forage & ouvrages spéciaux",
      "Rénovation & démolition",
      "Infrastructure & génie civil",
      "Gestion HSE & sécurité chantier",
    ],
    description: [
      "MB Holding réalise des ouvrages de construction à forte valeur technique, en s'appuyant sur une organisation rigoureuse et des équipes expérimentées sur le terrain africain.",
      "Du gros œuvre au second œuvre, nous intervenons sur l'ensemble du cycle de construction. Notre expertise dans les travaux de forage nous permet de répondre à des besoins industriels complexes.",
      "Chaque projet est piloté avec une attention particulière à la qualité des matériaux, la sécurité des équipes et le respect des délais contractuels.",
    ],
    stats: [
      { valeur: '20+', label: 'Chantiers réalisés' },
      { valeur: 'BTP', label: 'Toutes typologies' },
      { valeur: 'HSE', label: 'Sécurité garantie' },
    ],
    projets: [IMG.etude3, IMG.etude1, IMG.etude2, IMG.construction4],
  },

  services: {
    slug: 'services',
    numero: '04',
    titre: 'Services Connexes',
    sousTitre: "Locations d'Engins · Prestations",
    hero: {
      image: IMG.construction4,
      sousTitre: "Locations d'engins · Prestations associées — Un support opérationnel complet pour accompagner la réussite de vos chantiers.",
    },
    points: [
      "Location de grues & engins de levage",
      "Location de pelles, bulldozers & compacteurs",
      "Transport & logistique de chantier",
      "Maintenance & services annexes",
      "Nettoyage industriel & post-chantier",
      "Approvisionnement en matériaux",
    ],
    description: [
      "MB Holding met à disposition une flotte d'engins de chantier et un ensemble de services complémentaires conçus pour faciliter et optimiser l'exécution de vos projets.",
      "Que vous ayez besoin d'un engin spécifique pour quelques jours ou d'un support logistique continu, nous proposons des solutions flexibles et adaptées à chaque situation.",
      "Au-delà de la location, nos équipes de techniciens spécialisés assurent la maintenance préventive et corrective sur site, ainsi que des prestations de nettoyage post-chantier.",
    ],
    stats: [
      { valeur: 'Flotte', label: 'Multi-engins disponibles' },
      { valeur: '24/7', label: 'Support opérationnel' },
      { valeur: 'Flex', label: 'Durées adaptables' },
    ],
    projets: [IMG.construction4, IMG.etude1, IMG.etude3],
  },

  immobilier: {
    slug: 'immobilier',
    numero: '03',
    titre: 'Immobilier',
    sousTitre: 'Promotion · Gestion · Investissement',
    hero: {
      image: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1776933920/hero_villa_dream_lfymrq.webp',
      sousTitre: "Promotion · Gestion · Investissement — Des projets immobiliers prestigieux alliant design contemporain et confort absolu.",
    },
    points: [
      "Promotion immobilière de luxe",
      "Gestion de patrimoine",
      "Conseil en investissement immobilier",
      "Développement de projets résidentiels",
    ],
    description: [
      "MB Holding développe des projets immobiliers d'exception, redéfinissant les standards du luxe et du confort en Afrique de l'Ouest. Nous accompagnons nos clients dans l'acquisition, la gestion et l'optimisation de leur patrimoine.",
      "Chaque projet est pensé pour offrir une expérience de vie unique, mêlant architecture innovante, matériaux nobles et intégration paysagère harmonieuse.",
    ],
    stats: [
      { valeur: 'Premium', label: 'Projets de Luxe' },
      { valeur: '100%', label: 'Sur-mesure' },
      { valeur: 'ROI', label: 'Haut rendement' },
    ],
    projets: [
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934491/exterieur1_l09jpr.webp',
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934488/exterieur2_ejytk9.webp',
      'https://res.cloudinary.com/dbjjlklld/image/upload/v1776934485/exterieur3_xatcpb.webp'
    ],
  },
}
