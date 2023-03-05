<template>
  <!-- <link rel="icon" type="image/x-icon" href="~/assets/favicon/favicon.ico" /> -->
  <header>
    <navbar />
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
  import navbar from '~/components/navbar.vue'
  import '~/assets/scss/main.scss'
  import '~/assets/fonts/Roboto-BlackItalic.ttf'
  import '~/assets/fonts/Poppins-Black.ttf'
  import '~/assets/fonts/Poppins-ExtraBold.ttf'

  export default {
    components: {
      navbar
    },
  }
</script>