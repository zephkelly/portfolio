<template>
  <section class="hero">
    <heroTitle />
    <div class="box"></div>
  </section>
  <section class="about">
    <div class="about-text">
      <h2>About Me</h2>
      <p>
        I am a fullstack software developer with a passion for creating beautiful and functional web applications. I have a strong background in web development and a passion for learning new technologies. I am currently working as a software developer at <a href="https://www.3dmd.com/" target="_blank">3DMD</a> where I am responsible for developing and maintaining the company's web applications.
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
    box-sizing: border-box;
    height: 100vh;
    min-height: 900px;
  }

  section.hero {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: 'Roboto', sans-serif;
  }

  .box {
    position: relative;
    width: 50rem;
    height: 20rem;
    background: linear-gradient(195deg, rgba(255, 0, 0, 0.8), rgba(37, 3, 3, 0.25));
    opacity: 0.8;
    z-index: 0;
    left: 8rem;
    bottom: 10rem;
    
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