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
            <section class="info-panel">
                <div class="fields-container">
                    <div class="misc-fields">
                        <div class="field type">
                            <p class="label">Type</p>
                            <p class="value type">{{ work?.type }}</p>
                        </div>
                        <div class="field" v-if="work?.githubLabel !== ''">
                            <p class="label">GitHub</p>
                            <a class="value github-link" aria-label="Navigate to the source code on GitHub" tabindex="0" :href="work?.githubLink">{{  work?.githubLabel }}</a>
                        </div>
                        <div class="field">
                            <p class="label">Live</p>
                            <a class="value live-link" target="_blank" aria-label="Navigate to the live website" tabindex="0" :href="work?.link">{{  work?.linkLabel }}</a>
                        </div>
                    </div>
                    <div class="tech-fields">
                        <div class="field">
                            <p class="label">Tech Stack</p>
                            <div class="tech-container">
                                <div v-for="tech in technologies" class="tech-field">
                                    <TechnologyIcon  :key="tech?.label" :technology="tech" />
                                    <p class="label">{{ tech?.label }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overview-container">
                    <div class="field">
                        <p class="label">Overview</p>
                        <p class="value">{{ work?.overview }}</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
    <section v-else class="component">
        <p>Loading...</p>
    </section>
</template>

<script setup lang="ts">
import { useWorks } from '~/composable/useWorks';
import { type Work } from '~/types/work.types';
import { type Technology } from '~/types/technologies.types';

const route = useRoute();

const { findWork, getTechnologies } = useWorks();

const workExists = ref(false);
const work: ComputedRef<Work | undefined> = computed(() => {
    const work = findWork(route.params.slug as string);
    workExists.value = !!work;
    return work;
});
const technologies: Ref<Technology[]> = ref(getTechnologies(work.value as Work));
</script>

<style lang="scss" scoped>
section.component {
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

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--text-foreground);
            transition: background-color 0.3s ease;
        }

        &:hover {
            color: var(--accent-accessible);

            &::after {
                background-color: var(--accent-accessible);
            }
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

h1.title {
    font-family: var(--font-family-secondary);
    font-size: clamp(2.5rem, 7vw, 3rem);
    font-weight: 700;
    margin-top: 2rem;
    color: var(--text-foreground);
    transition: color 0.3s ease;
}

.info-panel {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 4rem;
    margin-top: 1rem;
    background-color: var(--background-darker);
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    transition: border-color 0.2s ease;

    &:hover {
        border-color: var(--border-color-hover);
    }

    .fields-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    
    .misc-fields {
        display: flex;
        flex-direction: row;
        gap: 4rem;
    }

    .tech-fields {
        .field {
            gap: 1rem;
        }

        .tech-container {
            display: flex;
            flex-direction: row;
            gap: 1rem 2rem;
            flex-wrap: wrap;

            .tech-field {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                width: 60px;

                .technology-icon {
                    width: 30px;
                    height: 30px;
                }
                
                :global(.technology-icon svg) {
                    width: 30px;
                    height: 30px;
                }
            }

            .label {
                font-family: arial, var(--font-system);
                color: var(--text-foreground);
                font-size: 0.8rem;
                font-weight: 600;
            }
        }
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p,a {
            font-weight: 700;
        }

        p {
            font-family: arial, var(--font-system);
            color: var(--text-foreground);

            &.label {
                font-weight: 400;
                color: var(--text-foreground-secondary);
                opacity: 0.8;
            }
        }

        a {
            font-family: arial, var(--font-system);
            color: var(--accent-accessible);
            transition: color 0.3s ease;
            text-decoration: underline;

            &:hover {
                color: var(--text-foreground);
            }
        }
    }

    .type {
        text-transform: capitalize;
    }

    .overview-container {
        max-width: 400px;
        p.value {
            font-weight: 400;
            line-height: 20px;
        }
    }

    @media (max-width: 870px) {
        gap: 3rem;

        .misc-fields {
            gap: 2rem;
        }
    }

    @media (max-width: 800px) {
        flex-direction: column;

        .overview-container {
            max-width: 100%;
            order: 1;
        }

        .fields-container {
            order: 2;
            gap: 2rem;

            .misc-fields {
                justify-content: space-between;
                // &:nth-child(n+3) {
                // }
            }
        }

    }

    @media (max-width: 700px) {
        padding: 1.5rem;
    }

    @media (max-width: 540px) {
        .field {
            &.type {
                display: none;
            }
        }

        .tech-fields {
            .tech-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
            }
        }
    }

    @media (max-width: 400px) {
        gap: 2.5rem;

        .fields-container {
            gap: 3rem;
        }

        .misc-fields {
            justify-content: space-between;
            flex-direction: column;
            gap: 1.5rem;
        }
    }
}
</style>