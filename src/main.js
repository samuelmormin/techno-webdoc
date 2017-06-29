// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/landingTitle.vue')
  },
  {
    path: '/choseexperience',
    name: 'choseexperience',
    component: require('./components/choseexperience.vue')
  },
  {
    path: '/chapters',
    name: 'chapters',
    component: require('./components/chapters.vue'),
    children: [{
      path: 'chapitre1',
      name: 'chapters.chapter1',
      component: require('./components/chapter1.vue')
    },
    {
      path: 'chapitre2',
      name: 'chapters.chapter2',
      component: require('./components/chapter2.vue')
    },
    {
      path: 'chapitre3',
      name: 'chapters.chapter3',
      component: require('./components/chapter3.vue')
    },
    {
      path: 'chapitre4',
      name: 'chapters.chapter4',
      component: require('./components/chapter4.vue')
    },
    {
      path: '/page6',
      name: 'chapters.page6',
      component: require('./components/page6.vue')
    },
    {
      path: '/chapter2Landing',
      name: 'chapters.chapter2',
      component: require('./components/chapter2Landing.vue')
    }]
  },
  {
    path: '/chapitre12',
    name: 'chapter12',
    component: require('./components/chapitre12.vue')
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import App from './App'
