<template>
<div>
  <Navbar/>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Login!</h2>
          <form method="post" @submit.prevent="loginFromStore">

            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="data.email"
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
                  v-model="data.password"
                  required
                  placeholder="Enter your password"
                >
              </div>
            </div>

            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>

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
      data:{
        email: '',
        password: '',
      },

      error: null,
      token: '',
    };
  },

  methods: {
  async loginFromStore() {
      await this.$store.dispatch('login', this.data);
    },
    async login() {
      try {
        await this.$axios.post('http://localhost:5248/api/user/login', {
            email: this.email,
            password: this.password,

        }).then(response => {
          this.token = response.data;
          console.log(this.token);
        })

        this.$router.push('/todos/');
      } catch (e) {
        this.error = e.response.data.message;
      }
    },
  },
};
</script>

