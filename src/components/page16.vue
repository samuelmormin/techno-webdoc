<template>
  <transition name="fade">
    <div>
      <div class="landingTitle noPad">
        <h1 class="chapter-generic-title-3">UNE EVOLUTION</h1>
        <p class="chapter-generic-p">Après cette période de liberté totale, la partie de Berlin Est est reconquise par les gens et les bâtiments sont restitués à leurs propriétaires. La techno prend un nouveau tournant et évolue autour de nouvelles sphères musicales et sociales.</p>
        <router-link :to="{name: 'chapters.page17'}" class="discover-button">DÉCOUVRIR</router-link>
      </div>
      <audio
      src="/static/Maceo.mp3"
      autoplay
      loop
      ></audio>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'chapter noPadanding',
    data () {
      return {
        visible: true
      }
    },
    methods: {
      toggle: function () {
        this.visible = !this.visible
      }
    }
  }
</script>

<style>
</style>
