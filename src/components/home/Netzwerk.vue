<template>
  <div>
      <!-- <img src="Karte_HG.jpg" usemap="#image-map"> -->
      <!-- <img
        :src="require(`@/assets/netzwerk/Karte_HG.png`)"
        class="mr-3"
        usemap="#image-map"
      /> -->
        <img
          :src="images[index]"
          class="mr-3"
          usemap="#image-map"
        />

        <map name="image-map" v-on:mouseover="slide=false" v-on:mouseleave="slide=true">
            <area 
              v-on:mouseover="index = 1"
              v-on:mouseleave="index = 0" 
              target="" alt="Altmuehl" title="Altmühl, Tauber, Frankenhöhe" href="/#/buch/altmuehl" coords="442,656,620,581,816,808,1024,820,1106,935,763,947" shape="poly">
            <area 
              v-on:mouseover="index = 2"
              v-on:mouseleave="index = 0" 
              target="" alt="Fichtel" title="Fichtelgebirge" href="/#/buch/fichtelgebirge" coords="1098,322,108" shape="circle">
            <area 
              v-on:mouseover="index = 3"
              v-on:mouseleave="index = 0" 
              target="" alt="FrSchweiz" title="Fränkische Schweiz" href="/#/buch/fraenkischeschweiz" coords="867,472,112" shape="circle">
            <area 
              v-on:mouseover="index = 4"
              v-on:mouseleave="index = 0" 
              target="" alt="Gaeulandschaft" title="Gäulandschaft" href="/#/buch/gaeulandschaft" coords="489,506,114" shape="circle">
            <area 
              v-on:mouseover="index = 5"
              v-on:mouseleave="index = 0" 
              target="" alt="ObererMain" title="Oberer Main" href="/#/buch/oberermain" coords="743,283,111" shape="circle">
            <area 
              v-on:mouseover="index = 6"
              v-on:mouseleave="index = 0" 
              target="" alt="Reichswald" title="Nürnberger Reichswald" href="/#/buch/reichswald" coords="832,678,95" shape="circle">
            <area 
              v-on:mouseover="index = 7"
              v-on:mouseleave="index = 0" 
              target="" alt="Rhoen" title="Rhön" href="/#/buch/rhoen" coords="447,162,127" shape="circle">
            <area 
              v-on:mouseover="index = 8"
              v-on:mouseleave="index = 0" 
              target="" alt="Spessart" title="Spessart" href="/#/buch/spessart" coords="260,353,122" shape="circle">
            <area 
              v-on:mouseover="index = 9"
              v-on:mouseleave="index = 0" 
              target="" alt="Steigerwald" title="Steigerwald" href="/#/buch/steigerwald" coords="618,392,56" shape="circle">
        </map>
  </div>
</template>

<script>

  const bild0 = require('@/assets/netzwerk/Karte_HG.png')
  const bild1 = require('@/assets/netzwerk/Karte_Altmuehl.png')
  const bild2 = require('@/assets/netzwerk/Karte_Fichtelgebirge.png')
  const bild3 = require('@/assets/netzwerk/Karte_FraenkischeSchweiz.png')
  const bild4 = require('@/assets/netzwerk/Karte_Gaeulandschaft.png')
  const bild5 = require('@/assets/netzwerk/Karte_ObererMain.png')
  const bild6 = require('@/assets/netzwerk/Karte_Reichswald.png')
  const bild7 = require('@/assets/netzwerk/Karte_Rhoen.png')
  const bild8 = require('@/assets/netzwerk/Karte_Spessart.png')
  const bild9 = require('@/assets/netzwerk/Karte_Steigerwald.png')

  export default {
    components: {},
    data() {
        return {
          slide: true,
          index: 0,
          images: [
            bild0, bild1, bild2, bild3, bild4, bild5, bild6, bild7, bild8, bild9
          ]
        }
    },
    mounted: function () {

      const runSlide = () => {
        setTimeout(() => {
          if(this.slide === true)
          {
            if (this.index >= 9) {
              this.index = 0
            } else {
              this.index++
            }
          }
          runSlide()
        }, 5000)
      }
      runSlide()
    }
  }
</script>
