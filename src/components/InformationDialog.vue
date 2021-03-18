<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="ma-2" text color="white" v-bind="attrs" v-on="on">
        Impressum
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="red darken-4" dark>
          <v-card-actions>
            <v-btn :color="page === 1 ? 'blue lighten-2':''" text @click="page = 1"> Impressum </v-btn>
            <v-btn :color="page === 2 ? 'blue lighten-2':''" text @click="page = 2"> AGB's </v-btn>
            <v-btn :color="page === 3  ? 'blue lighten-2':''" text @click="page = 3"> Datenschutz </v-btn>
          </v-card-actions>
        </v-toolbar>
        <v-card-text>
          <!-- <div class="text-h2 pa-12">Hello world!</div> -->

          <impressum v-if="page === 1" />
          <agb v-else-if="page === 2" />
          <datenschutz v-else />
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn color="red darken-4" dark text @click="dialog.value = false">Schließen</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
// import Impressum from './views/Impressum.vue';
// import NaturErleben from './components/NaturErleben';

export default {
  name: "InformationDialog",
  components: {
    impressum: () => import("@/components/information/Impressum"),
    agb: () => import("@/components/information/Agb"),
    datenschutz: () => import("@/components/information/Datenschutz"),
  },
  data: () => ({
    page: 1,
  }),

  watch: {
  },
  computed: {},
  created() {

  },
  mounted: function () {
  },
  beforeDestroy: function () {
  },
};
</script>

<style lang="scss">

</style>
