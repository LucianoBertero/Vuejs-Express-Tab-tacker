import { default } from '../App.vue';

<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />

    <br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Password"
    />
    <br />
    <div class="error" v-html="error"></div>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  watch: {
    email(value) {
      console.log("email has changed", value);
    },
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
  mounted(err) {},
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
