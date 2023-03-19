<template>
  <h1 class="title">{{ data.content.title }}</h1>
  <section class="info-panel">
    <div class="about">
      <div class="info">
        <p class="label">Type</p>
        <p>{{ data.content.type }}</p>
      </div>
      <div class="info">
        <p class="label">Development</p>
        <p>{{ data.content.time }}</p>
      </div>
      <div class="info github">
        <p class="label">GitHub</p>
        <a v-if="data.content.github.url" :href="data.content.github.url">{{ data.content.github.label }}</a>
        <p v-else>{{ data.content.github.label }}</p>
      </div>
      <div class="info live">
        <p class="label">Live</p>
        <a :href="data.content.link.url">{{ data.content.link.label }}</a>
      </div>
    </div>
    <div class="tech" :class="data.class">
      <div class="info">
        <p class="label">Tech</p>
        <div class="images">
          <div v-for="tech in data.content.technologies" class="wrapper">
            <img :src="tech.url"/>
            <p>{{ tech.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="overview">
    <h2 class="label">Overview</h2>
    <p class="description">{{ data.content.overview }}</p>
  </section>
  <section class="design">
    <h2 class="label">Design</h2>
    <p v-for="desc in data.content.design.descriptions" class="description">{{ desc }}</p>
  </section>
  <section class="development">
    <h2 class="label">Development</h2>
    <p v-for="desc in data.content.development.descriptions" class="description">{{ desc }}</p>
  </section>
  <section class="gallery">
    <h2 class="label">Gallery</h2>
    <div class="images">
      <div v-for="image in data.content.gallery" class="wrapper">
        <div class="container">
          <img :class="image.type" :src="image.url" loading="lazy"/>
          <p>{{ image.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .title {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    color: var(--text-main-color);
    margin-bottom: 1.4rem;

    @media (max-width: 400px) {
      font-size: 2.6rem;
      margin-bottom: 2rem;
    }
  }

  .info-panel {
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.6rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    opacity: 0.8;
    margin-bottom: 4rem;

    @media (prefers-color-scheme: light) {
      background-color: rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {  
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      gap: 2rem;

      .info.github {
        max-width: 80%;
      }

      .info.live {
        max-width: 80%;
      }
    }

    @media (max-width: 400px) {
      padding: 1.5rem;
      gap: 1.5rem;
    }

    .about {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      height: auto;
      gap: 1rem;

      @media (max-width: 768px) {
        gap: 2rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }
    }

    .tech.gam {
      height: 5.2rem;
    }
    
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: center;
      height: 4rem;
      max-width: 100%;

      &:last-of-type {
        height: 5.2rem;
      }

      a {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        color: var(--accent-color);
        margin-bottom: 0.2rem;
        text-align: start;
        text-decoration: none;
        transition: color 0.2s ease-out, border-bottom 0.2s ease-out;

        @media (max-width: 400px) {
          font-size: 0.9rem;
        }

        &:hover {
          color: var(--text-main-color);
          text-decoration: underline;
        }
      }

      p {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        color: var(--text-main-color);
        text-align: start;
      }

      p.label {
        font-weight: 400;
        color: var(--text-secondary-color);
        margin-bottom: 0.6rem;
        opacity: 0.6;
      }

      @media (max-width: 768px) {
        &:last-of-type {
          height: auto;
        }
      }

    }

    .images {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;
      width: 100%;
      height: 100%;

      @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem 0.5rem;

        .wrapper {
          img {
            width: 1rem;
            height: 1rem;
          }

          p {
            font-size: 0.6rem;
          }
        }
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 3.6rem;

        img {
          width: 2rem;
          height: 2rem;
          margin-bottom: 0.6rem;

          @media (prefers-color-scheme: light) {
            filter: invert(1);
          }
        }

        p {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--text-main-color);
          text-align: center;
          margin-bottom: 0rem;
        }
      }
    }
  }

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--text-main-color);
    margin-bottom: 0.8rem;
  }

  section.overview {
    margin-top: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;

    @media (max-width: 768px) {
      margin-top: 1.2rem;
    }
  }

  section.design {
    margin-top: 1.6rem;

    @media (max-width: 400px) {
      margin-top: 1.6rem;
    }
  }

  section.development {
    margin-top:1.6rem;
  }

  section.gallery {
    margin-top: 1.6rem;

    @media (max-width: 768px) {
      margin-top: 2.4rem;
    }

    .images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        .container {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0.5rem;

          @media (max-width: 768px) {
            max-height: 600px;
          }

         @media (prefers-color-scheme: light) {
            border: 1px solid rgba(0, 0, 0, 0.198);
          }
        }

        p {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 1rem;
          color: var(--text-secondary-color);
          width: 100%;
          text-align: left;
          padding: 1rem;
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 0.5rem 0.5rem 0rem 0rem;
          max-height: 600px;

          @media (prefers-color-scheme: light) {
            border-bottom: 1px solid rgba(0, 0, 0, 0.198);
          }

          @media (max-width: 768px) {
            max-height: 400px;
          }
        }
      }
    }
  }

  p.description {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-secondary-color);
    margin-bottom: 0.8rem;
    line-height: 1.6em;
    text-align: start;
  }
</style>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted() {
    const content = this.$props.data.content;

  }
}
</script>