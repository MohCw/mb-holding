import Image from 'next/image'
import type { Partenaire } from '@/lib/data/partenaires'

interface PartenairesGridProps {
  partenaires: Partenaire[]
}

export function PartenairesGrid({ partenaires }: PartenairesGridProps) {
  const doubled = [...partenaires, ...partenaires]

  return (
    <section className="py-16 md:py-24 bg-[#e8eaf4]">
      <div className="px-8 md:px-24 max-w-screen-2xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-[#757c7d] text-center mb-10 md:mb-16 font-headline">
          Ils nous font confiance / Partenaires
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {doubled.map((p, i) => (
            <div
              key={i}
              className="shrink-0 w-[50vw] md:w-[25vw] bg-white px-6 md:px-8 py-8 md:py-10 flex items-center justify-center"
            >
              {p.logo ? (
                <div className="relative w-full h-32 md:h-20">
                  <Image
                    src={p.logo}
                    alt={p.nom}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="font-black text-xl tracking-tighter opacity-30 font-headline">
                  {p.nom}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
