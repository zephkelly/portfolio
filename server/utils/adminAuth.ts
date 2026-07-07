// Lightweight, session-only admin auth.
//
// Deliberately NOT a persistent cookie session (nuxt-auth-utils et al.): the
// requirement is that reloading the admin page logs you straight back out. So
// login returns a short-lived HMAC token that the client holds in memory only.
// A page reload discards it and the login screen returns. Nothing is stored in
// a cookie or on the server, and the token is useless once it expires.

import { createHmac, timingSafeEqual } from 'node:crypto'
import type { H3Event } from 'h3'

// Tokens are valid for 30 minutes — long enough for a quick admin session,
// short enough that a leaked token is near-worthless.
const TOKEN_TTL_MS = 30 * 60 * 1000

function base64url(input: Buffer | string): string {
    return Buffer.from(input)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '')
}

function getSecret(event: H3Event): string {
    const { adminSecret, adminPassword } = useRuntimeConfig(event)
    // Fall back to the password so a working config doesn't require a separate
    // ADMIN_SECRET; setting an explicit ADMIN_SECRET is still recommended.
    const secret = adminSecret || adminPassword
    if (!secret) {
        throw createError({ statusCode: 500, statusMessage: 'Admin auth is not configured.' })
    }
    return secret
}

function sign(payload: string, secret: string): string {
    return base64url(createHmac('sha256', secret).update(payload).digest())
}

// Constant-time string comparison that also resists length leaks.
export function safeEqual(a: string, b: string): boolean {
    const bufA = Buffer.from(a)
    const bufB = Buffer.from(b)
    if (bufA.length !== bufB.length) return false
    return timingSafeEqual(bufA, bufB)
}

export function issueAdminToken(event: H3Event): string {
    const secret = getSecret(event)
    // Payload carries only an expiry; there is no user data to protect.
    const payload = base64url(JSON.stringify({ exp: Date.now() + TOKEN_TTL_MS }))
    return `${payload}.${sign(payload, secret)}`
}

function isValidToken(event: H3Event, token: string): boolean {
    const secret = getSecret(event)
    const [payload, signature] = token.split('.')
    if (!payload || !signature) return false
    if (!safeEqual(signature, sign(payload, secret))) return false

    try {
        const { exp } = JSON.parse(Buffer.from(payload, 'base64').toString('utf8'))
        return typeof exp === 'number' && exp > Date.now()
    } catch {
        return false
    }
}

// Guard for admin-only endpoints. Throws 401 unless a valid Bearer token is
// present. Call at the top of any handler that mutates admin state.
export function requireAdmin(event: H3Event): void {
    const header = getHeader(event, 'authorization') || ''
    const token = header.startsWith('Bearer ') ? header.slice(7) : ''
    if (!token || !isValidToken(event, token)) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }
}
