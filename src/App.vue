<template>
  <div id="app">
    <NavBar/>
    <Album />
  </div>
</template>

<script>
import NavBar from "./components/Header";
import Album from "./components/Album";

export default {
  name: "App",
  components: {
    Album,
    NavBar
  }
};
</script>
