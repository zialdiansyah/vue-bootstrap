<template>
  <div>
    <ul>
      <li v-for="user in userProps" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["userProps"],
};
</script>

<style>
</style>