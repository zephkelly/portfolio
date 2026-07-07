// Admin-only: set the site-wide privacy mode flag. Requires a valid Bearer
// token issued by /api/admin/login. requireAdmin / setPrivacyMode are
// auto-imported from server/utils.
type PrivacyBody = {
    enabled?: boolean
}

export default defineEventHandler(async (event) => {
    requireAdmin(event)

    const { enabled } = (await readBody<PrivacyBody>(event)) ?? {}
    if (typeof enabled !== 'boolean') {
        throw createError({ statusCode: 400, statusMessage: '`enabled` must be a boolean.' })
    }

    await setPrivacyMode(enabled)
    return { enabled }
})
