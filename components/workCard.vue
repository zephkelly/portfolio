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
                <p>Read the story</p>
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
    border-radius: 8px;
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

            @media (prefers-color-scheme: light) {
                box-shadow: 0 18px 20px 0 rgba(0, 0, 0, 0.2);
            }

            :root[data-color-scheme="light"] & {
                box-shadow: 0 18px 20px 0 rgba(0, 0, 0, 0.2);
            }
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
    height: 250px;
    box-sizing: border-box;

    .wrapper.title {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .work-title {
        font-family: var(--font-family-secondary);
        font-size: 1.3rem;
        margin-right: 2rem;
    }

    .type-label {
        &.client {
            background-color: var(--green-100);
            border: 1px solid var(--green-200-invert);
            color: var(--green-200-invert);
            padding: 0.3rem 0.5rem;
            border-radius: 6px;

            @media (prefers-color-scheme: dark) {
                background-color: var(--green-300);
                border: 1px solid var(--green-100-invert);
                color: var(--green-100-invert);
            }

            :root[data-color-scheme="dark"] & {
                background-color: var(--green-300);
                border: 1px solid var(--green-100-invert);
                color: var(--green-100-invert);
            }
        }

        p {
            text-transform: capitalize;
        }
    }

    .overview {
        font-family: arial, sans-serif, var(--font-system);
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.4rem;
        color: var(--text-foreground-secondary);
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .link {
        font-size: 1.2rem;
        color: var(--accent-accessible);
    }
}
</style>