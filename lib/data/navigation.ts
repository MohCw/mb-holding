export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Expertises', href: '/#expertises' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks: NavLink[] = [
  { label: 'Mentions Légales', href: '/mentions-legales' },
  { label: 'Politique de Confidentialité', href: '/politique-confidentialite' },
]
