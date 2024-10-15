<template>
    <div>
        <div ref="navObserver" class="nav-observer"></div>
        <section 
            style="position: fixed;"
            class="component"
            :class="{ 'nav-hidden': isNavHidden }"
        >
            <div class="container">
                <header>
                    <div class="logo" @click="tryCloseMenu()">
                        <NuxtLink to="/" :tabindex="menuActive ? -1 : 0" :class="{ 'overlay-active': menuActive }">
                            <span class="fill">E</span>
                            <span class="outline">K</span>
                        </NuxtLink>
                    </div>
                    <div class="menu">
                        <button 
                            tabindex="0" 
                            @click="toggleMenu()" 
                            :class="{ active: menuActive }"
                            aria-label="Toggle navigation menu"
                            :aria-expanded="menuActive"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="48" height="48" aria-hidden="true" focusable="false"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
                        </button>
                        <ul :class="{ active: menuActive }">
                            <li v-if="isHome === false">
                                <BButton class="menu-link" variant="flat" holdable to="/">
                                    Home
                                </BButton>
                            </li>
                            <li>
                                <BButton class="menu-link" variant="flat" holdable to="/contact">
                                    Contact
                                </BButton>
                            </li>
                            <li>
                                <BButton class="menu-link" variant="flat" holdable to="/resume">
                                    Resume
                                </BButton>
                            </li>
                        </ul>
                    </div>
                    <div class="socials" @click="tryCloseMenu()">
                        <a href="https://github.com/zephkelly" class="github" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" tabindex="0" :class="{ 'overlay-active': menuActive }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/evan-kelly/" class="linkedin" target="_blank" rel="noopener noreferrer" aria-label="Connect with me on LinkedIn" tabindex="0" :class="{ 'overlay-active': menuActive }">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                            </svg>
                        </a>
                    </div>
                </header>
            </div>
        </section>
        <div class="overlay" :class="{ active: menuActive }" @click="tryCloseMenu()"></div>
    </div>
</template>

<script setup lang="ts">
const menuActive: Ref<boolean> = ref(false);

function debounce(func: any, timeout: any) {
    let timeoutId: any;

    return (...args: any) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, timeout);
    };
}

const toggleMenu = debounce(() => {
    menuActive.value = !menuActive.value;
}, 100);

const tryCloseMenu = () => {
    if (menuActive.value === false) return;
    menuActive.value = false;
};

const route = useRoute();
const isHome: ComputedRef<boolean> = computed(() => route.path === '/');

// Intersection Observer and Scroll-Linked effects
const isNavHidden: Ref<boolean> = ref(false);
const hasScrolled: Ref<boolean> = ref(false);
const navObserver: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);

let lastScrollY = 0;
const TOP_MARGIN = 20;
const observerOptions = {
    root: null,
    rootMargin: `${TOP_MARGIN}px 0px 0px 0px`,
    threshold: 0
};

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        isNavHidden.value = false;
        hasScrolled.value = false;
    } else {
        hasScrolled.value = true;
    }
};

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (menuActive.value) {
        menuActive.value = false;
    }

    if (currentScrollY <= TOP_MARGIN) {
        isNavHidden.value = false;
    }
    else if (currentScrollY < lastScrollY) {
        isNavHidden.value = false;
    }
    else if (currentScrollY > lastScrollY && currentScrollY > TOP_MARGIN) {
        isNavHidden.value = true;
    }

    lastScrollY = currentScrollY;
};

const debouncedHandleScroll = debounce(handleScroll, 10);

let observer: IntersectionObserver;

onMounted(() => {
    if (navObserver.value) {
        observer = new IntersectionObserver(handleIntersect, observerOptions);
        observer.observe(navObserver.value);
    }

    window.addEventListener('scroll', debouncedHandleScroll);
});

onUnmounted(() => {
    if (observer && navObserver.value) {
        observer.unobserve(navObserver.value);
    }

    window.removeEventListener('scroll', debouncedHandleScroll);
});
</script>

  
<style lang="scss" scoped>
.nav-observer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: transparent;
    pointer-events: none;
}

