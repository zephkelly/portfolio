<template>
  <Head>
    <Title>Evan Kelly - Home</Title>
    <meta name="description" content="Evan, fullstack dev & CS student. Passionate about crafting elegant, functional apps. Seeking opportunities to contribute to impactful projects. Let's chat!" />
  </Head>
  <section class="hero">
    <hero />
  </section>
  <section class="work">
    <work />
  </section>
    <section class="education">
        <education />
    </section>
    <section class="skills">
        <skills />
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

    @media (max-width: 400px) {
      margin-top: 12.5rem;
    }
  }

  section.work {
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    margin-bottom: 10rem;

    @media (max-width: 400px) {
      margin-top: 6rem;
      margin-bottom: 8rem;
    }
  }

  section.education {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    margin-bottom: 10rem;

    @media (max-width: 400px) {
      margin-top: 6rem;
      margin-bottom: 8rem;
    }
  }

  section.skills {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    margin-bottom: 14rem;

    @media (max-width: 400px) {
      margin-top: 6rem;
      margin-bottom: 8rem;
    }
  }
</style>

<script>
</script>

<script setup>

</script>