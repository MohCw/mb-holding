import Image from 'next/image'
import type { Partenaire } from '@/lib/data/partenaires'

interface PartenairesGridProps {
  partenaires: Partenaire[]
}

export function PartenairesGrid({ partenaires }: PartenairesGridProps) {
  return (
    <section className="py-24 bg-[#e8eaf4] px-8 md:px-24">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-[#757c7d] text-center mb-16 font-headline">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#acb3b4]/20 border border-[#acb3b4]/20">
          {partenaires.map((p) => (
            <div
              key={p.nom}
              className="bg-[#e8eaf4] p-10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {p.logo ? (
                <Image src={p.logo} alt={p.nom} width={120} height={48} className="object-contain" />
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
