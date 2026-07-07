// Serves the resume at /resume.pdf.
//
// The file used to live in public/ (served statically). It was moved to
// server/assets/ so this handler can gate access: when privacy mode is on the
// resume must be completely unreachable, not merely unlinked from the nav.
// Hiding the button alone would leave the static file directly fetchable.
export default defineEventHandler(async (event) => {
    if (await getPrivacyMode()) {
        throw createError({ statusCode: 404, statusMessage: 'Not Found' })
    }

    const pdf = await useStorage('assets:server').getItemRaw('resume.pdf')
    if (!pdf) {
        throw createError({ statusCode: 404, statusMessage: 'Not Found' })
    }

    setHeader(event, 'Content-Type', 'application/pdf')
    setHeader(event, 'Content-Disposition', 'inline; filename="Evan-Kelly-Resume.pdf"')
    return pdf
})
