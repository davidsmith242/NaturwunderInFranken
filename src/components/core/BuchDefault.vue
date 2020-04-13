<template>
  <div>
    <v-container>
      <h2>{{json.titel}}</h2>
      <v-row no-gutters>
        <v-col>
          <p>{{json.textoben}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p v-for="(item, index) in json.textelinks" :key="index">{{item}}</p>
          <h3>{{json.konzept.titel}}</h3>
          <p>{{json.konzept.text}}</p>
          <router-link :to="'/konzept'">
            <buchkonzeptlink />
          </router-link>
          <buchschatz />
        </v-col>
        <v-col>
          <div class="pa-2" align="center" justify="center" v-if="json.bild !== ''">
            <v-img
              aspect-ratio="1"
              height="454"
              width="324"
              :src="require('@/assets/img/'+ json.bild)"
              :alt="'Buch' + json.titel"
            ></v-img>
          </div>
        </v-col>
        <v-col xs="12">
          <buchbestellung />
          <meinungen style="margin-top: 20px;"></meinungen>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import json from '../companies.json'

export default {
  // props: ['json'],
  props: {
    json: {
      type: Object
    }
  },
  components: {
    buchbestellung: () => import("@/components/Buchbestellung"),
    buchkonzeptlink: () => import("@/components/Buchkonzeptlink"),
    buchschatz: () => import("@/components/Buchschatz"),
    Meinungen: () => import('@/components/Meinungen'),
  },
  data: () => ({
    // data: this.json
    // data: {
    //   title: "test",
    //   subtitle: "test2"
    // }
  }),
  computed: {
    // a computed getter
    bilder: function() {
      // `this` points to the vm instance
      let aBilder = [];
      for (let index = 1; index <= this.json.pictures; index++) {
        aBilder.push({ src: this.json.picturepath + index + ".jpg" });
      }
      return aBilder;
    }
  },
  created: function() {
    // console.log("created");
    // console.log(this);
  }
};
</script>
