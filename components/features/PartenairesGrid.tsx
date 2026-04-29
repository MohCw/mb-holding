import Image from 'next/image'
import type { Partenaire } from '@/lib/data/partenaires'

interface PartenairesGridProps {
  partenaires: Partenaire[]
}

export function PartenairesGrid({ partenaires }: PartenairesGridProps) {
  const doubled = [...partenaires, ...partenaires]

  return (
    <section className="py-24 bg-[#e8eaf4] px-8 md:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-[#757c7d] text-center mb-16 font-headline">
          Ils nous font confiance / Partenaires
        </h2>

        <div className="overflow-hidden">
          <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
            {doubled.map((p, i) => (
              <div
                key={i}
                className="w-[25%] md:w-[12.5%] bg-white px-4 md:px-8 py-6 md:py-10 flex items-center justify-center"
              >
                {p.logo ? (
                  <div className="relative w-full h-20 md:h-16">
                    <Image
                      src={p.logo}
                      alt={p.nom}
                      fill
                      sizes="25vw"
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
      </div>
    </section>
  )
}
