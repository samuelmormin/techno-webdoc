<template>
  <div class="container-full renaissance">
    <h1 class="chapter-1-title">
      UNE RENAISSANCE MUSICALE
    </h1>
    <p class="chapter-1-p">
Des jeunes, des artistes, des étrangers … tout le monde veut apporter son rythme et participer à la fièvre naissance de la Techno. La naissance de ce mouvement “underground” attire toujours plus et pas seulement les initiés.
    </p>
    <router-link :to="{name: 'chapters.page7'}" class="sous-page-link">EN SAVOIR PLUS</router-link>
    <audio
    src="/static/intro.m4a"
    autoplay
    loop
    ></audio>
  </div>
</template>

<script>
  export default {
    name: 'page6'
  }
</script>
