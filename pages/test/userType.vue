<template>
  <div>
    <button @click="post">post</button>
    <button @click="deleteItem">delete</button>
    <button @click="patchData">patch</button>
    <button @click="getData">get</button>

    <button
      class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      @click.prevent="awit"
    >
      awit
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    post() {
      let jsondata = JSON.stringify({
        awit: "awit",
      });
      let formData = new FormData();
      formData.append("name", "new type");
      this.$axios
        .$post("/userType", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteItem() {
      this.$axios
        .$delete("/userType/2")
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    patchData() {
      let formData = {
        _method: "patch",
        name: "new type",
      };

      this.$axios
        .$post("/userType/1", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/userType/1")
        .then((response) => {
          console.log(response);

          console.log(JSON.parse(response.access));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    awit() {
      this.$axios
        .$get("/awit")
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
