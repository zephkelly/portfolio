<template>
  <section class="hero">
    <heroTitle />
  </section>
  <section class="about">
    <div class="about-text">
      <h2>About Me</h2>
      <p>
        I am a fullstack software developer with a passion for creating beautiful and functional web applications.
      </p>
    </div>
    <div class="about-image">
      <img src="~/assets/images/hero-image.jpg" alt="hero image">
    </div> 
  </section>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    padding: 2rem;
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
    height: 100vh;
    min-height: 900px;
  }

  section.hero {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
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