<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      style="position: static;"
      color="light-green darken-1"
      dark
      prominent
      shrink-on-scroll
      fade-img-on-scroll
      :src="require('@/assets/img/HG_Bild_72.jpg')"
      class=""
    >
      <template v-slot:img="{ props }">
        <v-img
          height="180px"
          v-bind="props"
          gradient="to top right, rgba(200,190,101,.2), rgba(35,35,25,.2)"
        ></v-img>
      </template>
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <information />
<!-- 
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
-->
      <div class="d-flex pa-2">
        <v-avatar color="light-green lighten-5" :size="size">
          <img
            :src="require('@/assets/img/Salamander.png')"
            alt="Salamander"
          >
        </v-avatar>
      </div>
      <template v-slot:extension>
        <v-tabs align-with-title class="hidden-sm-and-down">
          <v-tab v-for="(link, index ) in navlinks" :key="index" :to="{path: link.to}">
            <!-- <router-link :to="link.to">{{link.text}}</router-link> -->
            {{link.text}}
          </v-tab>
        </v-tabs>
        <div class="hidden-md-and-up">
          <v-menu transition="scroll-y-transition">
            <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>
            <v-list dense>
              <v-list-item
                v-for="(link, index ) in navlinks" :key="index" :to="{path: link.to}"
                link
              >
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
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
    components: {
      Information: () => import('@/components/InformationDialog')
    },
    data: () => ({
      drawer:true,
      size: 205,
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
            this.size = 155
          } else if(this.window.width <= 1000) {
            this.size = 160
          } else {
            this.size = 205
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
<style>
  .v-toolbar__extension {
    background-color: brown;
  }
  .v-toolbar__content {
    z-index: 4;
  }
</style>
