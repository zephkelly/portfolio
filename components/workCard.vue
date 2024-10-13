<template>
    <section class="card" @click="navigateTo(workCard.slug)">
        <section class="cover">
            <div class="technologies" >
            </div>
            <div class="wrapper" >
                <img :src="workCard.coverImageUrl" :alt="workCard.coverImageAlt" loading="lazy"/>
            </div>
        </section> 
        <section class="content">
            <div>
                <div class="wrapper">
                    <nuxt-link :to="workCard.slug" class="card-title-link"><h3 class="card-title">{{ workCard.title }}</h3></nuxt-link>
                    <span class="label" :class="workCard.type"><p>{{ workCard.type.toUpperCase() }}</p></span>
                </div>
                <p>{{ workCard.overview }}</p>
            </div>
            <div class="links">
                <NuxtLink :to="workCard.slug">Read the story</NuxtLink>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { useWorks } from '~/composable/useWorks';
import { type WorkCard } from '~/types/work.types';

const { getTechnologies } = useWorks();

const props = defineProps<{
    workCard: WorkCard
}>();

const technologies = getTechnologies(props.workCard);
</script>