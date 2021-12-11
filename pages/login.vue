<template>
  <div>
    <button @click="login()">Login</button>
    <button @click="googleLogin()">google</button>
    <button @click="facebookLogin()">facebook</button>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith("laravelSanctum", {
        data: {
          email: "edgarlastimones@gmail.com",
          password: "password",
        },
      });
    },
    googleLogin() {
      this.$auth.loginWith("google");
    },
    facebookLogin() {
      this.$auth.loginWith("facebook");
    },
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
