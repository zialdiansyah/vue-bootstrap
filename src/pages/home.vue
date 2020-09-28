<template>
  <div class="container">
    <h3>List User</h3>
    <list-user :user-props="users" />
  </div>
</template>

<script>
import ListUser from "../components/ListUser.vue";
export default {
  components: {
    ListUser,
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