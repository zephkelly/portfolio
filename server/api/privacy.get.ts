// Public read of the privacy mode flag. The site uses this to decide the hero
// wording and whether to show the resume button. Read-only and unauthenticated.
export default defineEventHandler(async () => {
    return { enabled: await getPrivacyMode() }
})
