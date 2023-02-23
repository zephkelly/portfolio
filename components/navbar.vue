<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/portfolio">WORK</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">ABOUT</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">CONTACTS</nuxt-link>
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
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;

    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.5rem;
        
        a {
          color: rgb(250 250 250);
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 1rem;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: orange;
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