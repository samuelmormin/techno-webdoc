<template>
  <transition name="fade">
    <div>
      <div class="landingTitle">
        <h1 class="chapter-generic-title-1">DEUX PARTIES, UNE VISION</h1>
        <p class="chapter-generic-p">Une séparation entre DJ et société</p>
        <router-link :to="{name: 'choseexperience'}" class="discover-button">DÉCOUVRIR</router-link>
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
