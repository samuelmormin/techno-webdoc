<template>
  <transition name="fade">
    <div>
      <div class="landingTitle" v-if="visible">
        <h1 class="intro-h1">TECHNO</h1>
        <p class="intro-p">AU COEUR DE BERLIN</p>
        <router-link :to="{name: 'choseexperience'}" class="discover-button">DÉCOUVRIR</router-link>
      </div>
      <div class="video">
        <video class="video-background" autoplay="autoplay" loop="loop">
          <source src="/static/video.mp4"  type="video/mp4"  />
          Your browser doesn't support video API
        </video>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'landingTitle',
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
