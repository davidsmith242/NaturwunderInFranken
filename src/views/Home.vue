<template>
  <div id="home">
    <!-- <articles>
      <banner />
    </articles> -->

    <buchreihe />

    <netzwerk />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Buchreihe: () => import('@/components/home/Buchreihe'),
      // Articles: () => import('@/components/home/Articles'),
      // Banner: () => import('@/components/home/Banner'),
      Netzwerk: () => import('@/components/home/Netzwerk'),
    }
  }
</script>