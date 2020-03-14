<template>
  <v-container
    id="autor"
    tag="section"
  >
    <base-subheading>{{ autor.titel}}</base-subheading>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4">
          <p>{{ autor.textoben}}</p>
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters v-for="(absatz, index) in autor.absaetze" :key="index">
      <v-col cols="7">
        <div class="pa-4">
          <p>{{ absatz.text}}</p>
        </div>
      </v-col>
      <v-col cols="5">
        <div class="pa-4" align="center" justify="center">
          <v-img
            height="90%"
            width="90%" 
            max-width="800" 
            :src="require('@/assets/img/' + absatz.bild)" alt="Autor"></v-img>
            <p>{{absatz.bildtext}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import json from '@/data/autor.json'

  export default {
    name: 'Autor',
    data(){
      return{
        autor: json
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