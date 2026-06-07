<template>
    <hero class="hero" />
    <work class="work" />
</template>

<script setup lang="ts">
const { applySystemColorScheme } = useColorScheme();
</script>

<style lang="scss" scoped>
.hero {
    padding-top: 18rem;
}

.work {
    margin-bottom: 10rem;
    margin-top: 8rem;
}
</style>