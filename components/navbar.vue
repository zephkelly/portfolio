<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projects">Projects</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/resume" class="resume-button">Resume</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: 'Roboto';
    src: url('~/assets/fonts/Roboto-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }

  nav {
    position: absolute;
    width: 100%;
    max-width: 1280px;
    box-sizing: border-box;
    padding: 2rem;

    ul {
      display: flex;
      justify-content: flex-end;
      gap: 4rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 1.2rem;
        
        a {
          color: var(--text-main-color);
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 1rem;
          transition: color 0.15s ease-out;
          opacity: 0.8;

          &:hover {
            color: var(--accent-color);
          }
        }

        .resume-button {
          width: 5rem;
          border: 2px solid var(--accent-color);
          border-radius: 1rem;
          transition: color 0.15s ease-out, background-color 0.15s ease-out, border-color 0.15s ease-out, box-shadow 0.15s ease-out;
          color: var(--text-main-color);
          //-webkit-mask-image: linear-gradient(10deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8));
          opacity: 0.9;

          &:hover {
            box-shadow: 0rem 0rem 1.6rem 0rem #ff660045;
            -webkit-mask-image: none;
            color: var(--text-main-color);
          }
        }
      }
    }
  }
</style>

<script>
export default {

}
</script>