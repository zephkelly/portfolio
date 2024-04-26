<template>
    <h2>My Education</h2>
    <p class="degree">📚 Bachelor of Computer Science, Software Development Major </p>
    <div class="image">
        <img src="/images/education-griffith.webp">
    </div>
    <p class="location">📍 Griffith University. Gold Coast, Australia</p>
    <p class="info">Ever since I was a child, I have always been fascinated by computers.My dream was to create my own video games, a goal which I have now come to realise after I began my studies of computer programming.</p>
    <p class="info info2">Currently in my second year of studies, I plan to complete my degree by the end of 2025. I aim to use my creative talents and merge them with technical proficiency so that I am able to create stunning applications of all types. I want to work on projects that make an impact in the world and allow me ot challenge myself to overcome new obstacles and grow myself as a developer.</p>
    <p class="info info3">My goal is to use my time as efficiently as I can while studying, making sure I am gaining as much knowledge as I can. I am also pushing myself to work on practical projects on top of my projects in class so that I can apply my new found knowledge and demonstrate my capabilities.</p>
</template>

<style lang="scss" scoped>
    h2, p{
        font-weight: 00;
        color: var(--text-main-color);
    }

    p {
        font-family: "Inter", sans-serif;
        color: var(--text-secondary-color);

        &.degree {
            margin-bottom: 2rem;
        }

        &.location {
            margin-top: 0.5rem;
        }

        &.info {
            margin-top: 3rem;
            line-height: 1.4rem;
        }

        &.info2 {
            margin-top: 1.8rem;
        }

        &.info3 {
            margin-top: 1.8rem;
        }

    }
    
    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        @media (max-width: 768px) {
        grid-template-columns: 1fr;
        }

        @media (max-width: 400px) {
        gap: 3rem;
        }
    }

    .image {
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 0.5rem;
        overflow: hidden;

        @media (prefers-color-scheme: light) {
        border: 1px solid rgba(0, 0, 0, 0.326);
        }

        img {
            width: 100%;
            height: 100%;
        }

        p {
            color: white;
        }
    }
</style>