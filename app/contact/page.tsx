import type { Metadata } from 'next'
import { ContactForm } from '@/components/features/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez MB Holding pour discuter de votre projet de construction ou d\'immobilier.',
  openGraph: {
    images: [{ url: '/logo.png', width: 400, height: 160, alt: 'MB Holding — Maître Bâtisseur' }],
  },
}

const features = [
  {
    icon: 'schedule',
    titre: 'Réponse sous 48h',
    texte: 'Nous traitons chaque demande avec attention et vous répondons dans les 48 heures ouvrées.',
  },
  {
    icon: 'security',
    titre: 'Formulaire sécurisé',
    texte: 'Vos données sont protégées. Formulaire sécurisé par Cloudflare Turnstile.',
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-16 px-8 md:px-24 bg-white border-b border-[#acb3b4]/10">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 font-headline">
            Parlons de votre projet
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-headline mb-6">
            Contactez<br />
            <span className="text-primary">MB Holding</span>
          </h1>
          <div className="h-1 w-24 bg-primary" />
        </div>
      </section>

      {/* Main */}
      <section className="py-24 px-8 md:px-24 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">

          {/* Infos */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#757c7d] mb-3 font-headline">Email</p>
              <p className="text-xl font-medium tracking-tight">mbholding221@gmail.com</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#757c7d] mb-3 font-headline">Localisation</p>
              <p className="text-xl font-medium tracking-tight">Dakar, Sénégal</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#757c7d] mb-3 font-headline">Téléphone</p>
              <p className="text-xl font-medium tracking-tight">+221 77 128 58 87</p>
              <p className="text-xl font-medium tracking-tight">+221 787 89 19 60</p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#acb3b4]/20">
              {features.map((f) => (
                <div key={f.titre} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0" aria-hidden="true">{f.icon}</span>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-tight font-headline">{f.titre}</p>
                    <p className="text-xs text-[#44475f] font-body leading-relaxed mt-1">{f.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  )
}
