// Verify the hardcoded admin credentials and hand back a short-lived,
// in-memory-only token. safeEqual / issueAdminToken / getPrivacyMode are
// auto-imported from server/utils.
type LoginBody = {
    username?: string
    password?: string
}

export default defineEventHandler(async (event) => {
    const { username, password } = (await readBody<LoginBody>(event)) ?? {}
    const { adminUsername, adminPassword } = useRuntimeConfig(event)

    if (!adminUsername || !adminPassword) {
        throw createError({ statusCode: 500, statusMessage: 'Admin login is not configured.' })
    }

    // Always compare both fields (no early return) so success/failure take the
    // same path, and use a generic error that never reveals which field was wrong.
    const okUser = safeEqual(username ?? '', adminUsername)
    const okPass = safeEqual(password ?? '', adminPassword)

    if (!okUser || !okPass) {
        throw createError({ statusCode: 401, statusMessage: 'Invalid credentials.' })
    }

    return {
        token: issueAdminToken(event),
        privacyMode: await getPrivacyMode(),
    }
})
