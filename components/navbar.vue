<template>
  <section ref="navSection" class="navbar active">
    <div v-show="renderElements" ref="navButton" class="button" style="display: none;">
      <button>
        <img class="nav-svg" src="~/assets/images/svg/menu.svg" alt="Menu">
      </button>
    </div>
    <div v-show="renderElements" ref="navLogo" class="logo">
      <a><span>E</span>K</a>
    </div>
    <nav v-show="renderElements" ref="navLinks">
      <ul>
        <li>
          <nuxt-link to="/work">Work</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About me</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <div v-show="renderElements" ref="navLogoMobile" class="logo mobile" style="display: none">
      <a><span>E</span>K</a>
    </div>
    <div ref="navRefs" class="socials" style="display: none;">
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

  .button {
    min-width: 3.7rem;

    button {
      background: none;
      border: none;
      padding: 0rem;
      cursor: pointer;
      opacity: 0.8;

      img {
        width: 2rem;
        height: auto;
        filter: invert(1);
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .navbar {
    display: grid;
    position: fixed;
    grid-template-columns: 0.4fr 2fr 0.4fr;
    width: 100%;
    height: 5rem;
    max-width: 1000px;
    box-sizing: border-box;
    padding: 1rem 2rem;
    background-color: var(--b-c-dark-opaque);
    backdrop-filter: blur(6px);
    z-index: 1;
    transition: transform 0.2s ease-out;

    nav  {
      display: flex;
      justify-content: center;
      
      & > * {
        height: 100%;
      }

      ul {
        display: flex;
        justify-content: center;
        gap: 2rem;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          font-family: 'Roboto', sans-serif;
          font-weight: 500;
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
              opacity: 1;
              background-color: #303032;
            }
          }
        }
      }
    }
  }

  .logo.mobile {
    justify-content: center;
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
      width: 2.8rem;
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
      background-image: linear-gradient(260deg, #ffe203, #ffbb55);
      background-clip: text;
      background-size: 150% 100%;
      -webkit-text-stroke: 4px transparent;
      
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

    @media (max-width: 786px) {
      gap: 0.5rem;
    }

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
import { ref } from 'vue'

const navSection = ref(null);
const navButton = ref(null);
const navLinks = ref(null);
const navRefs = ref(null);
const navLogo = ref(null);
const navLogoMobile = ref(null);

export default {
  setup() {
    onMounted(() => {
      renderElements = true;
      navRefs.value.style.display = "flex";

      handleResize();
      window.addEventListener('resize', handleResize)

      lastScrollY = window.scrollY;
      window.addEventListener('scroll', toggleNavMobile)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)

      window.removeEventListener('scroll', toggleNavMobile)
    })

    return {
      navSection,
      navButton,
      navLogo,
      navLogoMobile,
      navLinks,
      navRefs,
      renderElements,
    }
  }
};

let renderElements = false;
function handleResize() {
  if (window.innerWidth < 1000) {
    navButton.value.style.display = "flex";
    navLogo.value.style.display = "none";
    navLinks.value.style.display = "none";
    navLogoMobile.value.style.display = "flex";
  } else {
    navSection.value.style.transform = "";
    navButton.value.style.display = "none";
    navLogo.value.style.display = "flex";
    navLinks.value.style.display = "flex";
    navLogoMobile.value.style.display = "none";
  }
}

let lastScrollY = 0;
function toggleNavMobile() {
  const windowSize = window.innerWidth;
  const scrollY = window.scrollY;

  if (windowSize > 1000) return;

  if (scrollY > lastScrollY) {
    navSection.value.style.transform = "translateY(-100%)";
  } else {
    navSection.value.style.transform = "";
  }
  
  lastScrollY = scrollY;
}
</script>