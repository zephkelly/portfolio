<template>
  <Head>
    <Title>Contact Me</Title>
    <meta name="description" content="Hi there! I'm excited to hear from you. If you have a project in mind, feel free to reach out through my contact page. Let's work together to bring your ideas to life. Fill out the form and let's start the conversation today.">
  </Head>
  <section class="component">
    <div class="container">
      <div class="backlink">
        <nuxt-link to="/">Home</nuxt-link>
        <span>/</span>
        <nuxt-link class="slug-link" to="">Contact</nuxt-link>
      </div>
      <div class="contact">
        <h1>Get in touch</h1>
        <p class="description">Fill out the form below to send me a message!</p>
        <form @submit.prevent="send">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email">
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message" v-model="message"></textarea>
          </div>
          <!-- Honeypot: hidden from real users, bots tend to fill it. Server silently drops if set. -->
          <div class="hp-field" aria-hidden="true">
            <label for="website">Website</label>
            <input type="text" id="website" name="website" v-model="honeypot" tabindex="-1" autocomplete="off">
          </div>
          <button type="submit" :class="{ sending }" :disabled="sending" :aria-busy="sending">
            <span v-if="sending" class="spinner" aria-hidden="true"></span>
            <span v-else>Send</span>
          </button>
        </form>
        <p class="status" v-if="status">Message sent!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      honeypot: '',
      status: false,
      sending: false
    }
  },
  methods: {
    async send() {
      if (!this.name || !this.email || !this.message) {
        alert('Please fill out all fields!')
        return;
      }

      this.sending = true;
      this.status = false;

      try {
        await $fetch('/api/contact', {
          method: 'POST',
          body: {
            name: this.name,
            email: this.email,
            message: this.message,
            honeypot: this.honeypot,
          },
        })

        // Show message sent confirmation and clear the form
        this.status = true;
        this.name = '';
        this.email = '';
        this.message = '';
      } catch (error) {

        alert('Sorry, an error occured and the message was not sent. Please try again!')
        this.status = false;

        console.error(error);
      } finally {
        this.sending = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .backlink {
    display: flex;
    margin-top: 10rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;

    @media (max-width: 768px) {
      margin-top: 8rem;
    }

    a {
      font-size: 1rem;
      text-transform: capitalize;
      text-decoration: none;

      &:last-of-type {
        margin-left: 0.8em;
        opacity: 0.6;

      }
    }

    span {
      font-size: 1.2rem;
      margin-left: 0.8em;
    }

    * {
       color: var(--text-foreground-secondary);
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 3rem;
      margin-bottom: 1.4rem;
      color: var(--text-foreground);
    }

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }

    .description {
      color: var(--text-foreground-secondary);
    }

    .status {
      color: var(--accent-accessible);
      margin-top: 1rem;
    }
  }

  form {
    margin-top: 3rem;

    // Honeypot — kept in the accessibility tree off-screen rather than display:none,
    // since some bots skip display:none/visibility:hidden fields.
    .hp-field {
      position: absolute;
      left: -5000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      label {
        font-family: 'Inter', sans-serif;
        color: var(--text-foreground-secondary);
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 0.4rem;
      }

      @media (max-width: 400px) {
        &:nth-child(3) {
          label {
            margin-bottom: 0.5rem;
          }
        }
      }
    }

    input, textarea {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      padding: 0.5rem;
      color: var(--text-foreground);
      background-color: var(--background-darker);
      border: 1px solid var(--border-color);
      transition: border-color 0.1s ease-out;
      border-radius: 0.4rem;
      outline: none;

      &:focus {
        border: 1px solid var(--accent-accessible);
      }
    }

    textarea {
      height: 10rem;
      max-width: calc(100% - 1rem);
      min-width: calc(100% - 1rem);
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      height: 2rem;
      width: 4.5rem;
      color: var(--text-foreground);
      background-color: var(--background-darker);
      border: 1px solid var(--border-color);
      border-radius: 0.4rem;
      transition: background-color 0.1s ease-out, border-color 0.1s ease-out;
      cursor: pointer;

      &:hover {
        background-color: var(--background-hover);
        border-color: var(--border-color-hover);
      }

      &:disabled {
        cursor: not-allowed;

        &:hover {
          background-color: var(--background-darker);
          border-color: var(--border-color);
        }
      }
    }

    .spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid var(--border-color-hover);
      border-top-color: var(--accent-accessible);
      border-radius: 50%;
      animation: contact-spin 0.6s linear infinite;
    }
  }

  @keyframes contact-spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation-duration: 1.5s;
    }
  }
</style>
