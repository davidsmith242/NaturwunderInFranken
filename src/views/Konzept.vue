<template>
  <v-container
    id="konzept"
    tag="section"
  >
    <base-subheading>{{ konzept.titel}}</base-subheading>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="pa-4">
          <p>{{ konzept.textoben}}</p>
          <v-row align="center" justify="center">
            <v-img
              height="90%"
              width="90%" max-width="1200" :src="require('@/assets/img/' + konzept.bild)" alt="Konzept"></v-img>
          </v-row>
          <p>{{ konzept.bildtext}}</p>
          <div v-for="(absatz, index) in konzept.absaetze" :key="index">
            <h3>{{absatz.titel}}</h3>
            <p>
              {{absatz.text}}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import json from '@/data/konzept.json'

  export default {
    name: 'Konzept',
    data(){
      return{
        konzept: json
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