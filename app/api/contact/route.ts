import { NextRequest, NextResponse } from 'next/server'
import { ContactSchema } from '@/lib/validations/contact.schema'
import { TurnstileService } from '@/lib/services/turnstile.service'
import { EmailService } from '@/lib/services/email.service'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = ContactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten().fieldErrors }, { status: 422 })
  }

  const { turnstileToken, ...emailData } = result.data

  const turnstile = new TurnstileService()
  const valid = await turnstile.verify(turnstileToken)
  if (!valid) {
    return NextResponse.json({ error: 'Turnstile verification failed' }, { status: 403 })
  }

  const emailService = new EmailService()
  await emailService.sendContact(emailData)

  return NextResponse.json({ success: true }, { status: 200 })
}
