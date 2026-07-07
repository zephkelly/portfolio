// Persistent store for the site-wide "privacy mode" flag.
//
// When enabled, the public site softens the "looking for work" wording and the
// resume is hidden AND made unreachable (see server/routes/resume.pdf.get.ts).
// The flag lives in Nitro's `admin` storage mount (filesystem-backed — see the
// `nitro.storage` config in nuxt.config.ts), so it survives PM2 reloads and
// stays active for every visitor until an admin turns it off again.
//
// NOTE: the backing directory (`.data/admin`) is NOT part of the deploy bundle,
// so a fresh deploy resets privacy mode to OFF — the safe default.

const PRIVACY_KEY = 'privacy-mode'

export async function getPrivacyMode(): Promise<boolean> {
    const value = await useStorage('admin').getItem<boolean>(PRIVACY_KEY)
    return value === true
}

export async function setPrivacyMode(enabled: boolean): Promise<void> {
    await useStorage('admin').setItem(PRIVACY_KEY, enabled === true)
}
