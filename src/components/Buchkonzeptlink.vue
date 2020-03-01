<template>
  <div v-html="konzept"></div>
</template>

<script>
  import json from '@/data/texte-global.json'

  export default {
    name: 'Buchkonzeptlink',
    data: () => ({
      konzept: json.konzeptlink.html
    })
  }
</script>
