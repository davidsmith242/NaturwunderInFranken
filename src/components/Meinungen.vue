<template>
  <div class="meinungen">
    <h3>{{json.titel}}</h3>
    <p class="font-weight-light" v-for="(meinung, index) in json.meinungen" :key="index">
      <span v-if="readMoreActivated[index] === false">{{meinung.text.slice(0, 80)}}</span>
      <span v-else v-html="meinung.text"></span>
      <a class="" v-if="readMoreActivated[index] === false" @click="clickMore(index)"> mehr...</a>
      <a class="" v-if="readMoreActivated[index] === true" @click="clickLess(index)"> weniger</a>
      <br />
      <span class="font-weight-light font-italic" v-html="meinung.leser"></span>
      <v-divider></v-divider>
    </p>
  </div>
</template>

<script>
  import json from '@/data/texte-global.json'


  export default {
    name: 'Meinungen',
    data: () => ({
      json: json.meinungen,
      readMoreActivated: Array(10).fill(false),
    }),
    computed: {},
    created: function () {},
    methods: {
      clickMore(index){
        this.readMoreActivated[index] = true
        this.$forceUpdate();
      },
      clickLess(index){
        this.readMoreActivated[index] = false
        this.$forceUpdate();
      }
    }
  }
</script>
