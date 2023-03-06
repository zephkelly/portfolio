<template>
  <section class="hero">
    <Hero />
  </section>
  <section class="about">
    <h2>My Work</h2>
  </section>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    height: auto;
    // min-height: 900px;
  }

  section.hero {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 6rem;
  }

  .about {
    margin-top: 6rem;
    height: 2000px;
  }
</style>

<script>
</script>

<script setup>

</script>