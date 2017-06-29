<template>
  <div>
    <router-link :to="{name: 'chapters.chapter21'}" class="chapter-navigation-button"><div>UNE RENAISSANCE MUSICALE</div></router-link>
    <router-link :to="{name: 'chapters.chapter22'}" class="chapter-navigation-button"><div>UN NOUVEAU STYLE</div></router-link>
    <router-link :to="{name: 'chapters.chapter23'}" class="chapter-navigation-button"><div>PAS CHER ET EFFICACE</div></router-link>
    <router-link :to="{name: 'chapters.chapter24'}" class="chapter-navigation-button"><div>UN REGROUPEMENT PARTAGE</div></router-link>
    <router-link :to="{name: '{{nextLink}}'}" class="next-chapter">SUITE</router-link>
  </div>
</template>


<script>
  export default {
    name: 'chapter1',
    data () {
      return {
        visible: false
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
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
      transform: translateX(0%);
      opacity: 1;
    }
    50% {
      transform: scale(0.5);
      transform: translateX(-50%);
      opacity: 0.5;
    }
    100% {
      transform: scale(0);
      transform: translateX(-100%);
      opacity: 0;
    }
  }
</style>
