<template>
  <section class="hero">
    <hero />
  </section>
  <section class="work">
    <work />
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
  }

  section.hero {
    margin-top: 18rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 768px) {
      margin-top: 14rem;
    }
  }

  section.work {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    margin-bottom: 14rem;
  }
</style>

<script>
</script>

<script setup>

</script>