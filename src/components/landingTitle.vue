<template>
  <div>
    <div class="landingTitle">
      <h1 class="intro-h1">TECHNO</h1>
      <p class="intro-p">AU COEUR DE BERLIN</p>
      <p class="textpres">La techno est une musique connue et fortement mise en avant dans les festivales actuels mais seuls les initiés de la première heure connaissent réellement son histoire.</p>
      <router-link :to="{name: 'chapterone'}" class="discover-button">DÉCOUVRIR</router-link>
    </div>
    <audio
    src="/static/intro.m4a"
    autoplay
    loop
    ></audio>
  </div>
</template>

<script>
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
