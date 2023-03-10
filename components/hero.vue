<template>
  <div class="profile">
    <img src="~/assets/images/profile.png" alt="profile image" ref="pfp"></div>
  <h1>Hi, welcome to my site! <span ref="waveEmoji">👋</span></h1>
  <p>
    I'm <NuxtLink href="/about">Evan</NuxtLink>, a fullstack software developer with a passion for creating beautiful, functional apps. 
    Currently studying computer science <a target="_blank" href="https://www.linkedin.com/school/griffith-university/">@GriffithUni</a>.
    I'm seeking new opportunities to leverage my skills and contribute to impactful projects. Let's discuss how I can add value to your team. Just <NuxtLink href="/contact">reach out!</NuxtLink>
  </p>
</template>

<style lang="scss" scoped>
  .profile {
    width: 124px;
    height: 124px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #070707;

    img {
      width: 100%;
      height: 100%;
      filter: brightness(1);
    }
  }

  h1 {
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: var(--text-main-color);

    span {
      //make the emoji shake back and forth a bit
      animation: shake 7s infinite;
      animation-timing-function: cubic-bezier(0.36, 0.07, 0.19, 0.97);
      margin-left: 0.5rem;
      transition: translate3d 0.1s ease-out;
      cursor: pointer;

      @keyframes shake {
        10%, 90% {
          transform: translate3d(-0.5px, 0, 0) rotate(-1deg);
        }
        
        20%, 80% {
          transform: translate3d(3px, -2px, 0) rotate(14deg);
        }
        
        30%, 50%, 70% {
          transform: translate3d(-2px, 0, 0) rotate(-1deg);
        }
        
        40%, 60% {
          transform: translate3d(2px, -1px, 0) rotate(8deg);
        }
      }
    }
  }
  
  p {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4em;
    color: var(--text-secondary-color);
    opacity: 0.8;

    a {
      position: relative;
      cursor: pointer;
      color: var(--text-main-color);
      transition: color 0.05s ease-out;
      font-weight: 600;
      text-decoration: none;
      z-index: 1;
      white-space: nowrap;

      &::after {
        content: '';
        position: absolute;
        top: 1.25rem;
        right: -0.1rem;
        left: -0.1rem;
        bottom: -0.08em;
        background-color: #fbca50;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        opacity: 0.6;
        transition: opacity 0.1 ease-out;
        z-index: -1;
      }

      &:hover::after {
        top: -0.08em;
        opacity: 1;
      }

      &:nth-child(2):hover::after {
        top: -0.1em;
        bottom: -0.14em;
      }

      &:hover {
        color: var(--text-main-color-reverse);
      }
    }

    span {
      color: white;
      font-weight: 600;
      opacity: 1;
    }
  }

  .spacer {
    margin-top: 4rem;
    width: 100%;
    border-bottom: 1px solid var(--text-secondary-color);
    opacity: 0.1;
  }
</style>

<script>
const pfp = ref(null);
const waveEmoji = ref(null);

export default {
  setup() {
    onMounted(() => {
    const pfpEl = pfp.value;

    pfpEl.addEventListener('mouseenter', () => {
      pfpEl.src = '/_nuxt/assets/images/profile_effect.png';
    });
    
    pfpEl.addEventListener('mouseleave', () => {
      pfpEl.src = '/_nuxt/assets/images/profile.png';
    });

    waveEmoji.value.addEventListener('click', toggleWaveEmoji);
    })

    return {
      pfp,
      waveEmoji,
    }
  },
}

let isWaving = true;
function toggleWaveEmoji() {
  isWaving = !isWaving;

  if (isWaving) {
    waveEmoji.value.style.animationPlayState = 'running';
  } else {
    waveEmoji.value.style.animationPlayState = 'paused';
  }
}
</script>