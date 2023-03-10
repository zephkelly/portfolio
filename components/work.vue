<template>
  <h2>My Work</h2>
  <section>
    <projectCard v-for="project in projects" :key="project.title" :project="project" />
  </section>
</template>

<style lang="scss" scoped>
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--text-main-color);
    margin-bottom: 2rem;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.5rem;
    min-height: 400px;

    h3 {
      padding: 2rem;
    }

    & > * {
      box-sizing: border-box;
    }
  }
</style>

<script>
import projectCard from "@/components/projectCard.vue";

const typescript = {
  name: "Typescript",
  url: "/_nuxt/assets/images/svg/typescript.png",
}

const html5 = {
  name: "HTML5",
  url: "/_nuxt/assets/images/svg/html5.png",
}

const css3 = {
  name: "CSS3",
  url: "/_nuxt/assets/images/svg/css3.png",
}

const express = {
  name: "Express",
  url: "/_nuxt/assets/images/svg/express.png",
}

const mongodb = {
  name: "MongoDB",
  url: "/_nuxt/assets/images/svg/mongodb.png",
}

const unity = {
  name: "Unity",
  url: "/_nuxt/assets/images/svg/unity3d.png",
}

const csharp = {
  name: "C#",
  url: "/_nuxt/assets/images/svg/csharp.png",
}

const dotnet = {
  name: ".NET 2.1",
  url: "/_nuxt/assets/images/svg/dotnet2-1.png",
}

export default {
  components: {
    projectCard
  },
  data() {
    return {
      projects: [
        {
          title: "Ochre & Ivy",
          class: "ochre",
          description: "A blogging website for plant-based recipes and holistic lifestyle tips",
          image: "/_nuxt/assets/images/ochre-cover.JPG",
          technologies: [typescript, html5, css3, mongodb, express],
          type: "Client"
        },
        {
          title: "Galactic Asteroid Miner",
          class: "gam",
          description: "An infinite procedurally-generated 2D physics game made in Unity",
          image: "/_nuxt/assets/images/gam-cover.JPG",
          technologies: [unity, csharp, dotnet],
          type: "Personal"
        }
      ]
    }
  }
}
</script>