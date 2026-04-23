'use client'

import Image from 'next/image'

interface CarouselProjetsProps {
  images: string[]
  titre?: string
}

export function CarouselProjets({ images, titre = 'Projets liés' }: CarouselProjetsProps) {
  return (
    <section className="py-20 bg-[#e8eaf4] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-24 mb-10">
        <h2 className="text-3xl font-black tracking-tighter uppercase mb-2 font-headline">{titre}</h2>
        <div className="h-1 w-12 bg-primary" />
      </div>

      <div
        className="flex gap-4 px-8 md:px-24 pb-4 overflow-x-auto"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-[380px] h-[260px] overflow-hidden bg-[#e0e2ef]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Image
              src={src}
              alt={`Projet ${i + 1}`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="380px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  )
}
