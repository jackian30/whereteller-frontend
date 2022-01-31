<template>
  <div>asdasd</div>
</template>

<script>
export default {
  async mounted() {
    await this.$echo
      .private(`App.Models.User.${this.$auth.$state.user.id}`)
      .listen("TestEvent", (e) => {
        console.log(e);
      });
  },
  beforeDestroy() {
    this.$echo.leave(`App.Models.User.${this.$auth.$state.user.id}`);
  },
};
</script>
