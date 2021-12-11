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
      formData.append("long", -30.6789);
      formData.append("lat", 15.23456);
      formData.append("address", "b30, l11");
      formData.append("barangay", "barandal");
      formData.append("city", "calamba city");
      formData.append("province", "laguna");
      formData.append("postal_code", 4027);
      formData.append("email", "edgarlastimones@gmail.com");
      formData.append("description", "");
      formData.append("phone_number", "");
      formData.append("telephone_number", "");
      formData.append("website_url", "");
      formData.append("layout_information", "");
      this.$axios
        .$post("/business", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteItem() {
      this.$axios
        .$delete("/business/1")
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
        name: "awit",
        long: -30.6789,
        lat: 15.23456,
        address: "jack",
        barangay: "jack lolasd",
        city: "asdasd",
        province: "asdasd",
        postal_code: 4027,
        email: "edgarlastimones@gmail.com",
        description: "",
        phone_number: "",
        telephone_number: "",
        website_url: "",
        layout_information: "",
      };
      this.$axios
        .$post("/business/1", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/business/1")
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
