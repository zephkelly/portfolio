<template>
    <Head>
        <meta name="description" :content="work?.overview" />
        <Title>{{ work?.title }}</Title>
    </Head>
    <section v-if="workExists" class="component">
        <div class="container">
            <div class="backlink">
                <NuxtLink to="/" tabindex="0" aria-label="Return to homepage">
                    Home
                </NuxtLink>
                <span> / </span>
                <p>{{ work?.title }}</p>
            </div>
            <h1 class="title">{{ work?.title }}</h1>
        </div>
    </section>
    <section v-else class="component">
        <p>Loading...</p>
    </section>
</template>

<script setup lang="ts">
import { useWorks } from '~/composable/useWorks';
import { type Work } from '~/types/work.types';

const route = useRoute();

const { findWork } = useWorks();

const workExists = ref(false);
const work: ComputedRef<Work | undefined> = computed(() => {
    const work = findWork(route.params.slug as string);
    workExists.value = !!work;
    return work;
});
</script>

<style lang="scss" scoped>
section {
    padding-top: 10rem;
}

.backlink {
    display: flex;
    gap: 1rem;
    opacity: 0.9;

    a { 
        cursor: pointer;
        color: var(--text-foreground);
        transition: color 0.3s ease;

        &:hover {
            color: var(--accent-accessible);
        }
    }

    span {
        font-size: 1.2rem;
    }

    p {
        font-family: arial, var(--font-system);
        color: var(--text-foreground-secondary);
    }
}
</style>