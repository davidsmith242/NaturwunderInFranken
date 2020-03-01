import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buchlinks:[
      {path:'/buch/spessart',text:'Spessart'},
      {path:'/buch/rhoen',text:'Rhön'},
      {path:'/buch/gaeulandschaft',text:'Gäulandschaft'},
      {path:'/buch/steigerwald',text:'Steigerwald'},
      {path:'/buch/oberermain',text:'Oberer Main'},
      {path:'/buch/altmuehl',text:'Altmühl, Tauber, Frankenhöhe'},
      {path:'/buch/reichswald',text:'Nürnberger Reichswald'},
      {path:'/buch/fraenkischeschweiz',text:'Fränkische Schweiz'},
      {path:'/buch/fichtelgebirge',text:'Fichtelgebirge'}
    ],
    // articles: require('@/data/articles.json'),
    drawer: false,
    navitems: [
      {
        text: 'Buchreihe',
        to: '/'
      },
      {
        text: 'Konzept',
        to: '/konzept'
      },
      {
        text: 'Hintergrund',
        to: '/hintergrund'
      },
      {
        text: 'Galerie',
        to: '/galerie'
      },
      {
        text: 'Autor',
        to: '/autor'
      },
      {
        text: 'Kalender',
        to: '/kalender'
      },
    ]
  },
  getters: {
    buchlinks: (state) => {
      return state.buchlinks
    },
    navlinks: (state) =>{
      return state.navitems
    }
    // categories: state => {
    //   const categories = []

    //   for (const article of state.articles) {
    //     if (
    //       !article.category ||
    //       categories.find(category => category.text === article.category)
    //     ) continue

    //     const text = article.category

    //     categories.push({
    //       text,
    //       to: `/category/${text}`
    //     })
    //   }

    //   return categories.sort().slice(0, 4)
    // },
    // links: (state, getters) => {
    //   return state.items.concat(getters.categories)
    // }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
