<template>
    <section class="component">
        <div class="container">
            <img src="~/assets/images/profile.webp" />
            <h1>Hi, welcome to my site! <span data-v-1baf8294="">👋</span></h1>
            <p>
                I'm <a class="name" href="https://www.linkedin.com/in/evan-kelly/">Evan</a>, a fullstack software developer with a passion for creating beautiful, functional apps. 
                <span class="extra">Currently studying computer science <a target="_blank" href="https://www.linkedin.com/school/griffith-university/">@GriffithUni</a>.
                I'm seeking new opportunities to leverage my skills and contribute to impactful projects.</span> Let's discuss how I can add value to your team. Just <NuxtLink href="/contact">reach out!</NuxtLink>
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

h1 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}

p {
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4em;
    color: var(--text-foreground-secondary);
    opacity: 0.8;

    @media (max-width: 400px) {
        opacity: 1;
    }

    @media (prefers-color-scheme: light) {
        opacity: 0.9;
    }

    a {
        position: relative;
        cursor: pointer;
        color: var(--text-foreground);
        transition: color 0.05s ease-out;
        font-weight: 600;
        text-decoration: none;
        z-index: 1;
        white-space: nowrap;

        &::after {
            content: '';
            position: absolute;
            top: 1.25rem;
            right: -0.1rem;
            left: -0.1rem;
            bottom: -0.08rem;
            background-color: var(--accent-secondary);
            transition: top 0.2s cubic-bezier(0, 0.8, 0.13, 1);
            opacity: 0.8;
            transition: opacity 0.1 ease-out;
            z-index: -1;
        }

        &:hover::after, &:focus-visible::after, &:active::after {
            top: -0.08rem;
            opacity: 1;

            &:nth-child(2) {
                top: -0.1em;
                bottom: -0.14em;
            }
        }

        &:hover, &:focus-visible, &:active {
            color: var(--text-background);
        }
    }

    span.extra {
        @media (max-width: 768px) {
            display: none;
        }
    }
}

.spacer {
    margin-top: 4rem;
    width: 100%;
    border-bottom: 1px solid var(--accent-secondary);
    opacity: 0.1;
}
</style>