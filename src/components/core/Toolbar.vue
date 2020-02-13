<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="light-green darken-1"
      dark
      prominent
      shrink-on-scroll
      fade-img-on-scroll
      :src="require('@/assets/img/HG_Bild_72.jpg')"
      scroll-target="#content"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(200,190,101,.5), rgba(35,35,25,.5)"
        ></v-img>
      </template>
      <!-- <v-toolbar-title>Title</v-toolbar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab><router-link to="/">Home</router-link></v-tab>
          <v-tab><router-link to="/about">Test</router-link></v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
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
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    data: () => ({
      drawer:true,
      items: [
        { src: 'adventurealtitude.jpg' },
        { src: 'garden.jpg' },
        { src: 'pigduck.jpg' },
        { src: 'rain.jpg' },
        { src: 'spices.jpg' },
        { src: 'sunset.jpg' }
      ],
      gewerke: [
        {
          icon: 'store',
          title: 'Innenausbau',
          path: '/gewerk/innenausbau'
        }]
    }),
    computed: {
      ...mapGetters(['links'])
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
      }
    }
  }
</script>
