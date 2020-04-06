<template>
  <div>
    <v-list shaped dense>
      <!-- <v-subheader>Bücher</v-subheader> -->
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in buchlinks"
          :key="i"
          :to="{path: item.path}"
        >
          <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'

  export default {
    name: 'BuchNav',

    data: () => ({
      links:'sjcd'
    }),

    computed: {
      ...mapGetters(['buchlinks']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      }
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      }
    }
  }
</script>
