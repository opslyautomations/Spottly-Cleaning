import { NextRequest, NextResponse } from 'next/server'

interface QuotePayload {
  name: string
  phone: string
  email: string
  service?: string
  message?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  let body: QuotePayload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, phone, email, service, message } = body

  if (!name?.trim() || !phone?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name, phone, and email are required.' }, { status: 422 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 422 })
  }

  const webhookUrl = process.env.WEBHOOK_URL

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, service, message, source: 'spottly.com' }),
      })
    } catch (err) {
      console.error('Webhook forward failed:', err)
      // Still return success — don't block the user if the webhook is down
    }
  } else {
    // Dev mode: log submission
    console.log('[QuoteForm] New submission (WEBHOOK_URL not set):', { name, phone, email, service, message })
  }

  return NextResponse.json({ success: true }, { status: 200 })
}
