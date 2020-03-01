<template>
  <div v-html="bestellung"></div>
</template>

<script>
  import json from '@/data/texte-global.json'

  export default {
    name: 'Buchbestellung',
    data: () => ({
      bestellung: json.bestellung.html
    })
  }
</script>
