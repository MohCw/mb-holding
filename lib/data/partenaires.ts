export interface Partenaire {
  nom: string
  logo?: string
}

// Logos à uploader sur Cloudinary en Phase 8 — placeholders textuels pour l'instant
export const partenaires: Partenaire[] = [
  { nom: 'STRUC_CO' },
  { nom: 'TECH_BUILD' },
  { nom: 'CIVIL_ENG' },
  { nom: 'URBAN_DEV' },
  { nom: 'GLOBAL_MAP' },
  { nom: 'PRIME_CON' },
]
