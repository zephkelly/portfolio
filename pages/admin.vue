<template>
    <div class="admin">
        <!-- Not logged in: credentials form. On any page reload we start here
             again because `token` lives only in component memory. -->
        <form v-if="!token" class="card" @submit.prevent="login">
            <h1>Admin</h1>
            <p class="hint">Session ends on reload. Sign in to manage privacy mode.</p>

            <label>
                <span>Username</span>
                <input v-model="username" type="text" autocomplete="off" autofocus />
            </label>
            <label>
                <span>Password</span>
                <input v-model="password" type="password" autocomplete="off" />
            </label>

            <p v-if="error" class="error">{{ error }}</p>

            <BButton type="submit" variant="solid" :loading="loading" width="full">
                Sign in
            </BButton>
        </form>

        <!-- Logged in: the single configuration option. -->
        <div v-else class="card">
            <div class="head">
                <h1>Admin</h1>
                <button class="logout" type="button" @click="logout">Log out</button>
            </div>

            <div class="setting">
                <div class="setting-text">
                    <span class="setting-title">Privacy mode</span>
                    <span class="setting-desc">
                        Softens the "looking for work" wording and hides the resume.
                    </span>
                </div>

                <button
                    class="switch"
                    type="button"
                    role="switch"
                    :aria-checked="privacyMode"
                    :class="{ on: privacyMode }"
                    :disabled="saving"
                    @click="togglePrivacy"
                >
                    <span class="knob"></span>
                </button>
            </div>

            <p class="status">
                Privacy mode is <strong>{{ privacyMode ? 'ON' : 'OFF' }}</strong>.
            </p>
            <p v-if="error" class="error">{{ error }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
// Own chrome — no navbar/footer on the admin screen.
definePageMeta({ layout: false });
useColorScheme();
useHead({
    title: 'Admin',
    // Keep this page out of search engines.
    meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});

// `token` is a plain in-memory ref, never persisted. A full page reload
// re-runs setup with token = null, so the admin is logged out immediately.
const token = ref<string | null>(null);
const privacyMode = ref(false);

const username = ref('');
const password = ref('');
const loading = ref(false);
const saving = ref(false);
const error = ref('');

async function login() {
    error.value = '';
    loading.value = true;
    try {
        const res = await $fetch<{ token: string; privacyMode: boolean }>('/api/admin/login', {
            method: 'POST',
            body: { username: username.value, password: password.value },
        });
        token.value = res.token;
        privacyMode.value = res.privacyMode;
    } catch {
        error.value = 'Invalid credentials.';
    } finally {
        loading.value = false;
        password.value = '';
    }
}

function logout() {
    token.value = null;
    username.value = '';
    password.value = '';
    error.value = '';
}

async function togglePrivacy() {
    if (!token.value) return;
    error.value = '';
    saving.value = true;
    const next = !privacyMode.value;
    try {
        const res = await $fetch<{ enabled: boolean }>('/api/admin/privacy', {
            method: 'POST',
            headers: { Authorization: `Bearer ${token.value}` },
            body: { enabled: next },
        });
        privacyMode.value = res.enabled;
    } catch (e: any) {
        // Token expired or invalid -> force re-login.
        if (e?.statusCode === 401) {
            logout();
            error.value = 'Session expired. Please sign in again.';
        } else {
            error.value = 'Could not update privacy mode.';
        }
    } finally {
        saving.value = false;
    }
}
</script>

<style lang="scss" scoped>
.admin {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-sizing: border-box;
}

.card {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    border-radius: 12px;
    background-color: var(--background-hover);
    border: 1px solid var(--background-active);
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
    color: var(--text-foreground);
}

.hint {
    margin: -0.75rem 0 0;
    font-size: 0.9rem;
    color: var(--text-foreground-secondary, var(--text-foreground));
    opacity: 0.7;
}

label {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-foreground);
    }

    input {
        height: 40px;
        padding: 0 0.75rem;
        border-radius: 6px;
        border: 1px solid var(--background-active);
        background-color: var(--background);
        color: var(--text-foreground);
        font-size: 1rem;

        &:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 1px;
        }
    }
}

.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logout {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--text-foreground);
    opacity: 0.7;
    text-decoration: underline;

    &:hover {
        opacity: 1;
    }
}

.setting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.setting-text {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.setting-title {
    font-weight: 600;
    color: var(--text-foreground);
}

.setting-desc {
    font-size: 0.85rem;
    color: var(--text-foreground);
    opacity: 0.65;
    line-height: 1.3;
}

.switch {
    flex-shrink: 0;
    position: relative;
    width: 52px;
    height: 30px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    background-color: var(--background-active);
    transition: background-color 0.15s ease;

    &.on {
        background-color: var(--accent);
    }

    &:disabled {
        cursor: default;
        opacity: 0.6;
    }

    &:focus-visible {
        outline: 2px solid var(--foreground);
        outline-offset: 2px;
    }

    .knob {
        position: absolute;
        top: 3px;
        left: 3px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #fff;
        transition: transform 0.15s ease;
    }

    &.on .knob {
        transform: translateX(22px);
    }
}

.status {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-foreground);
    opacity: 0.8;
}

.error {
    margin: 0;
    font-size: 0.9rem;
    color: #e05252;
}
</style>
