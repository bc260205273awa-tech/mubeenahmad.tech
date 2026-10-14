'use server'

export interface ContactActionResult {
  success: boolean
  message: string
  errors?: {
    name?: string
    email?: string
    message?: string
  }
}

export async function submitContactForm(
  prevState: ContactActionResult | null,
  formData: FormData
): Promise<ContactActionResult> {
  // Honeypot field for bot deterrence
  const honeypot = formData.get('website')?.toString()
  if (honeypot && honeypot.trim().length > 0) {
    // Silently return success to avoid bot retries
    return {
      success: true,
      message: 'Thank you. Your message has been received directly. I will reply to you within 24 hours.',
    }
  }

  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  const errors: { name?: string; email?: string; message?: string } = {}

  if (!name || name.length < 2) {
    errors.name = 'Please provide your name.'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please provide a valid email address.'
  }

  if (!message || message.length < 10) {
    errors.message = 'Please provide a message with at least 10 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted fields below.',
      errors,
    }
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: 'mubeenahma1123@gmail.com',
          reply_to: email,
          subject: `Portfolio Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      })

      if (!response.ok) {
        throw new Error(`Resend API returned status ${response.status}`)
      }
    } else {
      // Direct console log for development and zero-config verification
      console.log(`[Contact Form] From: ${name} <${email}>\nMessage: ${message}`)
    }

    return {
      success: true,
      message: 'Thank you. Your message has been received directly. I will reply to you within 24 hours.',
    }
  } catch (error) {
    console.error('Contact submission error:', error)
    return {
      success: false,
      message: 'Unable to send message at this time. Please email me directly at mubeenahma1123@gmail.com.',
    }
  }
}
