'use client'

import { useState } from 'react'
import { Turnstile } from 'next-turnstile'
import { useContactForm } from '@/lib/hooks/useContactForm'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const { status, errors, submit, reset } = useContactForm()
  const [turnstileToken, setTurnstileToken] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await submit({
      nom: fd.get('nom') as string,
      email: fd.get('email') as string,
      sujet: fd.get('sujet') as string,
      message: fd.get('message') as string,
      turnstileToken,
    })
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-6 py-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary font-headline">
          Message envoyé
        </p>
        <h3 className="text-4xl font-black tracking-tighter uppercase font-headline">
          Nous vous répondrons<br />sous 48h.
        </h3>
        <Button variant="ghost" size="sm" onClick={reset}>
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input
          id="nom"
          name="nom"
          label="Nom complet"
          placeholder="VOTRE NOM"
          error={errors.nom}
          required
        />
        <Input
          id="email"
          name="email"
          label="Adresse email"
          type="email"
          placeholder="CONTACT@ENTREPRISE.COM"
          error={errors.email}
          required
        />
      </div>

      <Input
        id="sujet"
        name="sujet"
        label="Sujet"
        placeholder="OBJET DE VOTRE DEMANDE"
        error={errors.sujet}
        required
      />

      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="DÉCRIVEZ VOTRE PROJET..."
        rows={6}
        error={errors.message}
        required
      />

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={(token: string) => setTurnstileToken(token)}
      />

      {errors.turnstileToken && (
        <p className="text-[10px] text-red-500 uppercase tracking-wider font-bold">
          {errors.turnstileToken}
        </p>
      )}

      {status === 'error' && (
        <p className="text-[10px] text-red-500 uppercase tracking-wider font-bold">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'loading'}
        className="self-start"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>
    </form>
  )
}
