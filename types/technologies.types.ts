export type TechnologiesId = 'ts' | 'css' | 'scss' | 'vue3' | 'nuxt3' | 'express' | 'postgresql' | 'unity3d' | 'csharp' | 'nginx' | 'wix';
export type TechnologiesLabel = 'Typescript' | 'Css' | 'Scss' | 'Vue 3' | 'Nuxt 3' | 'express' | 'PostgreSQL' | 'Unity3D' | 'C#' | 'NginX' | 'PM2' | 'Wix';

export type Technology = {
    id: TechnologiesId;
    label: TechnologiesLabel;
    logoSvg: string;
    // logoAlt: string;
};