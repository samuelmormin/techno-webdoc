<template>
  <div class="container-full chapter2bg">
    <div class="half-block-1">
      <div class="audio-player center-player">
        <p class="temoignageaudio">Temoignage</p>
        <audio
        src="/static/liberation.mp3"
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
      <h1 class="chapter-2-title">OUVERTURE ET LIBERTE
 </h1>
      <div class="more-infos-block">
        <div class="more-infos-content" v-if="displayed">
          <h2>la drogue</h2>
          <p>
            Il faut savoir que les gens de l’Est n’avaient pas un accès facile aux drogues. A la suite de l’ouverture de cette frontière c’est une grande découverte. Lors des fêtes qui pouvaient durer de une soirée à plusieurs jours, les drogues sont de plus en plus courantes et de plus en plus variées : ecstasy, MDMA, cocaïne …
          </p>
          <div class="audio-player center-player">
            <p class="temoignageaudio">Temoignage</p>
            <audio
            src="/static/drogue.mp3"
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
            <button class="chapter2-more-infos-close" @click="toggled">X</button>
        </div>
        <button class="chapter2-more-infos" @click="toggled">En savoir plus</button>
      </div>
      <p class="chapter-2-p">
        Les mœurs se libèrent et les jeunes se mélangent. Un tiers des immeubles de Berlin Ouest sont occupés pour faire des soirées qui durent plusieurs jours. Cela entraîne de nouvelles dérives autour de la drogue et du sexe.

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
