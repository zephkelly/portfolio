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
    min-width: 300px;

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
import technologies from "@/assets/json/technologies.json";

const t = technologies.reduce((acc, tech) => {
  acc[tech.name] = tech;
  return acc;
}, {});

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
          description: "A fullstack blogging website made without a framework. For plant-based recipes and holistic lifestyle tips",
          image: "/images/ochre-cover.JPG",
          technologies: [ t.vite, t.ts, t.css, t.mongodb, t.express, t.nginx],
          type: "Client"
        },
        {
          title: 'The Lipstick Hippy',
          class: "lipstick",
          description: "An online retail store for natural and organic beauty products, developed using WYSIWYG editor Wix",
          image: "/images/lipstick-cover.JPG",
          technologies: [t.wix],
          type: "Client"
        },
        {
          title: "Galactic Asteroid Miner",
          class: "gam",
          description: "An infinite, procedurally-generated, 2D physics game made in Unity3D",
          image: "/images/gam-cover.JPG",
          technologies: [t.unity, t.csharp, t.dotnet],
          type: "Personal"
        },
        {
          title: "Portfolio",
          class: "portfolio",
          description: "This portfolio you're on right now! Built with Nuxt3 and Vue3",
          image: "/images/portfolio-cover.JPG",
          technologies: [t.ts, t.sass, t.vue3, t.nuxt3],
          type: "Personal"
        },
      ]
    }
  }
}
</script>