# MB Holding — Site Corporate

Site corporate Next.js pour **MB Holding (Maître Bâtisseur)**, groupe BTP basé à Dakar, Sénégal. Construit & ingénierie, immobilier, services connexes.

## Stack

- **Next.js 16** (App Router, SSG) · **TypeScript** · **Tailwind CSS**
- **Resend** (emails) · **Cloudflare Turnstile** (anti-spam) · **GA4** (`@next/third-parties`)
- **Cloudinary** (hébergement images, à compléter Phase 8)

## Lancer le projet

```bash
cd mb-holding
npm install
npm run dev       # http://localhost:3000
npm run build     # build de production
```

Variables d'environnement requises dans `.env.local` :

```
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
NEXT_PUBLIC_GA_ID=
```

---

## Architecture

```
mb-holding/
├── app/                          # Routes Next.js (App Router)
│   ├── layout.tsx                # Shell global : Navbar + Footer + fonts + GA4 + metadata
│   ├── page.tsx                  # Accueil : Hero, Expertises, Mission/Vision, Valeurs, Partenaires
│   ├── contact/page.tsx          # Page contact : formulaire + infos
│   ├── expertise/[slug]/         # Page expertise dynamique (etude | construction | services)
│   │   └── page.tsx
│   ├── projets/[slug]/           # Page projet dynamique (villa-dream + futurs projets)
│   │   └── page.tsx
│   └── api/contact/route.ts      # POST : valide Zod + vérifie Turnstile + envoie email Resend
│
├── components/
│   ├── ui/                       # Atomes réutilisables
│   │   ├── Button.tsx            # Variants : primary / secondary / ghost · Tailles : sm / md / lg
│   │   ├── Input.tsx             # Champ texte avec label flottant et état d'erreur
│   │   └── Textarea.tsx          # Même logique qu'Input, redimensionnement désactivé
│   │
│   ├── sections/                 # Blocs de page réutilisables
│   │   ├── HeroSection.tsx       # Section hero plein-écran avec image de fond + overlay + titre
│   │   ├── StatsGrid.tsx         # Grille de 3 statistiques (valeur + label)
│   │   └── CtaSection.tsx        # Bloc appel à l'action plein-écran (titre + bouton)
│   │
│   ├── features/                 # Composants métier
│   │   ├── CarouselProjets.tsx   # Carrousel horizontal scroll-snap d'images de projets
│   │   ├── ContactForm.tsx       # Formulaire avec états UI (idle/loading/success/error) + Turnstile
│   │   └── PartenairesGrid.tsx   # Grille logos partenaires, grayscale → couleur au hover
│   │
│   └── layout/
│       ├── Navbar.tsx            # Barre de navigation fixe, responsive, hamburger mobile
│       └── Footer.tsx            # Pied de page : logo + liens légaux + copyright
│
├── lib/
│   ├── data/                     # Source de vérité — toutes les données du site
│   │   ├── expertises.ts         # Contenu des 3 pages expertise (slug → titre, hero, points, stats, images)
│   │   ├── projets.ts            # Données Villa DREAM (et futurs projets)
│   │   ├── partenaires.ts        # Liste des partenaires (nom + logo optionnel)
│   │   ├── valeurs.ts            # Les 3 valeurs de l'entreprise (icône + texte)
│   │   └── navigation.ts         # Liens de navigation (label + href)
│   │
│   ├── types/                    # Interfaces TypeScript
│   │   ├── expertise.ts          # type Expertise, ExpertiseSlug
│   │   ├── projet.ts             # type Projet
│   │   └── contact.ts            # type ContactFormData
│   │
│   ├── validations/
│   │   └── contact.schema.ts     # Schéma Zod du formulaire contact (utilisé côté client et API)
│   │
│   ├── services/                 # Classes injectables (instanciées une seule fois)
│   │   ├── email.service.ts      # EmailService — wraps Resend, envoie l'email de contact
│   │   └── turnstile.service.ts  # TurnstileService — vérifie le token Cloudflare côté serveur
│   │
│   ├── hooks/
│   │   └── useContactForm.ts     # Gère état formulaire, validation Zod, appel API /contact
│   │
│   └── utils/
│       └── cn.ts                 # Utilitaire classNames (tailwind-merge + clsx)
│
├── emails/                       # Templates React Email (rendu serveur par Resend)
│   ├── components/
│   │   ├── EmailHeader.tsx       # En-tête email : logo MB Holding
│   │   └── EmailFooter.tsx       # Pied email : coordonnées + lien site
│   └── templates/
│       └── ContactEmail.tsx      # Email reçu sur mbholding221@gmail.com à chaque soumission
│
└── public/
    ├── logo.png                  # Logo MB Holding (Navbar, Footer, og:image par défaut)
    └── hero-accueil.png          # Photo de fond section hero page d'accueil
```

---

## Règles d'architecture

| Règle | Détail |
|-------|--------|
| Données dans `lib/data/` | Jamais de contenu hardcodé dans les composants |
| Types dans `lib/types/` | Toutes les entités ont une interface TypeScript explicite |
| Validation Zod | Schéma partagé entre le formulaire client et la route API |
| Services = classes | `EmailService` et `TurnstileService` instanciés une seule fois |
| Hook client | Logique stateful extraite dans `useContactForm`, pas dans le composant |
| Routes dynamiques | `[slug]` pour tout ce qui partage un template — ajouter une expertise = 0 nouveau fichier |
| `ui/` → `sections/` → `features/` | Atomic design : atomes < blocs < métier |

---

## Ajouter du contenu

**Nouvelle expertise** — ajouter une entrée dans `lib/data/expertises.ts` uniquement. La page `/expertise/[slug]` se génère automatiquement.

**Nouveau projet** — ajouter une entrée dans `lib/data/projets.ts` uniquement. La page `/projets/[slug]` se génère automatiquement.

**Nouveau partenaire** — ajouter une entrée dans `lib/data/partenaires.ts`.
