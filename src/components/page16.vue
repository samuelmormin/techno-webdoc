<template>
  <transition name="fade">
    <div class="backback">

      <div class="landingTitle">
        <h1 class="chapter-generic-title1">UNE EVOLUTION</h1>
        <p class="chapter-generic-p1">Après cette période de liberté totale, la partie de Berlin Est est reconquise par les gens et les bâtiments sont restitués à leurs propriétaires. La techno prend un nouveau tournant et évolue autour de nouvelles sphères musicales et sociales.</p>
        <router-link :to="{name: 'chapters.page14'}" class="discover-button">DÉCOUVRIR</router-link>
      </div>
      <audio
      src="/static/Today.mp3"
      autoplay
      loop
      ></audio>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'chapter2Landing',
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
  .bounce-enter-active {
    animation: bounce-in 2s;
  }
  .bounce-leave-active {
    animation: bounce-in 2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
