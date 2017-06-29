<template>
  <transition name="fade">
    <div>
      
      <div class="landingTitle">
        <h1 class="chapter-generic-title">UNE JEUNESSE, UNE SOIREE</h1>
        <p class="chapter-generic-p">Après la chute du mur, les communications sur radio et la mise en forme d’un lieu il ne reste plus qu’à faire la fête. Les jeunes, de tous bords et de tous partis se rassemblent et cherchent une forme de liberté totale.</p>
        <router-link :to="{name: 'chapters.page14'}" class="discover-button">DÉCOUVRIR</router-link>
      </div>
      <audio
      src="/static/intro.m4a"
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
