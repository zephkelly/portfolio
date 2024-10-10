<template>
  <section class="card" v-on:click="redirectToPage">
    <section class="cover">
      <div class="technologies" :class="project.class">
      <img v-for="tech in project.technologies" :key="tech.alt" :title="tech.alt" :alt="tech.alt" :src="tech.url" loading="lazy"/>
      </div>
      <div class="wrapper" :class="project.class">
        <img :src="project.image" loading="lazy"/>
      </div>
    </section>
    <section class="content">
      <div>
        <div class="wrapper">
          <nuxt-link :to="project.cover" class="card-title-link"><h3 class="card-title">{{ project.title }}</h3></nuxt-link>
          <span class="label" :class="project.type"><p>{{ project.type }}</p></span>
        </div>
        <p>{{ project.description }}</p>
      </div>
      <div class="links">
        <NuxtLink :to="project.cover">Read the story</NuxtLink>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: border-color 0.15s ease-out;
    gap: 0rem;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.22);
    }

    @media (prefers-color-scheme: light) {
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.66);
      }
    }
  }

  .cover {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 350px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.12);

    @media (prefers-color-scheme: light) {
      background-color: rgba(0, 0, 0, 0.08);
    }

    .technologies {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: flex;
      gap: 0.5rem;
      height: 1.2rem;

      img {
        width: 1.2rem;
        height: 1.2rem;

        @media (prefers-color-scheme: light) {
          filter: invert(1);
          opacity: 0.8;
        }
      }
    }

    .wrapper {
      height: auto;
      width: 15.5rem;
      display: flex;
      position: relative;
      overflow: hidden;

      img {
        margin-top: 5rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.4rem 0.4rem 0rem 0rem;
        box-shadow: 0rem 2rem 0rem rgba(0, 0, 0, 0.2);
      }
    }

    .wrapper.pennyprojects {
        height: 22rem;
        width: 24rem;
    
        img {
            margin-top: 5.5rem;
        }
    
        @media (max-width: 400px) {
            height: 18rem;
            width: 15.5rem;
            margin-top: 6rem;
    
            img {
            margin-top: 0rem;
            height: 18rem;
            width: 15.5rem;
            }
        }
    }

    .wrapper.upbranched {
      height: 22rem;
      width: 20rem;

      img {
        margin-top: 5.5rem;
      }

      @media (max-width: 400px) {
        height: 18rem;
        width: 15.5rem;
        margin-top: 6rem;

        img {
          margin-top: 0rem;
          height: 18rem;
          width: 15.5rem;
        }
      }
    }

    .wrapper.ochre {
      height: 22rem;

      @media (max-width: 400px) {
        height: 18rem;
        width: 15.5rem;
        margin-top: 6rem;

        img {
          margin-top: 0rem;
          height: 18rem;
          width: 15.5rem;
        }
      }
    }

    .wrapper.lipstick {
      height: 17rem;
      width: 20rem;
      margin-top: 5rem;

      img {
        margin-top: 0rem;
      }

      @media (max-width: 1000px) {
        height: 16rem;
        width: 80%;
        margin-top:7rem;
      }

      @media (max-width: 768px) {
        height: 20rem;
        width: 60%;
        margin-top: 7rem;
      }

      @media (max-width: 400px) {
        height: 16rem;
        width: 15.5rem;
        margin-top: 6rem;

        img {
          margin-top: 0rem;
          height: 16rem;
          width: 15.5rem;
        }
      }
    }

    .wrapper.gam {
      height: 17rem;
      width: 22rem;
      margin-top: 5rem;

      img {
        margin-top: 0rem;
        border-radius: 0.6rem 0.6rem 0rem 0rem;
      }

      @media (max-width: 1000px) {
        height: 15rem;
        width: 80%;
        margin-top:7rem;
      }

      @media (max-width: 400px) {
        margin-top: 6rem;
        height: 17rem;
        width: 15.5rem;

        img {
          margin-top: 0rem;
          height: 17rem;
          width: 15.5rem;
        }
      }
    }

    .wrapper.portfolio {
      height: 22rem;
      width: 20rem;
      margin-top: 0rem;

      @media (max-width: 1000px) {
        height: 22rem;
        width: 80%;
        margin-top:2rem;
      }

      @media (max-width: 400px) {
        margin-top: 6rem;
        height: 17rem;
        width: 15.5rem;

        img {
          margin-top: 0rem;
          height: 17rem;
          width: 15.5rem;
        }
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35%;
    min-height: 140px;
    width: stretch;
    margin: 0rem 0rem 1.2rem;
    padding: 0rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);

    @media (prefers-color-scheme: light) {
      border-top: 1px solid rgba(0, 0, 0, 0.326);
    }

    @media (max-width: 1000px) {
      height: auto;
      min-height: auto;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        padding: 0rem 0.5rem;
        border-radius: 0.3rem;

        p {
          color: var(--text-main-color-light);
          font-size: 0.9rem;
          font-weight: 600;
          opacity: 0.8;

          @media (prefers-color-scheme: light) {
            color: var(--text-main-color-dark);
          }
        }
      }

      span.Client {
        background-color: rgba(47, 255, 0, 0.1);
        border: 1px solid rgb(182, 255, 195, 0.5);

        @media (prefers-color-scheme: light) {
          background-color: rgba(45, 190, 16, 0.318);
          border: 1px solid rgba(29, 68, 36, 0.5);
        }
      }

      span.Personal {
        background-color: rgba(255, 180, 0, 0.12);
        border: 1px solid rgba(255, 210, 182, 0.5);

        @media (prefers-color-scheme: light) {
          background-color: rgba(254, 156, 8, 0.372);
          border: 1px solid rgba(123, 56, 14, 0.5);
        }
      }
    }

    a.card-title-link {
      text-decoration: none;
      
      & * {
        color: var(--text-main-color);
      }

      .card-title {
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        font-weight: 500;
        margin: 1.5rem 0rem 0.5em 0rem;
      }
    }

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.3em;
      color: var(--text-secondary-color);
    }

    .links {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 1.1rem;

      a {
        color: var(--accent-color);
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--text-main-color);
          text-decoration: underline;
        }
      }

      img {
        filter: invert(1);
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
</style>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectToPage() {
      this.$router.push(this.project.cover)
    }
  }
}
</script>