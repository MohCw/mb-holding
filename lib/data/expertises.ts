import type { Expertise, ExpertiseSlug } from '@/lib/types/expertise'

// Image URLs — à remplacer par les URLs Cloudinary en Phase 8
const IMG = {
  etude_bg: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777398606/etude_bg_q1lanc.jpg',
  etude1: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777398882/etude_1_nj1mua.jpg',
  etude2: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777398889/etude_2_iisdpd.jpg',
  etude3: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777398890/etude_3_jofrb3.jpg',
  construction_bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNDIHjevOqCFwF0h1xjhdcknGjeMj7_BRDA2fRc0l_TPs2-TAUEsvMFriEKKKpZzrdIe859mflmtIxOlIkTU4BpmGtqTtgzEa0cv-qJFEZWdywR2sJ2IrkFSCb_CPZTPSylv86_mhrVy8XFGjBieAf1OU2qo8A5u-YbM5eemX-kwsSBkJzLFZQrWqg3x7e3JsWBo_dZck-4EGM5GINEvkKa5gnO88VWpGa9jpRtJkjYWy2S7HGEteQdH5ShmrBOscOTju9OevqrNM3',
  construction1: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399487/construction1_cc3ii0.jpg',
  construction2: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399498/construction2_nugqs7.jpg',
  construction3: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399490/construction3_cyethq.jpg',
  construction4: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399457/construction4_jgyw9h.jpg',
  immobilier_bg: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399617/immobilier_bg_ip2uad.jpg',
  immobilier1: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399682/immobilier1_owt3nd.jpg',
  immobilier2: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399690/immobilier2_cjiuf8.jpg',
  immobilier3: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777399677/immobilier3_ff7pum.jpg',
  service_bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs4V_9oZE2qrjqWeMChUEZYwBHddw80gfsQACfToHAn1mArzD6O5UwQpIWNK2oiz2HG_9KXEiApgJusHX83U-beGh9t9y7aQlnBfYL_OfvWor0wyTGief_T55SjLUGhmpQlgJgvBtJP0J3QG-bFLlEzCd7Y3sHy2U20idJsV2sPl4beuv_LO1AD6ENaDoPYYnZzaP2keqltP5IPXJszb0da2HPu_ZXzVDbOo4_K-_qzce8zDcBNn0rU1xHmI0HRqpDHn9Ui2Np9uUa',
  service1: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777400186/service1_sa6x0m.jpg',
  service2: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777400188/service2_eu9m04.jpg',
  service3: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777400187/service3_xajmuz.jpg',
  service4: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777400186/service4_vbsmvx.jpg'
}

export const expertises: Record<ExpertiseSlug, Expertise> = {
  etude: {
    slug: 'etude',
    numero: '01',
    titre: 'Étude, Conception & Ingénierie',
    sousTitre: 'Accompagnement AMO',
    hero: {
      image: IMG.etude_bg,
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
    projets: [IMG.etude1, IMG.etude2, IMG.etude3],
  },

  construction: {
    slug: 'construction',
    numero: '02',
    titre: 'Construction & Industrie',
    sousTitre: 'Bâtiment · Industrie · Forages',
    hero: {
      image: IMG.etude3,
      sousTitre: "Bâtiment · Industrie · Tertiaire — Réalisation de bâtiments résidentiels, tertiaires et industriels, avec une maîtrise complète des procédés de construction modernes.",
    },
    points: [
      "Construction résidentielle & tertiaire",
      "Second œuvre & lots techniques",
      "Construction industrielle & structures métalliques",
      "Forage & ouvrages spéciaux",
      "Démolition et rénovation",
      "Infrastructure & génie civil",
      "Gestion HSE & sécurité chantier",
    ],
    description: [
      "MB Holding réalise des ouvrages de construction à forte valeur technique, en s'appuyant sur une organisation rigoureuse et des équipes expérimentées sur le terrain.",
      "Du gros œuvre au second œuvre, nous intervenons sur l’ensemble du cycle de construction. Notre expertise s’étend également à des travaux divers, notamment dans les domaines de l’industrie, du forage et autres activités spécialisées, ce qui nous permet de répondre efficacement à une large variété de besoins.",
      "Chaque projet est piloté avec une attention particulière à la qualité des matériaux, la sécurité des équipes et le respect des délais contractuels.",
    ],
    stats: [
      { valeur: '10+', label: 'Chantiers réalisés' },
      { valeur: 'BTP', label: 'Toutes typologies' },
      { valeur: 'HSE', label: 'Sécurité garantie' },
    ],
    projets: [IMG.construction1, IMG.construction2, IMG.construction3, IMG.construction4],
  },

  services: {
    slug: 'services',
    numero: '04',
    titre: 'Services Connexes',
    sousTitre: "Locations d'Engins · Prestations",
    hero: {
      image: IMG.service_bg,
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
    projets: [IMG.service1, IMG.service2, IMG.service3, IMG.service4],
  },

  immobilier: {
    slug: 'immobilier',
    numero: '03',
    titre: 'Immobilier',
    sousTitre: 'Promotion · Gestion · Investissement',
    hero: {
      image: IMG.immobilier_bg,
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
    projets: [IMG.immobilier1, IMG.immobilier2, IMG.immobilier3]
  },
}
