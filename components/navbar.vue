<template>
    <section style="position: fixed;" class="component">
        <div class="container">
            <header>
                <div class="logo">
                    <NuxtLink tabindex="0" to="/">
                        <span class="fill">E</span>
                        <span class="outline">K</span>
                    </NuxtLink>
                </div>
                <div class="menu">
                    <ul>
                        <li>
                            <BButton class="menu-link" variant="flat" to="/">
                                Home
                            </BButton>
                        </li>
                        <li>
                            <BButton class="menu-link" variant="flat" to="/contact">
                                Contact
                            </BButton>
                        </li>
                        <li>
                            <BButton class="menu-link" variant="flat" to="/contact">
                                Resume
                            </BButton>
                        </li>
                    </ul>
                </div>
                <div class="socials">
                    <a href="https://github.com/zephkelly" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" tabindex="0">
                        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/evan-kelly/" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 50 50">
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                        </svg>
                    </a>
                </div>
            </header>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default',
})
</script>

  
<style lang="scss" scoped>
section {
    height: 64px;
    background-color: var(--background-transparent);
    backdrop-filter: blur(6px);
    z-index: 100;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    max-width: 1000px;
    width: 100%;
    box-sizing: border-box;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;

    a {
        width: 3.2rem;
        display: flex;
        justify-content: center;
        gap: 0.1rem;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 1.8rem;
        font-style: italic;
        text-decoration: none;
        letter-spacing: 0.1em;
        transition: opacity 0.15s ease-out;
        color: var(--background);
        background-image: linear-gradient(260deg, #ffe203, #fbb346);
        opacity: 0.9;
        background-clip: text;
        background-size: 150% 100%;
        -webkit-text-stroke: 4px transparent;
        cursor: pointer;
        border-radius: 6px;

        span {
            position: relative;
            left: -0.15rem;
            user-select: none;
        }

        span.fill {
            font-size: 2.05rem;
            display: inline-block;
            color: transparent;
            background-size: 145% 145%;
            -webkit-text-stroke: 1px transparent;
            -webkit-background-clip: text;
        }

        &:focus {
            outline: none;
        }

        &:focus-visible {
            outline: 2px solid var(--foreground);
            box-shadow: 0 0 0 5px var(--background); 
        }
    }
}

.menu {
    ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .menu-link {
        width: 82px;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 1rem;
    }
}

.socials {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    height: 100%;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 26px;
        width: 26px;
        border-radius: 6px;

        &:focus {
            outline: none;
        }

        &:focus-visible {
            outline: 2px solid var(--foreground);
            box-shadow: 0 0 0 5px var(--background); 
        }
    }

    svg {
        width: 100%;
        height: 100%;
        opacity: 0.8;
        fill: var(--foreground);
  
        &:hover {
            opacity: 1;
        }

        &.github {
            opacity: 0.9;
      
            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>