<template>
  <div>
    <button @click="post">post</button>
    <button @click="deleteItem">delete</button>
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
      let data = {
        service_id: 1,
        list: [
          {
            media_id: 2,
            description: "testing lang naman lods",
          },
          {
            media_id: 1,
            description: "testing lang naman lods",
          },
          {
            media_id: 2,
            description: "testing lang naman lodsasd",
          },
        ],
      };

      this.$axios
        .$post("/mediasPerService", data)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteItem() {
      this.$axios
        .$delete("/mediasPerService/2")
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/mediasPerService/1")
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
