<template>
  <section class="hero">
    <heroTitle />
    <div class="box"></div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    padding: 2rem;
    width: 100%;
  }

  section.hero {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
  }

  .box {
    position: absolute;
    width: 48rem;
    height: 24rem;
    background: linear-gradient(165deg, rgba(255, 68, 0, 0.61) 0%, rgba(37, 15, 3, 0.0) 100%);
    opacity: 0.8;
    z-index: 0;
    left: 2rem;
    bottom: 4rem;
  }
</style>

<script>
  import heroTitle from "~/components/heroTitle.vue"

  export default {
    components: {
      heroTitle
    }
  }
</script>

<script setup>

</script>