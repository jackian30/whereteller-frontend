<template>
  <div>
    <h1>verify</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.query);
    this.$axios
      .$get(this.$route.query.verify_url)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
