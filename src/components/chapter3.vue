<template>
  <div class="container-full">
    <div class="data">
      <div class="left-block-chapter-3">
        <h4>BERLIN OUEST</h4>
        <div class="nombredata">
        </div>
        <div class="nombredata1">
        </div>
      </div>
      <div class="right-block-chapter-3">
          <h4>BERLIN EST</h4>
          <div class="nombredata2">
          </div>
          <div class="nombredata3">
          </div>
      </div>
      <div class="grosrond">
        <p>12 000</p>
        <p class="pute">Gardes sur le mur</p>
      </div>
      <div class="testbas">
        <p>300</p>
        <p class="pute1">Miradors</p>
      </div>
      <div class="test2haut">
        <p>3,5 M</p>
        <p class="pute1">De hauteur</p>
      </div>
    </div>
    <audio
    src="/static/societe.mp3"
    loop
    autoplay
    ref="audioPlayed"
    ></audio>
  </div>
</template>

<script>
  export default {
    name: 'chapter3'
  }
</script>
