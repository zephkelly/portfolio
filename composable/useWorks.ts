import { ref, computed } from 'vue';
import { type Work, type WorkCard } from '~/types/work.types';
import { type Technology, type TechnologiesId } from '~/types/technologies.types';
import worksData from '~/assets/json/works.json';
import technologiesData from '~/assets/json/technologies.json';

export function useWorks() {
    const works = ref<Work[]>(worksData as unknown as Work[]);
    const technologies = ref<Technology[]>(technologiesData as unknown as Technology[]);

    const workCards = computed<WorkCard[]>(() => 
        works.value.map((work: Work) => ({
            id: work.id,
            slug: work.slug,
            title: work.title,
            type: work.type,
            coverImageUrl: work.coverImageUrl, // Provide default values if these are missing in your JSON
            coverImageAlt: work.coverImageAlt,
            overview: work.overview,
            technologies: work.technologies
        }))
    );

    const getTechnologies = (work: WorkCard) => {
        const techObject = toRaw(work.technologies);
        const techIds = Object.keys(techObject) as TechnologiesId[];
        
        return technologies.value.filter((technology: Technology) => 
            techIds.includes(technology.id)
        );
    }

    return { works, workCards, getTechnologies };
}