import { type TechnologiesId, type Technology } from "./technologies.types";

export type WorkType = 'personal' | 'client' | 'volunteer';

export type WorkImage = {
    imageUrl: string;
    imageAlt: string;
    imageLabel: string;
    imageType: 'desktop' | 'mobile';
}

export type WorkDescriptionSection = {
    [key: string]: {
        [key: string]: string;
    };
}

export type Work = {
    id: number;
    slug: string;
    title: string;
    type: string;
    link: string;
    linkLabel: string;
    githubLink: string;
    githubLabel: string;
    coverImageUrl: string;
    coverImageAlt: string;
    overview: string;
    technologies: {
        [key in TechnologiesId]?: string;
    }
    descriptionSections: WorkDescriptionSection;
    imageGallery: {
        [key: string]: WorkImage;
    };
};

export type WorkCard = Omit<
    Work,
    'descriptionSections' | 'imageGallery' | 'githubLink' | 'githubLabel' | 'link' | 'linkLabel'
>;