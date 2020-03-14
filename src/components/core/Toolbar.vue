<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="light-green darken-1"
      dark
      prominent
      shrink-on-scroll
      fade-img-on-scroll
      :src="require('@/assets/img/HG_Bild_72.jpg')"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(200,190,101,.5), rgba(35,35,25,.5)"
        ></v-img>
      </template>
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->

      <v-spacer></v-spacer>
<!-- 
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
-->
      <v-avatar color="light-green lighten-5" :size="size" style="margin-right: 40px;">
        <img
          :src="require('@/assets/img/Salamander.png')"
          alt="Salamander"
        >
      </v-avatar>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-for="(link, index ) in navlinks" :key="index" :to="{path: link.to}">
            <!-- <router-link :to="link.to">{{link.text}}</router-link> -->
            {{link.text}}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet> -->
  </v-card>
</template>
<script>
  // Utilities
  import {
    mapGetters
    // mapMutations
  } from 'vuex'

  export default {
    data: () => ({
      drawer:true,
      size: 220,
      window: {
        width: 0,
        height: 0
      }
    }),
    computed: {
      ...mapGetters(['navlinks'])
    },

    methods: {
      // ...mapMutations(['toggleDrawer']),
      handleResize() {
          this.window.width = window.innerWidth;
          this.window.height = window.innerHeight;
          if (this.window.height <= 200 || this.window.width <= 600) {
            this.size = 140
          } else if(this.window.width <= 1000) {
            this.size = 160
          } else {
            this.size = 215
          }
      },
      // onClick (e, item) {
      //   e.stopPropagation()

      //   if (item.to || !item.href) return

      //   this.$vuetify.goTo(item.href)
      // }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
  }
</script>
