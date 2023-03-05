<template>
  <section class="navbar">
    <div class="logo">
      <!-- <img src="~/assets/images/logo.png" alt="Logo"> -->
      <a><span>E</span>K</a>
    </div>
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
    <div class="socials">
      <a href="https://github.com/zephkelly" target="_blank" alt="My GitHub">
        <img class="social-svg github" src="~/assets/images/svg/github.svg" alt="GitHub">
      </a>
      <a href="https://www.linkedin.com/in/evan-kelly/" target="_blank" alt="My LinkedIn">
        <img class="social-svg linkedin" src="~/assets/images/svg/linkedin.svg" alt="LinkedIn">
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: 'Roboto';
    src: url('~/assets/fonts/Roboto-Medium.ttf');
    font-weight: 500;
    font-style: normal;
  }

  .navbar {
    display: grid;
    grid-template-columns: 0.4fr 2fr 0.4fr;
    width: 100%;
    height: 5rem;
    max-width: 1000px;
    box-sizing: border-box;
    padding: 1rem;

    nav > * {
      height: 100%;
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 4rem;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 1rem;
        
        a {
          color: var(--text-main-color);
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 1rem;
          transition: color 0.15s ease-out;
          border-radius: 0.5rem;
          opacity: 0.8;

          &:hover {
            color: white;
            background-color: #1f1f21;
          }
        }
      }
    }
  }

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 1.7rem;
    }

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 3.4rem;
      padding-left: 0.05em;
      font-family: 'Roboto', sans-serif;
      font-weight: 800;
      font-size: 1.8rem;
      font-style: italic;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      transition: opacity 0.15s ease-out;
      color: var(--background-color);
      // background-image: linear-gradient(145deg, #d9d9d9, #6b6b6b);
      background-image: linear-gradient(260deg, #ffe522, #ffab2c);
      background-clip: text;
      background-size: 150% 100%;
      -webkit-text-stroke: 4px transparent;
      
      &:hover {
        opacity: 1;
      }
      
      span {
        font-size: 2.05rem;
        margin-right: 0.05em;
        display: inline-block;
        color: transparent;
        background-size: 145% 145%;
        -webkit-text-stroke: 1px transparent;
        -webkit-background-clip: text;
      }
    }
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;

    .social-svg {
      filter: grayscale(100%) invert(100%);
      opacity: 0.8;
      height: 1.6rem;

      &:hover {
        opacity: 1;
      }
    }

    .social-svg.github {
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>

<script>
export default {
  name: 'Navbar'
}
</script>