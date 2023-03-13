<template>
  <section class="backlink">
    <nuxt-link to="/">Home</nuxt-link>
    <span>/</span>
    <nuxt-link class="slug-link" to="">{{ coverData.content.title }}</nuxt-link>
  </section>
  <section class="content">
    <cover :data="coverData" />
  </section>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    height: auto;
  }

  section.backlink {
    margin-top: 12rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    a {
      font-size: 1rem;
      text-transform: capitalize;
      text-decoration: none;

      &:last-of-type {
        margin-left: 0.8em;
        opacity: 0.6;

      }
    }

    span {
      font-size: 1.2rem;
      margin-left: 0.8em;
    }

    * {
       color: var(--text-secondary-color);
    }
  }

  section.content {
    flex-direction: column;
    margin-top: 0rem;
    margin-bottom: 14rem;
  }
</style>

<script>
import Cover from '@/components/cover.vue'
import covers from '@/assets/json/covers.json'

export default {
  components: {
    Cover
  },
  data() {
    if (this.$route.params.slug) {
      const cover = covers.filter(cover => cover.slug === this.$route.params.slug)
      if (cover.length > 0) {
        return {
          coverData: cover[0]
        }
      } else {
        throw createError({
          statusCode: 404,
          message: 'not found',
        })
      }
    }
  }
}
</script>