<template>
  <div>
    <label class="custom-file" for="file">
      {{
        files.length ? `(${files.length}) files are selected` : "Choose files"
      }}
      <input
        @change="handleSelectedFiles"
        id="file"
        multiple
        name="file"
        ref="fileInput"
        type="file"
      />
    </label>

    <!--Show Selected Files-->
    <div class="large-12 medium-12 small-12 cell">
      <div class="file-listing" v-for="(file, key) in files" :key="key">
        {{ file.name }}
        <span class="remove-file" v-on:click="removeFile(key)">Remove</span>
      </div>
    </div>

    <!--Submit Button && Progress Bar-->
    <div>
      <button @click="post">Start Upload</button>
      - Upload progress : {{ this.progress }}
    </div>
    <!-- <button @click="post">post</button> -->
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
  data() {
    return {
      files: [],
      progress: 0,
    };
  },
  computed: {
    /*The FormData : Here We Make A Form With Images Data To Submit.*/
    form() {
      let form = new FormData();

      this.files.forEach((file, index) => {
        form.append("files[" + index + "]", file);
      });

      return form;
    },
  },
  mounted() {
    console.log(this.$auth.$state.user);
  },
  methods: {
    handleSelectedFiles() {
      let selectedFiles = this.$refs.fileInput.files;

      for (let i = 0; i < selectedFiles.length; i++) {
        /*Check Already Has Been Selected Or Not ...*/
        let isFileExists = this.files.find(
          (file) =>
            file.type === selectedFiles[i].type &&
            file.name === selectedFiles[i].name &&
            file.size === selectedFiles[i].size &&
            file.lastModified === selectedFiles[i].lastModified
        );

        if (!isFileExists) this.files.push(selectedFiles[i]);
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    async post() {
      // let formData = new FormData();
      // formData.append("name", "awit");
      // formData.append("price", 16000);
      // formData.append("description", "awit lods");
      // formData.append("business_id", 1);
      // this.$axios
      //   .$post("/media", formData)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      const config = {
        onUploadProgress: (progressEvent) =>
          (this.progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )),
      };

      this.$axios
        .$post("/media", this.form, config)
        .then((res) => {
          this.progress = 0;
          this.files = [];

          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    deleteItem() {
      this.$axios
        .$delete("/media/1")
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
        business_id: 1,
      };

      this.$axios
        .$post("/media/1", formData)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getData() {
      this.$axios
        .$get("/media/1")
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
