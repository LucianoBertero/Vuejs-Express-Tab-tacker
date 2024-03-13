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
    };
  },
  watch: {
    email(value) {
      console.log("email has changed", value);
    },
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
