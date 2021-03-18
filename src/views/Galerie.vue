<template>
  <div id="galerie">
    <div class="pa-4" align="center" justify="center">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

  export default {
    name: 'Galerie',
    data: function () {
      return {
        images: [],
        index: null
      };
    },
    components: {
      'gallery': VueGallery,
    },
    mounted() {
      this.importAll(require.context('../assets/galerie/', true, /\.webp$/));
    },
    methods: {
      importAll(r) {
        // r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
        r.keys().forEach(key => (this.images.push(r(key))));
      },
    },
  }
</script>
<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>