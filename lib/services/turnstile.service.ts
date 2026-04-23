const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

interface SiteverifyResponse {
  success: boolean
  'error-codes'?: string[]
}

export class TurnstileService {
  private readonly secretKey: string

  constructor() {
    const key = process.env.TURNSTILE_SECRET_KEY
    if (!key) throw new Error('TURNSTILE_SECRET_KEY is not set')
    this.secretKey = key
  }

  async verify(token: string): Promise<boolean> {
    const body = new URLSearchParams({
      secret: this.secretKey,
      response: token,
    })

    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    if (!res.ok) return false

    const data: SiteverifyResponse = await res.json()
    return data.success
  }
}
