<template>
  <div class="container-full fin">
    <p class="chapter-1-p titreplus">
      Ce webdocumentaire a été créé dans le cadre d'un projet de travail à HÉTIC. Le contenu utilisé est uniquement à but pédagogique, il ne sera en aucun cas utilisé à des fins commerciales.  Un grand merci de la part de toute l'équipe de développement.
  N'hésitez pas à partager ce projet autour de vous afin de participer à sa notoriété.
    </p>
    <audio
    src="/static/intro.m4a"
    autoplay
    loop
    ></audio>
  </div>
</template>


<script>
  export default {
    name: 'chapter1',
    nextLink: 'chapters.chapter1'
  }
</script>
