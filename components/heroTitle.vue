<template>
  <h1 class="title">
    <span>E</span><span>V</span><span>A</span>N K<span>E</span><span>L</span>LY</h1>
  <div class="title mask"><span>E</span><span>V</span><span>A</span>N K<span>E</span><span>L</span>LY</div>
</template>

<style lang="scss" scoped>
  .title {
    position: absolute;
    font-size: 8rem;
    font-weight: 900;
    font-style: oblique;
    letter-spacing: 0.5rem;
    color: transparent;
    -webkit-text-stroke: 2px var(--text-main-color);
    padding-left: 2.8rem;
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
    width: 4rem;
    white-space: nowrap;
    animation: TitleSwipAnimation 16s ease-in-out infinite;
    transition: width 0.5s ease-out;
    color: var(--text-main-color);
    -webkit-mask-image: linear-gradient(var(--text-main-color), var(--text-main-color));
    z-index: 1;
  }

  @keyframes TitleSwipAnimation {
    0% {
      width: 0rem;
    }
    18% {
      width: 0rem;
    }
    21% {
      width: 50rem;
    }
    63% {
      width: 50rem;
    }
    66% {
      width: 24rem;
    }
    68.5% {
      width: 22rem;
    }
    75% {
      width: 0rem;
    }
    100% {
      width: 0rem;
    }
  }
</style>

<script>

</script>