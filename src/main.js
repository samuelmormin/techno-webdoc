// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/landingTitle.vue')
  },
  {
    path: '/landingTitle',
    name: 'intro',
    component: require('./components/landingTitle.vue')
  },
  {
    path: '/chapterone',
    name: 'chapterone',
    component: require('./components/chapter1Landing.vue')
  },
  {
    path: '/chapters',
    name: 'chapters',
    component: require('./components/chapters.vue'),
    children: [{
      path: '/chapitre1',
      name: 'chapters.chapter1',
      component: require('./components/chapter1.vue')
    },
    {
      path: '/choseexperience',
      name: 'choseexperience',
      component: require('./components/choseexperience.vue')
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
      path: '/page7',
      name: 'chapters.page7',
      component: require('./components/page7.vue')
    },
    {
      path: '/page8',
      name: 'chapters.page8',
      component: require('./components/page8.vue')
    },
    {
      path: '/page9',
      name: 'chapters.page9',
      component: require('./components/page9.vue')
    },
    {
      path: '/page10',
      name: 'chapters.page10',
      component: require('./components/page10.vue')
    },
    {
      path: '/page11',
      name: 'chapters.page11',
      component: require('./components/page11.vue')
    },
    {
      path: '/page12',
      name: 'chapters.page12',
      component: require('./components/page12.vue')
    },
    {
      path: '/page6',
      name: 'chapters.page6',
      component: require('./components/page6.vue')
    },
    {
      path: '/page14',
      name: 'chapters.page14',
      component: require('./components/page14.vue')
    },
    {
      path: '/page15',
      name: 'chapters.page15',
      component: require('./components/page15.vue')
    },
    {
      path: '/page16',
      name: 'chapters.page16',
      component: require('./components/page16.vue')
    },
    {
      path: '/page17',
      name: 'chapters.page17',
      component: require('./components/page17.vue')
    },
    {
      path: '/page18',
      name: 'chapters.page18',
      component: require('./components/page18.vue')
    },
    {
      path: '/page20',
      name: 'chapters.page20',
      component: require('./components/page20.vue')
    },
    {
      path: '/page21',
      name: 'chapters.page21',
      component: require('./components/page21.vue')
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
