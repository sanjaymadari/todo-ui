<template>
<div>
    <Navbar/>

  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>


          <form method="post" @submit.prevent="register">

            <div class="field">
              <label class="label">Name</label>

              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="name"
                  v-model="name"
                  required
                  placeholder="Enter your name"
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                  required
                  placeholder="Enter your email"
                >
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>

              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                  required
                  placeholder="Enter your password"
                >
              </div>
            </div>

            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {

  components: {
    Navbar,
  },

  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('http://localhost:5248/api/user/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push('/login');
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

