import { z } from 'zod'

export const ContactSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  sujet: z.string().min(3, 'Le sujet doit contenir au moins 3 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  turnstileToken: z.string().min(1, 'Vérification anti-bot requise'),
})

export type ContactFormData = z.infer<typeof ContactSchema>
