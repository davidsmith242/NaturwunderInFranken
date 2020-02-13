<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading>Naturwunder in Franken</base-subheading>
    <v-row v-row no-gutters>
      <v-col cols="10">
        <div class="pa-4">
        {{home.text[0]}}
        </div>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
    <v-row v-row no-gutters>
      <v-col cols="4">
        <div class="pa-4">
        {{home.text[1]}}
        </div>
      </v-col>
      <v-col cols="6">
        <div class="pa-6">
        <v-img aspect-ratio="1"
          min-height="250" max-height="450" :src="require('@/assets/img/Buchreihe.png')" alt="Buchreihe"></v-img>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="pa-4">
        links
        </div>
      </v-col>
    </v-row>


    <p>
       
    </p>
    <p>
       
    </p>
    <p>
      Herausgekommen sind dabei neun Bücher 
      und ein Jahreskalender. Jedes Buch 
      enthält ausgewählte Natura 2000-Gebiete 
      und die Arten für die wir dort eine besondere 
      Verantwortung tragen. Sie beschreiben den 
      Schatz vor unserer Haustür.
    </p>
    <p>
      Gemeinsam bilden die Gebiete ein Netzwerk, 
      dass geschützt werden muss um unsere 
      Lebensgrundlagen zu erhalten. 
    </p>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'about',
    // components: {
    //   FeedCard: () => import('@/components/FeedCard')
    // },

    data: () => ({
      home: {
        text: [
          'Die Natur in Franken wird oft unterschätzt. Vor allem, wenn man sie nur flüchtig aus dem Auto heraus betrachtet. Dieser Eindruck ändert sich jedoch, wenn man aussteigt und mit ein wenig Zeit etwas genauer hinschaut. Ob es sich lohnt, kannst du in der Bildergalerie selbst beurteilen. Mich hat die Natur dabei in ihren Bann gezogen und ich habe mir die Mühe gemacht, die Naturwunder meiner Heimat näher zu beschreiben.',
          'Dafür war ich oft mit Rucksack und Kamera in ausgesuchten Gebieten unterwegs. Es wurde für mich eine Entdeckungsreise, denn ich war selbst erstaunt, was sich hier an Artenvielfalt und Lebensräumen verbirgt.'
        ],
        img:''
      }
    }),

    computed: {
      ...mapState(['articles']),
    },

    watch: {
    }
  }
</script>

