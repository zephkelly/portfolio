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
    box-sizing: border-box;
    padding: 2rem;

    ul {
      display: flex;
      justify-content: flex-end;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
        text-transform: uppercase;
        
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
          width: 8rem;
          border: 3px solid var(--accent-color);
          border-radius: 2rem;
          transition: color 0.15s ease-out, background-color 0.15s ease-out, border-color 0.15s ease-out;
          color: var(--text-main-color);
          -webkit-mask-image: linear-gradient(10deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8));
          opacity: 0.9;

          &:hover {
            background-color: var(--accent-color);
            color: var(--background-color);
            border-color: transparent;
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