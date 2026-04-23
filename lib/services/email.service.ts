import { Resend } from 'resend'
import type { ContactFormData } from '@/lib/validations/contact.schema'
import { ContactEmail } from '@/emails/templates/ContactEmail'

const FROM_ADDRESS = process.env.EMAIL_FROM || 'onboarding@resend.dev';
const TO_ADDRESS = process.env.EMAIL_TO || 'mohamedcamaraj@gmail.com';

export class EmailService {
  private readonly client: Resend

  constructor() {
    const key = process.env.RESEND_API_KEY
    if (!key) throw new Error('RESEND_API_KEY is not set')
    this.client = new Resend(key)
  }

  async sendContact(data: Omit<ContactFormData, 'turnstileToken'>): Promise<void> {
    const { error } = await this.client.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: data.email,
      subject: `[MB Holding] ${data.sujet}`,
      react: ContactEmail(data),
    })

    if (error) throw new Error(`Email send failed: ${error.message}`)
  }
}
