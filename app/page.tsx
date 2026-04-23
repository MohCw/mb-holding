import Link from 'next/link'
import { HeroSection } from '@/components/sections/HeroSection'
import { PartenairesGrid } from '@/components/features/PartenairesGrid'
import { valeurs } from '@/lib/data/valeurs'
import { partenaires } from '@/lib/data/partenaires'

const expertiseCards = [
  {
    href: '/expertise/etude',
    icon: 'design_services',
    titre: 'Étude, Conception & Ingénierie',
    tag: 'Accompagnement AMO',
    texte: 'Études techniques, conception architecturale et structurelle, maîtrise d\'œuvre et assistance à maîtrise d\'ouvrage.',
    bg: 'bg-white',
    border: true,
  },
  {
    href: '/expertise/construction',
    icon: 'construction',
    titre: 'Construction & Industrie',
    tag: 'Bâtiment · Industrie · Forages',
    texte: 'Réalisation de bâtiments résidentiels, tertiaires et industriels. Travaux de forage et ouvrages spéciaux.',
    bg: 'bg-[#e8eaf4]',
    border: true,
  },
  {
    href: '/expertise/immobilier',
    icon: 'home_work',
    titre: 'Immobilier',
    tag: 'Promotion · Gestion · Investissement',
    texte: 'Promotion immobilière, gestion de patrimoine et conseil en investissement à haute valeur ajoutée.',
    bg: 'bg-white',
    border: true,
  },
  {
    href: '/expertise/services',
    icon: 'precision_manufacturing',
    titre: 'Services Connexes',
    tag: 'Locations d\'Engins · Prestations',
    texte: 'Location de tout type d\'engins de chantier et prestations associées à la construction.',
    bg: 'bg-[#e8eaf4]',
    border: false,
  },
]

export default function AccueilPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'MB Holding — Maître Bâtisseur',
            description: "Groupe spécialisé dans la construction, l'immobilier et les services connexes.",
            url: 'https://mbholding.sn',
            logo: 'https://mbholding.sn/logo.png',
            telephone: ['+221771285887', '+221787891960'],
            email: 'mbholding221@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Dakar',
              addressCountry: 'SN',
            },
            areaServed: ['Sénégal', "Afrique de l'Ouest"],
            knowsAbout: ['Construction', 'Immobilier', 'Ingénierie', 'BTP'],
          }),
        }}
      />
      <HeroSection
        eyebrow="Maître Bâtisseur Holding"
        titre="L'EXCELLENCE DANS"
        titreAccent="LA CONSTRUCTION"
        sousTitre="Un groupe spécialisé dans la construction, l'immobilier et les services connexes, avec une expertise diversifiée couvrant plusieurs secteurs stratégiques."
        backgroundImage="/hero-accueil.png"
        align="center"
        minHeight="70vh"
      />

      {/* Expertises */}
      <section id="expertises" className="py-32 px-8 md:px-24 bg-[#f0f1f8]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase font-headline">
                Nos Expertises
              </h2>
              <p className="text-[#44475f] text-sm font-body mb-2">
                Cliquez sur une expertise pour en savoir plus.
              </p>
              <div className="h-1 w-24 bg-primary" />
            </div>
            <p className="text-[#44475f] max-w-md font-body leading-loose">
              Une approche holistique de l&apos;ingénierie, combinant précision technique et gestion de projet de classe mondiale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#acb3b4]/10">
            {expertiseCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`group p-12 ${card.bg} ${card.border ? 'border-r' : ''} border-b border-[#acb3b4]/10 hover:bg-primary transition-all duration-300 block`}
              >
                <span className="material-symbols-outlined text-primary group-hover:text-white text-5xl mb-12 block transition-colors" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors font-headline">
                  {card.titre}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-white/60 mb-4 transition-colors">
                  {card.tag}
                </p>
                <p className="text-sm text-[#44475f] group-hover:text-white/80 leading-relaxed transition-colors font-body">
                  {card.texte}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-32 bg-white px-8 md:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase font-headline">
              Mission & Vision
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-12 md:p-16 bg-white border border-[#acb3b4]/10 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-10">Notre Mission</p>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-8 font-headline">
                  &ldquo;Construire l&apos;avenir,<br />maîtriser le présent.&rdquo;
                </h3>
                <p className="text-[#44475f] leading-relaxed font-body text-sm">
                  Construire durablement pour transformer positivement les territoires. MB Holding s&apos;engage à réaliser des projets qui respectent l&apos;environnement, favorisent l&apos;inclusion sociale et stimulent le développement économique local.
                </p>
              </div>
              <p className="mt-12 pt-8 border-t border-[#acb3b4]/20 text-[10px] uppercase tracking-widest text-[#757c7d] font-bold">
                Engagement · Durabilité · Impact local
              </p>
            </div>
            <div className="p-12 md:p-16 bg-primary flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-10">Notre Vision</p>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight mb-8 text-white font-headline">
                  Acteur clé de la transition durable en Afrique de l&apos;Ouest.
                </h3>
                <p className="text-white/80 leading-relaxed font-body text-sm">
                  Être un acteur clé de la transition durable dans le secteur du BTP et de l&apos;immobilier au Sénégal et en Afrique de l&apos;Ouest, en combinant excellence technique, innovation écologique et impact sociétal.
                </p>
              </div>
              <p className="mt-12 pt-8 border-t border-white/20 text-[10px] uppercase tracking-widest text-white/50 font-bold">
                Sénégal · Afrique de l&apos;Ouest · Innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-32 px-8 md:px-24 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase font-headline">Nos Valeurs</h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {valeurs.map((v, i) => (
              <div key={v.numero} className={`flex flex-col ${i === 1 ? 'md:mt-24' : ''}`}>
                <div className="flex items-center gap-6 mb-10">
                  <div className={`w-[104px] h-[104px] rounded-full flex items-center justify-center shrink-0 ${v.variant === 'filled' ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-[#f0f1f8] border-2 border-primary'}`}>
                    <span className={`material-symbols-outlined text-3xl ${v.variant === 'filled' ? 'text-white' : 'text-primary'}`} aria-hidden="true">
                      {v.icon}
                    </span>
                  </div>
                  <span className="text-[6rem] font-black leading-none text-primary/[0.08] select-none font-headline">
                    {v.numero}
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 font-headline">{v.titre}</h3>
                <div className="w-8 h-[3px] bg-primary mb-5" />
                <p className="text-sm text-[#44475f] leading-relaxed font-body">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartenairesGrid partenaires={partenaires} />
    </>
  )
}
