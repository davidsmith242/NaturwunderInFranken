<template>
  <v-container
    id="hintergrund"
    tag="section"
  >
    <base-subheading>{{ hintergrund.titel1}}</base-subheading>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4">
          <p v-for="(absatz, index) in hintergrund.absaetze1" :key="index">
            {{absatz}}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row >
      <v-col cols="12">
        <div class="pa-4" align="center" justify="center">
          <v-img
            height="90%"
            width="90%" max-width="1200" :src="require('@/assets/img/' + hintergrund.bild)" alt="Hintergrund"></v-img>
        </div>
      </v-col>
    </v-row>
    <base-subheading>{{ hintergrund.titel2}}</base-subheading>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4">
          <p v-for="(absatz2, index) in hintergrund.absaetze2" :key="index">
            {{absatz2}}
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import json from '@/data/hintergrund.json'

  export default {
    name: 'Hintergrund',
    data(){
      return{
        hintergrund: json
      }
    },

    components: {
      // Buchreihe: () => import('@/components/home/Buchreihe'),
      // Articles: () => import('@/components/home/Articles'),
      // Banner: () => import('@/components/home/Banner'),
      // Social: () => import('@/components/home/Social'),
    }
  }
</script>