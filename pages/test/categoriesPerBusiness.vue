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
        business_id: 1,
        list: [
          {
            business_category_id: 1,
          },
          {
            business_category_id: 2,
          },
          {
            business_category_id: 3,
          },
          {
            business_category_id: 4,
          },
          {
            business_category_id: 5,
          },
        ],
      };

      this.$axios
        .$post("/categoriesPerBusiness", data)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteItem() {
      this.$axios
        .$delete("/categoriesPerBusiness/1")
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/categoriesPerBusiness/1")
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
