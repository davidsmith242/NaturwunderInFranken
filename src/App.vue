<template>
  <v-app>
    <core-toolbar />

    <!-- <core-drawer /> -->

    <core-view />

    <core-footer />

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';


export default {
  name: 'App',

  components: {
    // CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },

  data: () => ({
    //
  }),
};
</script>
