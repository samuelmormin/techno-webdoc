<template>
  <div class="container-full">
    <div class="choice-block-1">
        <h1>LA SOCIETE </h1>
        <p>Berlin … scindée en deux à la suite de la reddition de l’Allemagne, le 8 mai 1945, devient un terrain fertil pour une nouvelle jeunesse, toujours plus libre. </p>
        <router-link :to="{name: 'chapters'}" class="experience-choice-button">DECOUVRIR L'HISTOIRE</router-link>
    </div>
    <div class="choice-block-2">
        <h1>DJ</h1>
        <p>De jeunes gens, artistes, libres et en quêtent de renouveau se mettent en tête de divertire le peuple. Devenir DJ’s à Berlin … un art, un risque.</p>
        <router-link :to="{name: 'choseexperience'}" class="experience-choice-button">DECOUVRIR L'HISTOIRE</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'choseexperience'
  }
</script>
