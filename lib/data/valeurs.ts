export interface Valeur {
  numero: string
  titre: string
  description: string
  icon: string
  variant: 'filled' | 'outlined'
}

export const valeurs: Valeur[] = [
  {
    numero: '01',
    titre: 'Écouter & Analyser',
    description: "Comprendre les besoins du client, le contexte et les objectifs du projet avant toute intervention.",
    icon: 'hearing',
    variant: 'filled',
  },
  {
    numero: '02',
    titre: 'Concevoir & Innover',
    description: "Proposer des solutions durables, efficaces et adaptées aux réalités du terrain et aux ambitions du client.",
    icon: 'lightbulb',
    variant: 'outlined',
  },
  {
    numero: '03',
    titre: 'Réaliser & Livrer',
    description: "Construire avec rigueur, sécurité et maîtrise des délais pour livrer des ouvrages à la hauteur des attentes.",
    icon: 'verified',
    variant: 'filled',
  },
]
