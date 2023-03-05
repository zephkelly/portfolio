<template>
  <div class="wrapper">
    <div class="title mask"><span>E</span><span>V</span><span>A</span>N K<span>E</span><span>L</span>LY</div>
    <h1 class="title"><span>E</span><span>V</span><span>A</span>N K<span>E</span><span>L</span>LY</h1>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
    margin-top: 13rem;
    height: 4rem;
    width: 26.6rem;
  }

  .title {
    position: absolute;
    font-size: 4rem;
    font-weight: 900;
    font-style: oblique;
    user-select: none;
    letter-spacing: 0.5rem;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-main-color);
    left: 0rem;
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
    white-space: nowrap;
    animation: TitleSwipAnimation 12s ease-in-out infinite alternate;
    transition: width 0.5s ease-out;
    color: var(--text-main-color);
    -webkit-mask-image: linear-gradient(var(--text-main-color), var(--text-main-color));
    z-index: 1;
    width: auto;
    left: 0rem;
    right: 0rem
  }

  @keyframes TitleSwipAnimation {
    0% {
      width: 0rem;
    }
    14% {
      width: 0rem;
    }
    17% {
      width: 28rem;
    }
    66% {
      width: 28rem;
    }
    69% {
      width: 12rem;
    }
    76% {
      width: 12rem;
    }
    81% {
      width: 0rem;
    }
    100% {
      width: 0rem;
    }
  }
</style>

<script>

</script>