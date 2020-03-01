<template>
  <div v-html="schatz"></div>
</template>

<script>
  import json from '@/data/texte-global.json'

  export default {
    name: 'Buchschatz',
    data: () => ({
      schatz: json.schatz.html
    })
  }
</script>
