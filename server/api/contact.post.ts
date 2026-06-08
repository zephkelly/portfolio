import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

type ContactBody = {
    name?: string
    email?: string
    message?: string
    honeypot?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
    const { name, email, message, honeypot } = await readBody<ContactBody>(event) ?? {}

    // Honeypot: a real user never fills the hidden field. If it's set, this is
    // almost certainly a bot — silently drop the message but return success so
    // the bot gets no signal it was caught.
    if (honeypot && honeypot.trim()) {
        return { ok: true }
    }

    // Validate input
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        throw createError({ statusCode: 400, statusMessage: 'Please fill out all fields.' })
    }

    if (!EMAIL_REGEX.test(email)) {
        throw createError({ statusCode: 400, statusMessage: 'Please provide a valid email address.' })
    }

    const config = useRuntimeConfig(event)
    const { sesRegion, contactFromEmail, contactToEmail } = config

    if (!contactFromEmail || !contactToEmail) {
        // Misconfiguration — surface as a server error rather than silently dropping the message.
        throw createError({ statusCode: 500, statusMessage: 'Contact form is not configured.' })
    }

    // Credentials are resolved automatically from the EC2 instance's IAM role.
    const ses = new SESClient({ region: sesRegion })

    try {
        await ses.send(new SendEmailCommand({
            // From must be a verified SES identity.
            Source: contactFromEmail,
            Destination: { ToAddresses: [contactToEmail] },
            // Lets you reply straight to the person who filled out the form.
            ReplyToAddresses: [email],
            Message: {
                Subject: { Data: `Portfolio contact from ${name}`, Charset: 'UTF-8' },
                Body: {
                    Text: {
                        Data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
                        Charset: 'UTF-8',
                    },
                },
            },
        }))
    } catch (error) {
        // Log the real SES error to the server so failures are diagnosable.
        console.error('[contact] SES send failed:', error)
        // NOTE: use 500, not 502/503/504 — Cloudflare intercepts those gateway
        // statuses and shows its own branded error page instead of passing ours through.
        throw createError({ statusCode: 500, statusMessage: 'Failed to send message.' })
    }

    return { ok: true }
})
