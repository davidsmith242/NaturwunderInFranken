<template>
  <v-container
    id="buch"
    tag="section"
  >
    <base-subheading>Buchreihe</base-subheading>
    <v-row no-gutters>
      <v-col sm="3" lg="2">
        <!-- <div class="pa-4"> -->
          <buch-nav></buch-nav>
          <!-- <meinungen style="margin-top: 20px;"></meinungen> -->
        <!-- </div> -->
      </v-col>
      <v-col sm="9" lg="10">
        <buch-default v-bind:json="myJson" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
 import json from '@/data/buecher.json'

  var _this=null;
  export default {
    name: 'Buch',
    props: ['id'],
    data(){
      return{
        myJson: json[this.id]
      }
    },
    components: {
      BuchNav: () => import('@/components/core/BuchNav'),
      BuchDefault: () => import('@/components/core/BuchDefault'),
      // Meinungen: () => import('@/components/Meinungen'),
      // // Articles: () => import('@/components/home/Articles'),
      // // Banner: () => import('@/components/home/Banner'),
      // Social: () => import('@/components/home/Social'),
    },
    watch: {
      '$route.params.id': function (id) {
        _this.myJson=json[id];
      }
    },
    created: function () {
      _this = this;
    }
  }
</script>