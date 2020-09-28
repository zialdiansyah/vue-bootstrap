<template>
  <div id="album">
    <nav-bar />
    <album-component />
  </div>
</template>

<script>
import AlbumComponent from "../components/AlbumComponent.vue";
import NavBar from "../components/Navbar";
export default {
  name: "Album",
  components: {
    NavBar,
    AlbumComponent,
  },
};
</script>
