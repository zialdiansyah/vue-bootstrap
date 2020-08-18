<template>
  <div class="mt-4 container">
    <button v-if="photos.length > 0" type="button" class="btn btn-primary mb-4" @click="back">Back</button>
    <div v-if="photos.length !== 0" class="row">
      <div v-for="photo in photos" :key="photo.id" class="col-md-4">
        <div class="card mb-4">
          <img class="card-img-top" width="100%" height="180" :src="photo.thumbnailUrl">
          <div class="card-body">
            <p class="card-text text-truncate">{{photo.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div v-for="(album, index) in albums" :key="album.id" class="col-md-4">
        <div class="card mb-4 click" @click="getPhotos(album.id)">
          <svg
            class="card-img-top"
            width="100%"
            height="180"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >
            <title>Album {{index+1}}</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="40%" y="50%" fill="#eceeef" dy=".3em">Album {{index+1}}</text>
          </svg>
          <div class="card-body">
            <p class="card-text text-truncate">{{album.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    photos: [],
    albums: []
  }),
  mounted() {
    this.getAlbums();
  },
  methods: {
    async getAlbums() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const json = await response.json();
      this.albums = json.slice(0, 9);
    },
    async getPhotos(albumId) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const json = await response.json();
      this.photos = json.filter(photo => photo.albumId === albumId).slice(0, 9);
    },
    back() {
      this.photos = [];
    }
  }
};
</script>
<style>
.click {
  cursor: pointer;
}
</style>

