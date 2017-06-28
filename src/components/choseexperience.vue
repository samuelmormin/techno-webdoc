<template>
  <div class="container-full">
    <div class="choice-block-1">
        <h1>PEUPLE</h1>
        <router-link :to="{name: 'chapters'}" class="experience-choice-button">DECOUVRIR L'HISTOIRE</router-link>
    </div>
    <div class="choice-block-2">
        <h1>DJ</h1>
        <router-link :to="{name: 'choseexperience'}" class="experience-choice-button">DECOUVRIR L'HISTOIRE</router-link>
    </div>
  </div>
</template>
 

<script>
  export default {
    name: 'choseexperience'
  }
</script>
