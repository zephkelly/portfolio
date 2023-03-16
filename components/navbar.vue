<template>
  <section ref="navSection" class="navbar active">
    <div ref="navButton" class="button" style="display:none;">
      <button ref="mobileButton" v-on:click="toggleMobileNav" style="background-color: transparent; backdrop-filter: none;">
        <img class="nav-svg" src="/images/svg/menu.svg" alt="Menu">
      </button>
    </div>
    <div ref="navLogo" class="logo">
      <nuxt-link to="/"><span>E</span>K</nuxt-link>
    </div>
    <nav ref="navLinks" style="display:none;">
      <ul>
        <li @click="hideMobileNav">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li @click="hideMobileNav">
          <nuxt-link to="/contact">Contact</nuxt-link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
    </nav>
    <div ref="navLogoMobile" class="logo mobile" style="display: none">
      <a><span>E</span>K</a>
    </div>
    <div ref="navRefs" class="socials" style="display: none;">
      <a href="https://github.com/zephkelly" target="_blank" alt="My GitHub" title="My GitHub">
        <img class="social-svg github" src="/images/svg/github.svg" alt="GitHub">
      </a>
      <a class="linkedin" href="https://www.linkedin.com/in/evan-kelly/" target="_blank" alt="My LinkedIn" title="My LinkedIn">
        <img class="social-svg linkedin" src="/images/svg/linkedin.svg" alt="LinkedIn">
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

  button {
    background: none;
    border: none;
    min-width: 3.2rem;
    max-height: 100%;
    padding: 0rem;
    cursor: pointer;
    opacity: 0.8;
    position: relative;
    right: 0.9rem;
    border-radius: 0.6rem;
    background-color: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(6px);

    @media (prefers-color-scheme: light) {
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.1);
    }

    img {
      width: 2rem;
      height: auto;
      filter: invert(1);

      @media (prefers-color-scheme: light) {
        filter: invert(0);
      }
    }

    &:hover {
      opacity: 1;
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
    background-color: var(--nav-background-color);
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
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            padding: 1rem;
            transition: background-color 0.15s ease-out;
            border-radius: 0.5rem;
            opacity: 0.8;

            &:hover {
              color: white;
              opacity: 1;
              background-color: #303032;
            }

            @media (prefers-color-scheme: light) {
              transition: background-color 0.15s ease-out;
              opacity: 0.9;

              &:hover {
                background-color: rgba(0, 0, 0, 0.10);
                color: var(--text-main-color);
              }
            }
          }
        }
      }

      @media (max-width: 1000px) {
        display: none;
        position: absolute;
        top: 6rem;
        left: 1rem;
        background-color: rgba(41, 41, 45, 0.85);
        padding: 0.8rem;
        gap: 0.8rem;
        backdrop-filter: blur(26px);
        border-radius: 0.6rem;
        
        @media (prefers-color-scheme: light) {
          background-color: rgba(220, 220, 220, 0.8);
          box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.2);
        }

        ul {  
          gap: 1rem;
          flex-direction: column;
          
          li {
            width: 25rem;

            @media (max-width:400px) {
              width: 15rem
            }

            a {
              border-radius: 0.3rem;
              height: 2rem;

              @media (max-width:400px) {
                background-color: rgba(0, 0, 0, 0.35);

                @media (prefers-color-scheme: light) {
                  background-color: rgba(0, 0, 0, 0.2);
                }
              }

              &:hover {
                background-color: rgba(0, 0, 0, 0.35);
              }
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
    max-height: 100%;

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
      background-image: linear-gradient(260deg, #ffe203, #ffbb55);
      opacity: 0.9;
      background-clip: text;
      background-size: 150% 100%;
      -webkit-text-stroke: 4px transparent;

      @media (prefers-color-scheme: light) {
        color: rgba(255, 255, 255, 0.753);
        opacity: 1;
        background-image: linear-gradient(260deg, #ffe203d9, #ffbb55d3);
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

    @media (max-width: 786px) {
      gap: 0.5rem;

      .linkedin {
        display: none;
      }
    }

    .social-svg {
      filter: grayscale(100%) invert(100%);
      opacity: 0.8;
      height: 1.6rem;

      @media (prefers-color-scheme: light) {
        filter: invert(0);
      }

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
const mobileButton = ref(null);
const navLinks = ref(null);
const navRefs = ref(null);
const navLogo = ref(null);
const navLogoMobile = ref(null);


export default {
  setup() {
    onMounted(() => {
      renderElements = true;
      navRefs.value.style.display = "";
      navLinks.value.style.display = "";

      handleResize();
      window.addEventListener('resize', handleResize)
      
      lastScrollY = window.scrollY;
      window.addEventListener('scroll', toggleHiddenNavMobile)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      
      window.removeEventListener('scroll', toggleHiddenNavMobile)
    })
    
    return {
      navSection,
      navButton,
      mobileButton,
      navLogo,
      navLogoMobile,
      navLinks,
      navRefs,
      renderElements,
      toggleMobileNav,
    }
  },
  methods: {
    toggleMobileNav,
    hideMobileNav,
    handleResize,
    toggleHiddenNavMobile,
  }
};

let renderElements = false;
function handleResize() {
  if (window.innerWidth < 1000) {
    hideMobileNav();
    navButton.value.style.display = "flex";
    navLogo.value.style.display = "none";
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
function toggleHiddenNavMobile() {
  const windowSize = window.innerWidth;
  const scrollY = window.scrollY;
  
  if (windowSize > 1000) return;
  
  if (scrollY > lastScrollY && scrollY > 80) {
    hideMobileNav();
    navSection.value.style.transform = "translateY(-100%)";
  } else {
    navSection.value.style.transform = "";
  }
  
  lastScrollY = scrollY;
}

function hideMobileNav() {
  navLinks.value.style.display = "";

  mobileButton.value.style.backgroundColor = "transparent";
  mobileButton.value.style.backdropFilter = "none";
  mobileButton.value.style.opacity = "";

  mobileNavOpen = false;
}

let mobileNavOpen = false;
function toggleMobileNav() {
  console.log("Hellow")
  
  if (mobileNavOpen) {
    navLinks.value.style.display = "";

    mobileButton.value.style.backgroundColor = "transparent";
    mobileButton.value.style.backdropFilter = "none";
    mobileButton.value.style.opacity = "";

    mobileNavOpen = false;
  } else {
    navLinks.value.style.display = "block";

    mobileButton.value.style.backgroundColor = "";
    mobileButton.value.style.backdropFilter = "";
    mobileButton.value.style.opacity = "1";
      
    mobileNavOpen = true;
  }
}
</script>