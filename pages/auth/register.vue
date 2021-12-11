<template>
  <div class="flex justify-center items-center mt-52">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label
          >
          <input
            id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <span class="text-xs text-red-700" id="emailHelp"></span>
        </div>

        <div class="firstname-input mb-4">
          <label
            for="firstname"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Firstname</label
          >
          <input
            id="firstname"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="firstname"
            aria-describedby="firstnameHelp"
            v-model="firstname"
          />
          <span class="text-xs text-red-700" id="firstnameHelp"></span>
        </div>

        <div class="middlename-input mb-4">
          <label
            for="middlename"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            middlename</label
          >
          <input
            id="middlename"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="middlename"
            aria-describedby="middlenameHelp"
            v-model="middlename"
          />
          <span class="text-xs text-red-700" id="fmiddlenameHelp"></span>
        </div>

        <div class="lastname-input mb-4">
          <label
            for="lastname"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            lastname</label
          >
          <input
            id="lastname"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="lastname"
            aria-describedby="lastnameHelp"
            v-model="lastname"
          />
          <span class="text-xs text-red-700" id="lastnameHelp"></span>
        </div>

        <div class="phone-input mb-4">
          <label for="phone" class="block text-gray-700 text-sm font-bold mb-2">
            phone</label
          >
          <input
            id="phone"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="phone"
            aria-describedby="phoneHelp"
            v-model="phone"
          />
          <span class="text-xs text-red-700" id="phoneHelp"></span>
        </div>

        <div class="company-input mb-4">
          <label
            for="company"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            company</label
          >
          <input
            id="company"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="company"
            aria-describedby="companyHelp"
            v-model="company"
          />
          <span class="text-xs text-red-700" id="companyHelp"></span>
        </div>

        <div class="password-input mb-6">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >

          <input
            aria-describedby="passwordHelp"
            v-model="password"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
          />

          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click.prevent="register"
          >
            Register
          </button>
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click.prevent="awit"
          >
            awit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      middlename: "",
      lastname: "",
      phone: "",
      company: "",
      user_type_id: "",
    };
  },
  methods: {
    register() {
      let formData = new FormData();
      formData.append("email", this.email ? this.email : "");
      formData.append("password", this.password ? this.password : "");
      formData.append(
        "password_confirmation",
        this.password ? this.password : ""
      );
      formData.append("name", `${this.firstname} ${this.lastname}`);
      formData.append("firstname", this.firstname ? this.firstname : "");
      formData.append("middlename", this.middlename ? this.middlename : "");
      formData.append("lastname", this.lastname ? this.lastname : "");
      formData.append("phone", this.phone ? this.phone : "");
      formData.append("company", this.company ? this.company : "");
      formData.append("user_type_id", 1);
      this.$axios
        .$post("/register", formData)
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
