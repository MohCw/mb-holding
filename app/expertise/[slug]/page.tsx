import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsGrid } from '@/components/sections/StatsGrid'
import { CarouselProjets } from '@/components/features/CarouselProjets'
import { expertises } from '@/lib/data/expertises'
import { projets as allProjets } from '@/lib/data/projets'
import type { ExpertiseSlug } from '@/lib/types/expertise'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return (['etude', 'construction', 'services', 'immobilier'] as ExpertiseSlug[]).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const expertise = expertises[slug as ExpertiseSlug]
  if (!expertise) return {}
  return {
    title: expertise.titre,
    description: expertise.hero.sousTitre,
    openGraph: {
      images: [{ url: expertise.hero.image, width: 1200, height: 630 }],
    },
  }
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params
  const expertise = expertises[slug as ExpertiseSlug]
  if (!expertise) notFound()

  const projetsLies = allProjets.filter(p => p.expertiseSlug === slug)

  return (
    <>
      <HeroSection
        eyebrow={`Expertise ${expertise.numero}`}
        titre={expertise.titre.split('&')[0].trim()}
        titreAccent={expertise.titre.includes('&') ? `& ${expertise.titre.split('&')[1].trim()}` : undefined}
        sousTitre={expertise.hero.sousTitre}
        backgroundImage={expertise.hero.image}
        align="left"
        minHeight="70vh"
      />

      {/* Description */}
      <section className="py-24 px-8 md:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 font-headline">Notre approche</h2>
            <div className="h-1 w-16 bg-primary mb-8" />
            <ul className="space-y-5">
              {expertise.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary shrink-0 text-xl" aria-hidden="true">check_circle</span>
                  <span className="text-sm text-[#44475f] font-body">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {expertise.description.map((para, i) => (
              <p
                key={i}
                className={`font-body leading-relaxed ${i === 0 ? 'text-xl text-foreground' : 'text-base text-[#44475f]'}`}
              >
                {para}
              </p>
            ))}
            <StatsGrid stats={expertise.stats} />
          </div>
        </div>
      </section>

      {projetsLies.length > 0 ? (
        <section className="py-24 px-8 md:px-24 bg-[#f0f1f8]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6 font-headline">Projets Liés</h2>
            <div className="h-1 w-16 bg-primary mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetsLies.map(projet => (
                <Link key={projet.slug} href={`/projets/${projet.slug}`} className="group block h-full">
                  <div className="relative h-80 w-full overflow-hidden bg-[#e8eaf4]">
                     <Image 
                       src={projet.heroImage} 
                       alt={projet.nom} 
                       fill 
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       className="object-cover group-hover:scale-105 transition-transform duration-700" 
                     />
                  </div>
                  <div className="p-8 bg-white border border-[#acb3b4]/10 group-hover:bg-primary transition-colors duration-300">
                    <h3 className="text-2xl font-bold uppercase tracking-tight font-headline group-hover:text-white transition-colors">{projet.nom}</h3>
                    <p className="text-xs font-bold tracking-widest uppercase text-primary group-hover:text-white/80 mt-2 transition-colors">{projet.type}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <CarouselProjets images={expertise.projets} />
      )}
    </>
  )
}
