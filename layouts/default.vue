<template>
  <Head>
    <title>Evan Kelly - Portfolio</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="/images/favicon/site.webmanifest">
    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Evan, fullstack dev & CS student. Passionate about crafting elegant, functional apps. Seeking opportunities to contribute to impactful projects. Let's chat!" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Evan Kelly" />
    <meta name="msapplication-navbutton-color" content="#1c1c20" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#1c1c20" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="google" content="notranslate" />
    <meta name="google-site-verification" content="google-site-verification" />
    <meta property="og:image" content="/images/og-image.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Evan Kelly - Portfolio" />
    <meta property="og:title" content="Evan Kelly - Portfolio" />
    <meta property="og:description" content="Evan, fullstack dev & CS student. Passionate about crafting elegant, functional apps. Seeking opportunities to contribute to impactful projects. Let's chat!" />
    <meta property="og:url" content="https://evankelly.dev" />
  </Head>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: 'Roboto';
    src: url('~/assets/fonts/Roboto-BlackItalic.ttf');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('~/assets/fonts/Poppins-Black.ttf');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('~/assets/fonts/Poppins-ExtraBold.ttf');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('~/assets/fonts/Poppins-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

  header {
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
</style>

<script>
  import '~/assets/scss/main.scss'
  import '~/assets/fonts/Roboto-BlackItalic.ttf'
  import '~/assets/fonts/Poppins-Black.ttf'
  import '~/assets/fonts/Poppins-ExtraBold.ttf'
</script>