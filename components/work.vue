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

    @media (max-width: 400px) {
      gap: 3rem;
    }
  }

  .card {
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.5rem;
    min-height: 400px;
    min-width: 300px;

    @media (prefers-color-scheme: light) {
      border: 1px solid rgba(0, 0, 0, 0.326);
    }

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
          title: "Upbranched",
          class: "upbranched",
          description: "A social media platform built around the idea of branching communities. Created as an alternative to Reddit",
          image: "/images/upbranched-cover.JPG",
          technologies: [ t.nuxt3, t.vue3, t.vite, t.sass, t.ts, t.postgresql],
          type: "Personal",
          cover: "/covers/upbranched",
          github: "https://github.com/zephkelly/upbranched",
          live: "https://upbranched.com"
        },
        {
          title: "Ochre & Ivy",
          class: "ochre",
          description: "A blogging website made without a framework. For plant-based recipes and holistic lifestyle tips",
          image: "/images/ochre-cover.webp",
          technologies: [ t.vite, t.ts, t.css, t.mongodb, t.express],
          type: "Client",
          cover: "/covers/ochre-and-ivy",
          github: "https://github.com/zephkelly/ochre-ivy",
          live: "https://ochreivy.com"
        },
        {
          title: "Galactic Asteroid Miner",
          class: "gam",
          description: "An infinite, procedurally-generated, 2D physics game made in Unity3D",
          image: "/images/gam-cover.webp",
          technologies: [t.unity, t.csharp, t.dotnet],
          type: "Personal",
          cover: "/covers/galactic-asteroid-miner"
        },
        {
          title: 'The Lipstick Hippy',
          class: "lipstick",
          description: "An online retail store for natural and organic beauty products, developed using online editor Wix",
          image: "/images/lipstick-cover.webp",
          technologies: [t.wix],
          type: "Client",
          cover: "/covers/the-lipstick-hippy"
        },
        {
          title: "Portfolio",
          class: "portfolio",
          description: "This portfolio you're on right now! Built with Nuxt3 and Vue3",
          image: "/images/portfolio-cover.webp",
          technologies: [t.ts, t.sass, t.vue3, t.nuxt3],
          type: "Personal",
          cover: "/covers/portfolio",
          github: "https://github.com/zephkelly/portfolio",
          live: "https://evankelly.dev"
        },
      ]
    }
  }
}
</script>