<template>
  <section class="card">
    <section class="cover">
      <div class="technologies" :class="project.class">
       <img v-for="tech in project.technologies" :key="tech.alt" :title="tech.alt" :alt="tech.alt" :src="tech.url" />
      </div>
      <div class="wrapper" :class="project.class">
        <img :src="project.image" alt="project image" />
      </div>
    </section>
    <section class="content">
      <div class="wrapper">
        <h3>{{ project.title }}</h3>
        <span class="label" :class="project.type"><p>{{ project.type }}</p></span>
      </div>
      <p>{{ project.description }}</p>
      <button>
        <img src="" alt="github icon" />
      </button>
    </section>
  </section>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0rem;
  }

  .cover {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-height: 350px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.12);

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
      }
    }

    .wrapper {
      height: 100%;
      width: 15.5rem;
      overflow: hidden;

      img {
        margin-top: 4rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.4rem 0.4rem 0rem 0rem;
        box-shadow: 0rem 2rem 0rem rgba(0, 0, 0, 0.2);
      }
    }

    .wrapper.lipstick {
      height: 16rem;
      width: 20rem;
      margin-top: 6rem;

      img {
        margin-top: 0rem;
      }
    }

    .wrapper.gam {
      height: 16rem;
      width: 22rem;
      margin-top: 6rem;

      img {
        margin-top: 1rem;
        border-radius: 0.6rem 0.6rem 0rem 0rem;
      }
    }

    .wrapper.portfolio {
      height: 100%;
      width: 20rem;
      margin-top: 4rem;
    }
  }

  .content {
    height: 35%;
    min-height: 140px;
    width: stretch;
    margin: 0rem 0rem 1rem;
    padding: 0rem 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.12);

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
        }
      }

      span.Client {
        background-color: rgba(47, 255, 0, 0.1);
        border: 1px solid rgb(182, 255, 195, 0.5);
      }

      span.Personal {
        background-color: rgba(255, 180, 0, 0.12);
        border: 1px solid rgba(255, 210, 182, 0.5);
      }
    }

    h3 {
      font-family: 'Poppins', sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
      margin: 1em 0rem 0.5em 0rem;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.3em;
      color: var(--text-secondary-color);
    }

    button {
      margin-top: 2rem;
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
  }
}
</script>