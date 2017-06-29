<template>
  <div class="container-full  radio">
    <div class="half-block-1">
      <div class="audio-player center-player">
        <p class="audio-title">Temoignage</p>
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
        <p class="audio-title">Tanith @ Tresor - May 1991</p>
        <audio
        src="/static/tresor.mp3"
        loop
        ref="audioPlayed1"
        ></audio>
        <button class="player-button" v-on:click="switchState1">
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
      switchState1: function () {
        var music1 = this.$refs.audioPlayed1
        var bar1 = this.$refs.bar1
        window.setInterval(function () {
          var ratio = music1.currentTime / music1.duration
          bar1.style.width = (ratio * 200) + 'px'
        }, 50)
        if (music1.paused) {
          music1.play()
          console.log('play')
          window.setInterval(function () {
            var ratio = music1.currentTime / music1.duration
            bar1.style.width = (ratio * 200) + 'px'
          }, 50)
        } else {
          music1.pause()
          // console.log(music.currentTime)
        }
      },
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
      toggled: function () {
        this.displayed = !this.displayed
      }
    }
  }
</script>
