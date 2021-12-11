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
      let formData = new FormData();
      formData.append("name", "awit");
      formData.append("price", 16000);
      formData.append("description", "awit lods");
      formData.append("business_id", 1);
      this.$axios
        .$post("/service", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteItem() {
      this.$axios
        .$delete("/service/1")
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
        name: "awit kaasdd",
        price: 69,
        description: "description",
      };

      this.$axios
        .$post("/service/1", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/service/1")
        .then((response) => {
          console.log(response);
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
