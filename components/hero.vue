<template>
  <div class="profile">
    <img src="~/assets/images/profile2.png" alt="profile image"></div>
  <h1>Hi, welcome to my site! <span>👋</span></h1>
  <p>
    I'm <span>Evan</span>, a fullstack software developer 
    with a passion for creating beautiful, functional apps. 
    I'm currently studying computer science <a target="_blank" href="https://www.linkedin.com/school/griffith-university/">@GriffithUni</a>,
    and I'm open to job opportunities, just <NuxtLink href="/contact">reach out!</NuxtLink>
  </p>
</template>

<style lang="scss" scoped>
  .profile {
    margin-top: 14rem;
    width: 124px;
    height: 124px;
    border-radius: 100%;
    overflow: hidden;
    background-color: #070707;

    img {
      width: 110%;
      height: 110%;
      filter: brightness(1);
      //transform: rotate(-10deg);
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
    line-height: 1.3em;
    color: rgb(156 163 175);
    opacity: 0.8;

    a {
      position: relative;
      cursor: pointer;
      color: white;
      font-weight: 600;
      text-decoration: none;
      z-index: 1;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        top: 1.25rem;
        right: 0rem;
        bottom: -0.08em;
        background-color: #ffc83d;
        transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
        opacity: 0.5;
        z-index: -1;
      }

      &:hover::after {
        top: -0.04em;
      }
    }

    span {
      color: white;
      font-weight: 600;
    }
  }
</style>

<script setup>

</script>