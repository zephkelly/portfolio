<template>
  <div>
    <section class="cover">
      <p>{{ data.slug }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .cover {
    margin-top: 18rem; 
  }
</style>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>