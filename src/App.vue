<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import chapitre1 from './components/chapitre1.vue'

export default {
  components: {
    chapitre1
  },
  name: 'app'
}
</script>

<style lang="stylus" src="./assets/stylus/main.styl"></style>
