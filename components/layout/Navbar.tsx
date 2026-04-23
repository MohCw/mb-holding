'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '@/lib/data/navigation'
import { cn } from '@/lib/utils/cn'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl transition-all">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="MB Holding" width={120} height={48} className="h-12 w-auto" priority />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-headline font-bold uppercase tracking-tighter transition-all',
                  active
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-slate-500 hover:text-primary',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-foreground origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[2px] bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[2px] bg-foreground origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-headline font-bold uppercase tracking-tighter text-lg text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
