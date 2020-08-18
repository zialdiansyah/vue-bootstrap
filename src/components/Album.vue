<template>
  <div class="mt-4 container">
    <div class="row">
      <div v-for="photo in photos" :key="photo.id" class="col-md-4">
        <div class="card mb-4">
          <img class="card-img-top" :src="photo.thumbnailUrl">
          <div class="card-body">
            <p class="card-text">{{photo.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    photos: []
  }),
  mounted() {
    this.getPhotos();
  },
  methods: {
    async getPhotos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const json = await response.json();
      this.photos = json;
    }
  }
};
</script>
