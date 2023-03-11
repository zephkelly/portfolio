<template>
  <div>
    <cover :data="coverData" />
  </div>
</template>

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