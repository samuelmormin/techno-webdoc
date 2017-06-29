<template>
  <div class="container-full  radio">
    <div class="half-block-1">
      <div class="audio-player center-player">
        <audio
        src="/static/techno-temoin.mp3"
        autoplay
        loop
        ref="audioPlayed"
        ></audio>
        <button class="player-button" v-on:click="switchState">
          <img src="/static/images/play-button.svg" class="audio-player-button" alt="">
        </button>
        <div class="ratio-container">
          <div class="ratio-bar" ref="bar"></div>
        </div>
      </div>
      <div class="audio-player">
        <audio
        src="/static/kalifa.mp3"
        loop
        ref="audioPlayed"
        ></audio>
        <button class="player-button" v-on:click="switchState">
          <img src="/static/images/play-button.svg" class="audio-player-button" alt="">
        </button>
        <div class="ratio-container">
          <div class="ratio-bar" ref="bar"></div>
        </div>
      </div>
    </div>
    <div class="half-block-2">
      <h1 class="chapter-2-title">DES ONDES HERTZIENNE POUR RASSEMBLER  </h1>
      <p class="chapter-2-p">
        Difficile de communiquer avec tout le monde dans la ville. Les ondes radio sont difficiles à arrêter à la frontière délimitée par le mur donc c’est le moyen idéal pour transmettre cette nouvelle musique. Les premiers morceaux de techno se propagent à travers la ville à une vitesse fulgurante.

      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'chapter2',
    data () {
      return {
        displayed: false,
        playing: true
      }
    },
    mounted () {
      // let lethargy = new Lethargy()
    },
    methods: {
      switchState: function () {
        var music = this.$refs.audioPlayed
        var bar = this.$refs.bar
        window.setInterval(function () {
          var ratio = music.currentTime / music.duration
          bar.style.width = (ratio * 200) + 'px'
        }, 50)
        if (music.paused) {
          music.play()
          console.log('play')
          window.setInterval(function () {
            var ratio = music.currentTime / music.duration
            bar.style.width = (ratio * 200) + 'px'
          }, 50)
        } else {
          music.pause()
          // console.log(music.currentTime)
        }
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
      },
      toggled: function () {
        this.displayed = !this.displayed
      }
    }
  }
</script>
