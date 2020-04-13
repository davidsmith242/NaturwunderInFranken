<template>
  <div class="bestellung">
    <h3>{{bestellung.titel}}</h3>
    <div v-html="bestellung.html"></div>
  </div>
  
</template>

<script>
  import json from '@/data/texte-global.json'

  export default {
    name: 'Buchbestellung',
    data: () => ({
      bestellung: json.bestellung
    })
  }
</script>
