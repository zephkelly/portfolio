<template>
    <div
        class="technology-icon"
        :class="technology.id"
        :title="technology.label"
        v-html="sanitizeSvg(technology.logoSvg)"
    />   
</template>

<script setup lang="ts">
import { type Technology } from '~/types/technologies.types';

defineProps<{
    technology: Technology
}>();

function sanitizeSvg(svg: string): string {
    const allowedTags = ['svg', 'path', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'g', 'text', 'tspan'];
    const allowedAttributes = ['class', 'viewbox', 'width', 'height', 'xmlns', 'fill', 'stroke', 'stroke-width', 'aria-hidden', 'focusable', 'd', 'x', 'y', 'cx', 'cy', 'r', 'rx', 'ry', 'x1', 'y1', 'x2', 'y2', 'points', 'transform', 'text-anchor', 'font-size', 'font-family'];
 
    svg = svg.replace(/<!--[\s\S]*?-->/g, '');
    svg = svg.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, (tag, tagName) => {
        return allowedTags.includes(tagName.toLowerCase()) ? tag : '';
    });
    svg = svg.replace(/\s([a-zA-Z\-]+)(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?/gi, (match, attr) => {
        return allowedAttributes.includes(attr.toLowerCase()) ? match : '';
    });
    svg = svg.replace(/\son\w+\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+)/gi, '');
    svg = svg.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    return svg;
};
</script>

<style lang="scss" scoped>

.technology-icon {
    display: flex;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    vertical-align: middle;
}

:global(.technology-icon svg) {
    width: 100%;
    height: 100%;
    fill: var(--text-foreground-secondary);
    transition: fill 0.3s ease;
}

:global(.technology-icon svg path.inverted) {
    fill: var(--text-background);
}

.css {
    width: 28px;
    height: 28px;
    margin-left: -6px;
    margin-right: -4px;
}

.vue3 {
    width: 28px;
    height: 28px;
}

.nuxt3 {
    width: 32px;
    height: 32px;
    margin-left: -6px;
}

.sass {
    width: 32px;
    height: 32px;
}

.express {
    width: 28px;
    height: 28px;
}

.wix {
    width: 32px;
    height: 32px;
}
</style>