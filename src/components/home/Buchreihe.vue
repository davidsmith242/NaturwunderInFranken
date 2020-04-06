<template>
  <v-container
    id="buchreihe"
    tag="section"
  >
    <base-subheading>{{ json.titel}}</base-subheading>
    <v-row no-gutters>
      <v-col sm="3">
        <buch-nav></buch-nav>
      </v-col>
      <v-col sm="9">
        <v-row>
          <v-col md="12">
            <div class="pa-2">
              <p v-html="json.textoben" v-once></p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <div class="pa-2">
              <p v-for="(text, index) in json.absaetze" v-html="text" :key="index"></p>
            </div>
          </v-col>
          <v-col md="6">
            <div class="pa-2">
            <v-img
              min-height="250" max-height="495" max-width="570" :src="require('@/assets/img/' + json.bild)" alt="Buchreihe"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="pa-4 hidden-sm-and-down" align="center" justify="center">
          <netzwerk />
        </div>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
  // Utilities
  // import {
  //   mapState
  // } from 'vuex'

  import json from '@/data/buchreihe.json'

  export default {
    name: 'buchreihe',
    // components: {
    //   FeedCard: () => import('@/components/FeedCard')
    // },
    components: {
      BuchNav: () => import('@/components/core/BuchNav'),
      Netzwerk: () => import('@/components/home/Netzwerk'),
    },
    data: () => ({
      json: json,
    }),
  }
</script>

