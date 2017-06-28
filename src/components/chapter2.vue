<template>
  <div class="container-full">
    <div class="half-block-1">
      <div class="audio-player">
        <audio 
        src="/static/kalifa.mp3"
        autoplay
        loop
        controls
        muted
        ></audio>
        <button class="player-button">
        </button>
        <!--<img :src="'/src/assets/img/' + play-button.svg" alt="">-->
        <div class="ratio-container">
          <div class="ratio-bar"></div>
        </div>
      </div>
    </div>
    <div class="half-block-2">
      <h1 class="chapter-2-title">PEU DE LOISIRS</h1>
      <div class="more-infos-block">
        <div class="more-infos-content" v-if="displayed">
          <h2>LA TECHNO EST UNE HISTOIRE DE COEUR</h2>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
          </p>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
          </p>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
          </p>
            <button class="chapter2-more-infos-close" @click="toggled">X</button>
        </div>
        <button class="chapter2-more-infos" @click="toggled">En savoir plus</button>
      </div>
      <p class="chapter-2-p">
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
        <br>
        <br>
        Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour rque survivre cinq siècles, mais s'est aussi adaptén'en soit modifnnées 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chapter2',
    data () {
      return {
        displayed: false
      }
    },
    methods: {
      toggled: function () {
        this.displayed = !this.displayed
      },
      playFile (file, index) {
        var music = this.$refs.audio[index]
        if (music.paused) {
          music.play()
          console.log('play')
        } else {
          music.pause()
          console.log(music.currentTime)
        }
      },
      stopFile (file, index) {
        var music = this.$refs.audio[index]
        music.pause()
        music.currentTime = 0
      }
    }
  }
</script>
