import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/buch/:id',
    props: true,
    name: 'buch',
    component: () => import('@/components/Buch.vue')
  },
  {
    path: '/konzept',
    name: 'konzept',
    component: () => import('../views/Konzept.vue')
  },
  // {
  //   path: '/netzwerk',
  //   name: 'netzwerk',
  //   component: () => import('../views/About.vue')
  // },
  {
    path: '/hintergrund',
    name: 'hintergrund',
    component: () => import('../views/Hintergrund.vue')
  },
  {
    path: '/galerie',
    name: 'galerie',
    component: () => import('../views/Galerie.vue')
  },
  {
    path: '/autor',
    name: 'autor',
    component: () => import('../views/Autor.vue')
  },
  {
    path: '/kalender',
    name: 'kalender',
    component: () => import('../views/Kalender.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
