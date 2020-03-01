<template>
  <div id="home">
    <!-- <articles>
      <banner />
    </articles> -->

    <buchreihe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'Galerie',

    components: {
      Buchreihe: () => import('@/components/home/Buchreihe'),
      // Articles: () => import('@/components/home/Articles'),
      // Banner: () => import('@/components/home/Banner'),
      Social: () => import('@/components/home/Social'),
    }
  }
</script>