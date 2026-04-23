import { cn } from '@/lib/utils/cn'

interface HeroSectionProps {
  eyebrow?: string
  titre: string
  titreAccent?: string
  sousTitre?: string
  backgroundImage: string
  align?: 'center' | 'left'
  minHeight?: string
  children?: React.ReactNode
}

export function HeroSection({
  eyebrow,
  titre,
  titreAccent,
  sousTitre,
  backgroundImage,
  align = 'left',
  minHeight = '70vh',
  children,
}: HeroSectionProps) {
  const isCenter = align === 'center'

  return (
    <section
      className={cn('relative pt-24 flex', isCenter ? 'items-center justify-center' : 'items-end')}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isCenter
            ? 'linear-gradient(to bottom, rgba(236,237,245,0.55) 0%, rgba(236,237,245,0.82) 100%)'
            : 'linear-gradient(to right, rgba(240,241,248,0.92) 50%, rgba(240,241,248,0.50) 100%)',
        }}
      />

      <div
        className={cn(
          'relative z-10 w-full max-w-screen-2xl mx-auto px-8',
          isCenter ? 'py-24 text-center' : 'md:px-24 pb-20',
        )}
      >
        {eyebrow && (
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 font-headline">
            {eyebrow}
          </p>
        )}

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 uppercase text-foreground font-headline">
          {titre}
          {titreAccent && (
            <>
              <br />
              <span className="text-primary">{titreAccent}</span>
            </>
          )}
        </h1>

        {sousTitre && (
          <p
            className={cn(
              'text-[#44475f] leading-relaxed font-body',
              isCenter
                ? 'text-sm md:text-base max-w-3xl mx-auto uppercase tracking-widest font-medium'
                : 'text-base max-w-xl',
            )}
          >
            {sousTitre}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
