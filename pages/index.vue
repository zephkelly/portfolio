<template>
    <section class="component">
        <div class="container">
            <h1>
                Welcome to my Nuxt.js app!
            </h1>
            <button @click="applySystemColorScheme">
                Toggle color scheme
            </button>    
        </div>
    </section>
</template>

<script setup lang="ts">
const { applySystemColorScheme } = useColorScheme()
</script>

<style lang="scss" scoped>
h1 {
    margin-top: 8rem;
}

.component {
    min-height: 200vh;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>