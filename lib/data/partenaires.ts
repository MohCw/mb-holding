export interface Partenaire {
  nom: string
  logo?: string
}

// Uploader les logos sur Cloudinary et remplacer les URLs ci-dessous
const IMG = {
  moijeutri: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777402033/moijeutri_zyxfxl.jpg',
  olamagri: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777402029/olamagri_w4oyen.jpg',
  erty: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777402030/erty_jxfbdp.jpg',
  alt: 'https://res.cloudinary.com/dbjjlklld/image/upload/v1777402031/alt_jhm3wq.jpg'
}

export const partenaires: Partenaire[] = [
  { nom: 'Moi Jeu Tri',       logo: IMG.moijeutri },
  { nom: 'Olam Agri',      logo: IMG.olamagri },
  { nom: 'Erty',        logo: IMG.erty },
  { nom: 'Aw Logistiques et Transports',   logo: IMG.alt }
]
