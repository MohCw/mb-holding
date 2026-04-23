'use client'

import { useState } from 'react'
import { ContactSchema } from '@/lib/validations/contact.schema'
import type { ContactFormData } from '@/lib/validations/contact.schema'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  async function submit(data: ContactFormData) {
    setErrors({})

    const result = ContactSchema.safeParse(data)
    if (!result.success) {
      const fieldErrors: typeof errors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData
        fieldErrors[field] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      if (!res.ok) throw new Error('server_error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function reset() {
    setStatus('idle')
    setErrors({})
  }

  return { status, errors, submit, reset }
}
