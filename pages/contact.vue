<template>
  <section class="backlink">
    <nuxt-link to="/">Home</nuxt-link>
    <span>/</span>
    <nuxt-link class="slug-link" to="">Contact</nuxt-link>
  </section>
  <section class="contact">
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
      <button type="submit">Send</button>
    </form>
    <p class="status" v-if="status">Message sent!</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      status: false
    }
  },
  methods: {
    async send() {
      try {
        const { $mail } = useNuxtApp()

        $mail.send({
          from: `${this.name} <${this.email}>`,
          subject: `${this.name}: from Portfolio`,
          text: `${this.message}`,
        })

        // Show message sent confirmation
        setTimeout(() => {
          this.status = true;
        }, 500);
      } catch (error) {

        alert('Sorry, an error occured and the message was not sent. Please try again!')
        this.status = false;

        console.error(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    height: auto;
  }

  section.backlink {
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
       color: var(--text-secondary-color);
    }
  }

  section.contact {
    flex-direction: column;
    margin-bottom: 8rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 3rem;
      margin-bottom: 1.4rem
    }

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;
    }

    .description {
      color: var(--text-secondary-color);
    }

    .status {
      color: var(--accent-color);
    }
  }

  form {
    margin-top: 3rem;

    div {
      display: flex;
      flex-direction: column;

      &:nth-child(1) {

        margin-bottom: 1rem;
      }

      &:nth-child(2) {

        margin-bottom: 3rem;
      }

      label {
        font-family: 'Inter', sans-serif;
        color: var(--text-secondary-color);
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 0.2rem;
      }
    }

    input, textarea {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      padding: 0.5rem;
      border: 1px solid var(--text-secondary-color);
      background-color: #292830;
      border: 1px solid rgba(255, 255, 255, 0.16);
      transition: border-color 0.1s ease-out;
      border-radius: 0.4rem;
      outline: none;

      &:focus {
        border: 1px solid var(--accent-color);
      }

      @media (prefers-color-scheme: light) {
        background-color: rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0, 0, 0, 0.6);
      }
    }

    textarea {
      height: 10rem;
      max-width: calc(100% - 1rem);
      min-width: calc(100% - 1rem);
    }

    button {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      margin-top: 1.6rem;
      height: 2rem;
      width: 4.5rem;
      background-color: #292830;
      border: 1px solid rgba(255, 255, 255, 0.20);
      border-radius: 0.4rem;
      transition: background-color 0.1s ease-out;
      cursor: pointer;

      &:hover {
        background-color: #3d3c44;
      }

      @media (prefers-color-scheme: light) {
        background-color: rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(0, 0, 0, 0.6);

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
</style>