<template>
  <h1 class="title"><span>E</span><span>V</span><span>A</span>N K<span>E</span><span>L</span>LY</h1>
  <div class="title mask"><span>E</span><span>V</span><span>A</span>N K<span>E</span><span>L</span>LY</div>
  <h2 class="subtitle">Fullstack Software Developer</h2>
</template>

<style lang="scss" scoped>
  .title {
    position: relative;
    font-size: 12rem;
    font-weight: 900;
    font-style: oblique;
    user-select: none;
    letter-spacing: 0.5rem;
    color: transparent;
    -webkit-text-stroke: 2px var(--text-main-color);
    left: 2.8rem;
    bottom: -29.5rem;
    z-index: 2;

    span:nth-child(1) {
      padding-right: 0.03em;
    }
    span:nth-child(2) {
      margin-right: -0.09em;
    }
    span:nth-child(3) {
      margin-right: -0.01em;
    }
    span:nth-child(4) {
      margin-right: -0.02em;
    }
    span:nth-child(5) {
      margin-right: -0.03em;
    }
  }

  .mask {
    width: 0rem;
    white-space: nowrap;
    animation: TitleSwipAnimation 12s ease-in-out infinite alternate;
    transition: width 0.5s ease-out;
    color: var(--text-main-color);
    -webkit-mask-image: linear-gradient(var(--text-main-color), var(--text-main-color));
    z-index: 1;
    bottom: -17.5rem;
  }

  @keyframes TitleSwipAnimation {
    0% {
      width: 0rem;
    }
    14% {
      width: 0rem;
    }
    17% {
      width: 70rem;
    }
    66% {
      width: 70rem;
    }
    69% {
      width: 35rem;
    }
    76% {
      width: 33rem;
    }
    81% {
      width: 0rem;
    }
    100% {
      width: 0rem;
    }
  }

  .subtitle {
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 3.24rem;
    font-weight: 700;
    user-select: none;
    letter-spacing: 0.02em;
    color: var(--accent-color);
    -webkit-mask-image: linear-gradient(170deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5));
    z-index: 2;
    left: 8rem;
    bottom: -18rem;
    margin-left: -0.06em;
  }
</style>

<script>

</script>