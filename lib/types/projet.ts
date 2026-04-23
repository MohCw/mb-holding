export interface Projet {
  slug: string
  nom: string
  lieu: string
  statut: string
  annee: number
  type: string
  heroImage: string
  gallery: string[]
  specs: { label: string; valeur: string }[]
  description: string[]
  planImage: string
  expertiseSlug?: string
}
