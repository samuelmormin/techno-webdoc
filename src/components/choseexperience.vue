<template>
  <div class="container-full">
    <div class="choice-block-1">
        <h1>LA SOCIETE </h1>
        <p>Berlin … scindée en deux à la suite de la reddition de l’Allemagne, le 8 mai 1945, devient un terrain fertil pour une nouvelle jeunesse, toujours plus libre. </p>
    </div>
    <div class="choice-block-2">
        <h1>DJ</h1>
        <p>De jeunes gens, artistes, libres et en quêtent de renouveau se mettent en tête de divertire le peuple. Devenir DJ’s à Berlin … un art, un risque.</p>
<!--        <button class="experience-choice-button" @click="displayChapter1DJ">SUITE</button>-->
<!--        <router-link :to="{name: 'chapters.chapter1'}" class="experience-choice-button">DECOUVRIR L'HISTOIRE</router-link>-->
    </div>
  </div>
</template>
<script>
  import chapters from './chapters.vue'
  export default {
    name: 'chose',
    methods: {
      displayChapter1DJ: function () {
        let _this = this
        chapters.chapter1S = !chapters.chapter1S
        chapters.chapter1Dj = !chapters.chapter1Dj
        setTimeout(function () { _this.$router.push('/page6') }, 500)
      }
    }
  }
</script>
