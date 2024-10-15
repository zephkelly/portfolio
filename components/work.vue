<template>
    <section class="component">
        <div class="container">
            <h2>My Work</h2>
            <div class="work-grid">
                <workCard
                    v-for="workCard in workCards"
                    :key="workCard.id"
                    :workCard="workCard"
                />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useWorks } from '~/composable/useWorks';
import { type Technology } from '~/types/technologies.types';
import { type Work, type WorkCard } from '~/types/work.types';

const { workCards } = useWorks();
</script>

<style lang="scss" scoped>
h2 {
    font-family: Poppins,sans-serif;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--text-foreground);
}

.work-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
}
</style>