<template>
  <div>
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 mb-3 bg-white border-bottom box-shadow"
    >
      <svg width="35" height="35" viewBox="5 5 35 35" class="mr-auto my-0 ml-3">
        <path
          d="M5 40V5h35v35H5zm8.56-12.63c0 .56-.03.69-.32 1.03L10.8 31.4v.4h6.97v-.4L15.3 28.4c-.29-.34-.34-.5-.34-1.03v-8.95l6.13 13.36h.71l5.26-13.36v10.64c0 .3 0 .35-.19.53l-1.85 1.8v.4h9.2v-.4l-1.83-1.8c-.18-.18-.2-.24-.2-.53V15.94c0-.3.02-.35.2-.53l1.82-1.8v-.4h-6.47l-4.62 11.55-5.2-11.54h-6.8v.4l2.15 2.63c.24.3.29.37.29.77v10.35z"
        ></path>
      </svg>
      <nav class="my-2 my-md-0 mr-md-3">
        <search-icon class="mx-2" />
        <bookmark-icon class="mx-2" />
        <bell-icon class="mx-2" />
        <user-icon class="mx-2" />
      </nav>
    </div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="display-4">Integrating Vue with Bootstrap</div>
      </div>
      <list-user :user-props="users" />
    </div>
  </div>
</template>

<script>
import ListUser from "../components/ListUser.vue";
import searchIcon from "../components/icons/searchIcon";
import bellIcon from "../components/icons/bellIcon";
import bookmarkIcon from "../components/icons/bookmarkIcon";
import userIcon from "../components/icons/userIcon";
export default {
  components: {
    ListUser,
    searchIcon,
    bookmarkIcon,
    bellIcon,
    userIcon,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = await response.json();
    },
  },
};
</script>

<style>
</style>