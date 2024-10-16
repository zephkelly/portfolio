<template>
    <Head>
        <Title>{{ work?.title }}</Title>
        <Meta name="description" :content="work?.title + ' - Case Study: ' + work?.overview" />
        <Meta hid="og:title" property="og:title" :content="work?.title" />
        <Meta hid="og:description" property="og:description" :content="work?.title + ' - Case Study: ' + work?.overview" />
        <Meta hid="og:image" property="og:image" :content="work?.ogImageUrl" />
        <Meta hid="og:type" property="og:type" content="article" />
        <Meta hid="og:url" property="og:url" :content="`https://www.evankelly.dev/work/${work?.slug}`" />
        <Meta hid="og:locale" property="og:locale" content="en_GB" />
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
                    <div class="wrapper">
                        <div class="misc-fields">
                            <div class="field type">
                                <p class="label">Type</p>
                                <p class="value type">{{ work?.type }}</p>
                            </div>
                            <div class="field">
                                <p class="label">Live</p>
                                <a class="value live-link" target="_blank" aria-label="Navigate to the live website" rel="follow" tabindex="0" :href="work?.link">{{  work?.linkLabel }}</a>
                            </div>
                            <div class="field" v-if="work?.githubLabel !== ''">
                                <p class="label">GitHub</p>
                                <a class="value github-link" aria-label="Navigate to the source code on GitHub" tabindex="0" rel="nofollow" :href="work?.githubLink">{{  work?.githubLabel }}</a>
                            </div>
                        </div>
                        <div class="overview-container">
                            <div class="field">
                                <p class="label">Overview</p>
                                <p class="value">{{ work?.overview }}</p>
                            </div>
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
            </section>
            <button class="video" @click.prevent="toggleVideo" :class="{ paused: !demoVideoActive }">
                <div class="controls">
                    <svg v-if="demoVideoActive" class="pause" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"/></svg>
                    <svg v-else class="play" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"/></svg>
                </div>
                <video autoplay loop muted playsinline ref="demoVideo" >
                    <source :src="work?.demoVideoUrl" :alt="work?.demoVideoAlt" type="video/mp4" />
                </video>
            </button>
            <div class="descriptions">
                <div v-for="(section, sectionName) in work?.descriptionSections" :key="sectionName">
                    <h3>{{ sectionName }}</h3>
                    <div v-for="(description, descriptionKey) in section" :key="descriptionKey">
                        <p>{{ description }}</p>
                    </div>
                </div>
            </div>
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

const demoVideo = ref<HTMLVideoElement | null>(null);
const demoVideoActive = ref(true);
const playVideo = () => {
    if (demoVideo.value) {
        demoVideo.value.play();
        demoVideoActive.value = true;
    }
};

const pauseVideo = () => {
    if (demoVideo.value) {
        demoVideo.value.pause();
        demoVideoActive.value = false;
    }
};

const toggleVideo = () => {
    console.log('toggle');
    if (demoVideoActive.value) {
        pauseVideo();
    } else {
        playVideo();
    }
};
</script>

<style lang="scss" scoped>
section.component {
    padding-top: 10rem;
    margin-bottom: 10rem;
}

.backlink {
    display: flex;
    gap: 0.8rem;
    
    p, a {
        font-size: 0.8rem;
        opacity: 0.8;
    }

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

    p {
        font-family: arial, var(--font-system);
        color: var(--text-foreground);
        opacity: 0.6;
    }
}

h1.title {
    font-family: var(--font-family-secondary);
    font-size: clamp(2.5rem, 7vw, 3rem);
    font-weight: 700;
    margin-top: 0.5rem;
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

        :deep(.technology-icon svg) {
            fill: var(--text-foreground);
        }
    }

    .fields-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .wrapper {
            display: flex;
            flex-direction: row;
            gap: 3rem;
        }
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
                gap: 0rem;
                width: 60px;

                :deep(.technology-icon) {
                    width: auto;
                    height: 44px;
                    margin: 0;

                    svg {
                        width: 30px;
                        height: 30px;
                    }

                    &.css {
                        svg {
                            width: 36px;
                            height: 36px;
                            margin-top: -3px;
                        }

                    }

                    &.vue3 {
                        svg {
                            width: 38px;
                            height: 38px;
                            margin-top: -6px;
                        }
                    }

                    &.nuxt3 {
                        svg {
                            width: 44px;
                            height: 44px;
                            margin-top: -7px;
                        }
                    }

                    &.sass {
                        svg {
                            width: 44px;
                            height: 44px;
                            margin-top: -8px;
                        }
                    }
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

        .fields-container {
            .wrapper {
                flex-direction: column;
                gap: 3rem;

                .overview-container {
                    max-width: 100%;
                    order: 1;
                }

                .misc-fields {
                    order: 2;
                    gap: 2rem;

                    .misc-fields {
                        justify-content: space-between;
                    }
                }
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
                justify-content: center;
                align-items: center;
                align-content: center;
                justify-items: center;
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

.video {
    position: relative;
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 3rem;
    border-radius: 8px;
    transition: opacity 0.3s ease;
    border: none;
    padding: 0;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: var(--background-darker);

    .controls {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 2;

        svg {
            position: absolute;
            width: clamp(5rem, 20%, 20rem);
            height: clamp(5rem, 20%, 20rem);
            opacity: 0;
            transition: opacity 0.2s ease;
            fill: var(--text-foreground);

            &.play {
                opacity: 0.7;
                width: clamp(5rem, 23%, 20rem);
                height: clamp(5rem, 23%, 20rem);
                margin-left: -8px;
            }
        }
    }

    h2 {
        font-family: var(--font-family-secondary);
        font-size: 1.4rem;
        margin-bottom: 1rem;
        color: var(--text-foreground);
    }

    video {
        width: 100%;
        border-radius: 8px;
        transition: opacity 0.2s ease;
        z-index: 1;
        transform: scale(1.008);
    }

    &:hover {
        video {
            opacity: 0.8;
        }

        
        .controls {
            svg {
                opacity: 0.8;
            }
        }
    }
   

    &.paused {
        video {
            opacity: 0.6;
        }
    }
}

.descriptions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
        font-family: var(--font-family-secondary);
        font-size: 1.4rem;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        color: var(--text-foreground);
        text-transform: capitalize;
    }

    p {
        font-family: arial, var(--font-system);
        color: var(--text-foreground-secondary);
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }
}
</style>