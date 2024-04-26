<template>
    <h2>My Skills</h2>
    <h3>Programming Languages</h3>
    <ul>
        <li><strong>C# | <span class="proficient">Proficient</span>:</strong> My most comfortable language, I have built various web and desktop application using C# and .NET libraries</li>
        <li><strong>JavaScript | <span class="competent">Competent</span>:</strong> I have built various web applications using JavaScript and its frameworks such as Vue.js and Nuxt3</li>
        <li><strong>Python | <span class="familiar">Familiar</span>:</strong> I have written various CLI programs and interfaces using python to process data.</li>
        <li><strong>C++ | <span class="familiar">Familiar</span></strong> While being the language I have the least experience in, I have worked on many interesting projects.</li>
    </ul>
    <h3 class="technologies">Technologies</h3>
    <ul>
        <li><strong>Git | <span class="proficient">Proficient</span></strong></li>
        <li><strong>Vue.js | <span class="proficient">Proficient</span></strong></li>
        <li><strong>Nuxt3 | <span class="proficient">Proficient</span></strong></li>
        <li><strong>Unity3D | <span class="proficient">Proficient</span></strong></li>
        <li><strong>AWS | <span class="proficient">Proficient</span></strong></li>
        <li><strong>MongoDB | <span class="competent">Competent</span></strong></li>
        <li><strong>PostgresSQL | <span class="competent">Competent</span></strong></li>
    </ul>

</template>

<style lang="scss" scoped>
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        color: var(--text-main-color);
        margin-bottom: 2rem;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        color: var(--text-main-color);
        margin-bottom: 0.5rem;

        &.technologies {
            margin-top: 3rem;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 0.8rem;
            color: var(--text-secondary-color);

            strong {
                color: var(--text-main-color);
                font-weight: 600;
            }

            &:before {
                content: '•';
                font-size: 1rem;
                margin-right: 0.4rem;
            }

            .proficient {
                color: rgb(54, 213, 65);
            }

            .competent {
                color: rgb(255, 232, 28);
            }

            .familiar {
                color: rgb(255, 108, 16);
            }
        }
    }
</style>