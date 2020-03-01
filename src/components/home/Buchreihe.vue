<template>
  <v-container
    id="buchreihe"
    tag="section"
  >
    <base-subheading>Naturwunder in Franken</base-subheading>
    <v-row no-gutters>
      <v-col cols="10">
        <div class="pa-4">
          <p v-html="home.texts[0]" v-once></p>
        </div>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4">
        <div class="pa-4">
          <p v-for="(text, index) in home.texts" v-html="text" :key="index"></p>
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
          <v-card
            class="mx-auto"
            max-width="300"
            tile
          >
            <v-list shaped dense>
              <v-subheader>LINKS</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in buchlinks"
                  :key="i"
                >
                  <!-- <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon> -->
                  <v-list-item-content>
                    <v-list-item-title><router-link :to="{path: item.path}">{{item.text}}</router-link></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'buchreihe',
    // components: {
    //   FeedCard: () => import('@/components/FeedCard')
    // },

    data: () => ({
      home: {
        texts: [
          '<span>Die Natur in Franken wird oft unterschätzt. Vor allem, wenn man sie nur flüchtig aus dem Auto heraus betrachtet. Dieser Eindruck ändert sich jedoch, wenn man aussteigt und mit ein wenig Zeit etwas genauer hinschaut. Ob es sich lohnt, kannst du in der Bildergalerie selbst beurteilen. Mich hat die Natur dabei in ihren Bann gezogen und ich habe mir die Mühe gemacht, die Naturwunder meiner Heimat näher zu beschreiben.</span>',
          '<span>Dafür war ich oft mit Rucksack und Kamera in ausgesuchten Gebieten unterwegs. Es wurde für mich eine Entdeckungsreise, denn ich war selbst erstaunt, was sich hier an Artenvielfalt und Lebensräumen verbirgt.</span>',
          '<span>Herausgekommen sind dabei neun Bücher und ein Jahreskalender. Jedes Buch enthält ausgewählte Natura 2000-Gebiete und die Arten für die wir dort eine besondere Verantwortung tragen. Sie beschreiben den Schatz vor unserer Haustür.</span>',
          '<span>Gemeinsam bilden die Gebiete ein Netzwerk, dass geschützt werden muss um unsere Lebensgrundlagen zu erhalten.</span>'
        ],
        img:''
      }
    }),

    computed: {
      ...mapState(['articles', 'buchlinks']),
    },

    watch: {
    }
  }
</script>