section {
    height: 64px;
    background-color: var(--background-translucent);
    backdrop-filter: blur(6px);
    z-index: 100;

    &.component {
        transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.3s ease;
        will-change: transform, opacity;

        &.nav-hidden {
            transform: translateY(-100%);
            opacity: 0;
        }
    }
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
    order: 1;

    a {
        width: 3.2rem;
        display: flex;
        justify-content: center;
        gap: 0.05rem;
        align-items: center;
        font-family: 'Roboto';
        font-weight: 900;
        font-size: 1.8rem;
        font-style: normal;
        text-decoration: none;
        letter-spacing: 0.1em;
        transition: opacity 0.15s ease-out;
        color: var(--background);
        background-image: linear-gradient(260deg, var(--accent-main), var(--accent-secondary));
        opacity: 0.9;
        background-clip: text;
        background-size: 150% 100%;
        -webkit-text-stroke: 4px transparent;
        user-select: none;
        cursor: pointer;
        border-radius: 6px;

        @media (prefers-color-scheme: light) {
            gap: 0.15rem;
            -webkit-text-stroke: 8px transparent;

            .outline {
                font-size: 1.42rem;
            }
        }

        :root[data-color-scheme="light"] & {
            gap: 0.15rem;
            -webkit-text-stroke: 8px transparent;

            .outline {
                font-size: 1.42rem;
            }
        }

        span {
            position: relative;
            left: -0.15rem;
            user-select: none;
        }

        span.fill {
            font-size: 2rem;
            display: inline-block;
            color: transparent;
            background-size: 145% 145%;
            background-clip: text;
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
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
    height: 44px;
    
    button {
        display: none;
        background-color: transparent;
        border: none;
        height: 100%;
        width: 44px;
        padding: 0;
        cursor: pointer;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        
        svg {
            width: 32px;
            height: 32px;
            fill: var(--foreground);
        }
        
        &.active {
            background-color: rgba(255, 255, 255, 0.06);
        }
    }
    
    ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .menu-link {
        width: 82px;
        letter-spacing: 0.5px;
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
    order: 3;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 28px;
        width: 28px;
        border-radius: 6px;

        &:focus {
            outline: none;
        }

        &:focus-visible {
            outline: 2px solid var(--foreground);
            box-shadow: 0 0 0 5px var(--background); 
        }

        &.linkedin {
            transform: scale(1.1);
        }

        &:hover {
            opacity: 0.6;
        }

        @media (prefers-color-scheme: light) {
            &:hover {
                opacity: 0.9;
            }
        }

        :root[data-color-scheme="light"] & {
            &:hover {
                opacity: 0.9;
            }
        }
    }

    svg {
        width: 100%;
        height: 100%;
        fill: var(--foreground);

    }
}

.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 99;
}

.overlay-active {
    cursor: default;
    pointer-events: none;
}

//Mobile menu
@media (max-width: 1000px) {
    .logo {
        order: 2;
    }

    .menu {
        width: 44px;
        order: 1;

        button {
            display: flex;
            background-color: transparent;

            &:hover {
                background-color: var(--background-hover);
            }

            &.active {
                background-color: var(--menu-mobile-background);
            }
        }

        ul {
            flex-direction: column;
            position: absolute;
            top: 76px;
            left: 0rem;
            right: 0rem;
            padding: 0.5rem;
            border-radius: 8px;
            backdrop-filter: blur(26px);
            background-color: var(--menu-mobile-background);
            max-width: 500px;
            opacity: 0;
            pointer-events: none;
            
            li {
                border-radius: 6px;
                width: 100%;
                
                a.menu-link {
                    box-sizing: border-box;
                    height: 64px;
                    width: 100%;
                    transition: border-color 0.1s ease, background-color 0.1s ease, box-shadow 0.1s ease;
                    
                    &:hover {
                        background-color: var(--background-active);
                        border-color: var(--background-active);
                    }
                    
                    &.breeze-button--active {
                        background-color: var(--background-active-secondary);
                        border-color: var(--background-active-secondary);
                    }
                }
            }
            
            &.active {
                opacity: 1;
                transition: opacity 0.2s ease;
                pointer-events: all;
            }
        }
    }

    .socials {
        width: 44px;

        a {
            width: 44px;
            height: 44px;

            svg {
                width: 28px;
                height: 28px;
            }
        }
    }

    .overlay {
        display: block;
        pointer-events: none;

        &.active {
            opacity: 1;
            pointer-events: auto;
        }
    }
}

@media (max-width: 768px) {
    .socials {
        a.linkedin {
            display: none;
        }
    }
}
</style>