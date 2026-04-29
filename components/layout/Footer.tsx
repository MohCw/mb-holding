import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/lib/data/navigation'

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full max-w-screen-2xl mx-auto gap-8">

        <div className="flex flex-col items-center md:items-start gap-2">
          <Image src="/logo.png" alt="MB Holding" width={100} height={40} className="h-10 w-auto" />
          <p className="text-[10px] font-body uppercase tracking-widest text-slate-400">
            Dakar, Sénégal
          </p>
          <p className="text-[10px] font-body uppercase tracking-widest text-slate-400">
            +221 77 128 58 87 · +221 78 789 19 60
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs uppercase tracking-widest text-slate-400 hover:text-primary underline transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400 text-center md:text-right">
          © {new Date().getFullYear()} Groupe Maître Bâtisseur Holding (MB Holding).<br className="hidden md:block" /> Tous droits réservés.
        </p>

      </div>
    </footer>
  )
}
