export type ExpertiseSlug = 'etude' | 'construction' | 'services' | 'immobilier'

export interface Expertise {
  slug: ExpertiseSlug
  numero: string
  titre: string
  sousTitre: string
  hero: { image: string; sousTitre: string }
  points: string[]
  description: string[]
  stats: { label: string; valeur: string }[]
  projets: string[]
}
