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

    <div v-html="layout"></div>
  </div>
</template>
<script>
export default {
  data: () => ({
    layout: {},
    layoutDetails: {},
  }),
  async fetch() {
    await this.$axios.$get("/layout/1").then((response) => {
      this.layout = JSON.parse(response.layout_information).layout;
      this.layoutDetails = JSON.parse(
        response.layout_information
      ).layout_details;
    });
  },
  methods: {
    post() {
      let jsondata = JSON.stringify({
        layout: `    <button @click="post">post</button>
    <button @click="deleteItem">delete</button>
    <button @click="patchData">patch</button>
    <button @click="getData">get</button>

    <button
      class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      @click.prevent="awit"
    >
      awit
    </button>`,
      });
      let formData = new FormData();
      formData.append("name", "awit");
      formData.append("layout_information", jsondata);
      this.$axios
        .$post("/layout", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteItem() {
      this.$axios
        .$delete("/layout/2")
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    patchData() {
      let jsondata = JSON.stringify({
        layout: `    <button @click="post">post</button>
    <button @click="deleteItem">delete</button>
    <button @click="patchData">patch</button>
    <button @click="getData">get</button>

    <img src="layoutDetails.image1"/>

    <button
      class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
      @click.prevent="awit"
    >
      awit
    </button>`,
        layout_details: {
          image1: "asdasdasd",
        },
      });

      let formData = {
        _method: "patch",
        name: "awit kaasdd",
        layout_information: jsondata,
      };

      this.$axios
        .$post("/layout/1", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/layout/2")
        .then((response) => {
          this.layout = JSON.parse(response.layout_information).layout;
          this.layoutDetails = JSON.parse(
            response.layout_information
          ).layout_details;
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
