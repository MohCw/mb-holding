import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { StatsGrid } from '@/components/sections/StatsGrid'
import { projets } from '@/lib/data/projets'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projets.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const projet = projets.find((p) => p.slug === slug)
  if (!projet) return {}
  return {
    title: projet.nom,
    description: projet.description[0],
    openGraph: {
      images: [{ url: projet.heroImage, width: 1200, height: 630 }],
    },
  }
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params
  const projet = projets.find((p) => p.slug === slug)
  if (!projet) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <Image
            src={projet.heroImage}
            alt={projet.nom}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full px-8 pb-16 md:px-24">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block font-headline">
                Résidence Privée
              </span>
              <h1 className="text-white text-7xl md:text-9xl font-black tracking-tighter leading-none mb-4 font-headline">
                {projet.nom}
              </h1>
              <p className="text-white/80 tracking-widest uppercase text-sm flex items-center gap-2 font-body">
                <span className="material-symbols-outlined text-primary text-lg" aria-hidden="true">location_on</span>
                {projet.lieu}
              </p>
            </div>
            <div className="bg-[#f0f1f8]/90 backdrop-blur-md p-8 min-w-[280px]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#44475f] text-xs uppercase tracking-tighter font-body">Statut</span>
                <span className="bg-[#dde0f5] text-[#1c1f3a] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {projet.statut}
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-[#acb3b4]/30 pb-2">
                  <span className="text-[#44475f] text-xs uppercase font-body">Année</span>
                  <span className="text-foreground font-bold text-sm">{projet.annee}</span>
                </div>
                <div className="flex justify-between border-b border-[#acb3b4]/30 pb-2">
                  <span className="text-[#44475f] text-xs uppercase font-body">Typologie</span>
                  <span className="text-foreground font-bold text-sm">{projet.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-32 bg-[#f0f1f8]">
        <div className="max-w-screen-xl mx-auto px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-5xl font-black tracking-tighter leading-tight font-headline">
                L&apos;ART DE VIVRE <br />
                <span className="text-primary">L&apos;EXCEPTION</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              {projet.description.map((para, i) => (
                <p key={i} className={`font-body leading-relaxed ${i === 0 ? 'text-xl text-[#44475f]' : 'text-base text-[#44475f]/75'}`}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-32 bg-[#f0f1f8]">
        <div className="flex flex-col md:flex-row gap-4 px-4">
          <div className="w-full md:w-3/5 h-[500px] relative">
            <Image
              src={projet.gallery[0]}
              alt={`${projet.nom} — vue principale`}
              fill
              className="object-contain transition-all duration-700"
              sizes="60vw"
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            {projet.gallery.slice(1).map((img, i) => (
              <div key={i} className="flex-1 relative overflow-hidden">
                <Image
                  src={img}
                  alt={`${projet.nom} — détail ${i + 2}`}
                  fill
                  className="object-contain"
                  sizes="40vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-32 bg-[#e8eaf4]">
        <div className="max-w-screen-xl mx-auto px-8 md:px-24">
          <div className="flex items-center gap-8 mb-16">
            <div className="h-[1px] flex-grow bg-[#acb3b4]/30" />
            <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-[#44475f] font-headline">
              Données Techniques
            </h3>
          </div>
          <StatsGrid stats={projet.specs.slice(0, 3)} />
        </div>
      </section>

      {/* Plan */}
      <section className="py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="p-8 bg-[#f0f1f8] border border-[#acb3b4]/10">
              <Image
                src={projet.planImage}
                alt={`Plan de masse — ${projet.nom}`}
                width={600}
                height={400}
                className="w-full"
              />
            </div>
            <div className="space-y-8">
              <span className="text-primary font-bold text-[10px] tracking-widest uppercase font-headline">
                Plan de Masse
              </span>
              <h2 className="text-5xl font-black tracking-tighter leading-none font-headline">
                OPTIMISATION SPATIALE
              </h2>
              <p className="font-body text-[#44475f] leading-relaxed">
                Chaque détail a été soigneusement étudié afin de répondre aux exigences d’un art de vivre moderne, alliant intimité, détente et qualité de vie, dans un environnement paisible et sécurisé.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">architecture</span>
                  <span className="text-xs uppercase font-bold tracking-widest">Étude technique Certifiée</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">precision_manufacturing</span>
                  <span className="text-xs uppercase font-bold tracking-widest">Structure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="w-full h-screen relative bg-zinc-900 flex items-center justify-center">
        <Image
          src={projet.heroImage}
          alt={projet.nom}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-8">
          <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none font-headline">
            UNE VISION<br />DEVENUE RÉALITÉ.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 text-white hover:text-primary transition-colors"
          >
            <span className="font-bold uppercase tracking-[0.4em] text-xs font-headline">
              Discuter de votre projet
            </span>
            <span className="material-symbols-outlined" aria-hidden="true">trending_flat</span>
          </Link>
        </div>
      </section>
    </>
  )
}
