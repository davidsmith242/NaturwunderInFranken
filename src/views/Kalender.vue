<template>
  <v-container
    id="kalender"
    tag="section"
  >
    <base-subheading>{{ kalender.titel}}</base-subheading>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4">
          <p>{{ kalender.textoben}}</p>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col sm="7">
        <div class="pa-4">
          <div v-for="(absatz, index) in kalender.absaetze" :key="index">
            <h3 v-if="absatz.titel !== ''">{{absatz.titel}}</h3>
            <p v-once v-if="absatz.text">{{ absatz.text}}</p>
            <p v-if="absatz.html" v-html="absatz.html"></p>
          </div>
        </div>
      </v-col>
      <v-col sm="5">
        <div class="pa-4" align="center" justify="center" v-for="(bild, index) in kalender.bilder" :key="index">
          <v-img
            height="90%"
            width="90%" 
            max-width="800" 
            :src="require('@/assets/img/' + bild.bild)" alt="Kalender"></v-img>
            <p v-if="bild.bildtext!== ''">{{bild.bildtext}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import json from '@/data/kalender.json'

  export default {
    name: 'Kalender',
    data(){
      return{
        kalender: json
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