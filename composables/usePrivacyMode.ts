// Shared, SSR-friendly read of the site-wide privacy mode flag.
//
// Keyed so hero + navbar (and anywhere else) share a single request and stay in
// sync. Nuxt resolves this during SSR, so the correct wording renders on first
// paint with no client-side flash.
export function usePrivacyMode() {
    const { data } = useFetch('/api/privacy', {
        key: 'privacy-mode',
        default: () => ({ enabled: false }),
    })

    return computed(() => data.value?.enabled === true)
}
