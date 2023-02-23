<template>
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

  header {
    display: flex;
    justify-content: center;
    background-color: var(--background-color);
  }

  main {
    display: flex;
    height: 100%;
  }

</style>

<script>
  import navbar from '~/components/navbar.vue'
  import '~/assets/scss/main.scss'
  import '~/assets/fonts/Roboto-BlackItalic.ttf'

  export default {
    components: {
      navbar
    },

  }
</script>