<template>
    <section class="work-card" @click="navigateTo(workCard.slug)" tabindex="0">
        <section class="cover">
            <div class="technologies" >
                <TechnologyIcon v-for="technology in technologies" :key="technology.id" :technology="technology" />
            </div>
            <div class="wrapper" >
                <img :src="workCard.coverImageUrl" :alt="workCard.coverImageAlt" loading="lazy"/>
            </div>
        </section> 
        <section class="content">
            <div>
                <div class="wrapper title">
                    <nuxt-link :to="workCard.slug" class="work-title"><h3>{{ workCard.title }}</h3></nuxt-link>
                    <span class="type-label" :class="workCard.type">
                        <p>{{ workCard.type }}</p>
                    </span>
                </div>
                <p class="overview">{{ workCard.overview }}</p>
            </div>
            <div class="link">
                <NuxtLink :to="workCard.slug">Read the story</NuxtLink>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { useWorks } from '~/composable/useWorks';
import { type WorkCard } from '~/types/work.types';
import { type Technology } from '~/types/technologies.types';

const { getTechnologies } = useWorks();

const props = defineProps<{
    workCard: WorkCard
}>();

const technologies: Technology[] = getTechnologies(props.workCard);
</script>

<style lang="scss" scoped>
section.work-card {
    border-radius: 6px;
    border: 1px solid var(--border-color);
    transition: border-color 0.2s ease;
    overflow: hidden;

    &:hover, &:focus-visible, &:active {
        border-color: var(--border-color-hover);

        .cover {
            .wrapper {
                img {
                    border-color: var(--border-color-hover);
                    filter: grayscale(0%);
                }
            }
        }

        .content {
            border-color: var(--border-color-hover);
        }
    }

    &:focus-visible {
        outline: 2px solid var(--foreground);
        box-shadow: 0 0 0 5px var(--background);
    }
}

section.cover {
    background-color: var(--background-darker);
    border-radius: 6px;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;

    .technologies {
        display: flex;
        justify-content: flex-end;
        gap: 2%;
        margin-bottom: 2rem;
        height: 24px;
    }

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: 0rem clamp(0.4rem, 5%, 1.5rem);

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: top;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border: 1px solid var(--border-color);
            transition: border-color 0.2s ease, filter 0.2s ease;
            will-change: filter;
            border-bottom: none;
            filter: grayscale(100%);
        }
    }
}

section.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    border-top: 1px solid var(--border-color);
    transition: border-color 0.2s ease;
    padding: 1rem;
    padding-top: 1.5rem;
    height: stretch;

    .wrapper.title {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .work-title {
        font-family: var(--font-family-secondary);
        font-size: 1.3rem;
        margin-right: 1rem;
        
        h3 {
        }

    }

    .type-label {
        p {
            text-transform: capitalize;
        }
    }

    .overview {
        color: var(--text-foreground-secondary);
        font-size: 1rem;
        line-height: 1.4rem;
    }
}
</style>