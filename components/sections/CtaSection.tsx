import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface CtaSectionProps {
  titre: string
  texte?: string
  href: string
  labelBtn: string
  dark?: boolean
}

export function CtaSection({ titre, texte, href, labelBtn, dark = true }: CtaSectionProps) {
  return (
    <section
      className="w-full relative flex items-center justify-center"
      style={{ minHeight: '60vh' }}
    >
      <div
        className="absolute inset-0"
        style={{ background: dark ? 'rgba(28,29,46,0.85)' : undefined }}
      />
      <div className="relative z-10 text-center px-8">
        <h2
          className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none font-headline ${dark ? 'text-white' : 'text-foreground'}`}
        >
          {titre}
        </h2>
        {texte && (
          <p className={`mb-10 font-body text-sm ${dark ? 'text-white/70' : 'text-[#44475f]'}`}>
            {texte}
          </p>
        )}
        <Link href={href}>
          <Button variant={dark ? 'secondary' : 'primary'} size="lg">
            {labelBtn}
          </Button>
        </Link>
      </div>
    </section>
  )
}
