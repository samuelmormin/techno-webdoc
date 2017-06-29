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
        src="/static/techno-temoin.mp3"
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
      <div class="more-infos-block">
        <div class="more-infos-content" v-if="displayed">
          <h2>Details technique sur la techno </h2>
          <p>
            Dès 1981, la musique électro commence à émerger et fait une apparition progressive dans les clubs et les soirées de Détroit aux Etats-Unis. Après plusieurs années de tests et de réflexions des artistes comme Juan Atkins, Derrick May et Eddie Fowlkes donne naissance à la techno. C’est en 1984 que le mot techno arrive dans le jargon technique.
          <p>
            La techno est principalement définie comme une musique avec un kick répétitif qui fera son succès en Europe. Adopté à Amsterdam en premier, ce style musical se propage en Allemagne, en Angleterre, et dans les autres pays. Chaque pays copie les bases et arrange les morceaux à leurs manières .
          <p>
            La composition électronique (MAO – Musique Assistée par Ordinateur) suit ses propres règles. En électronique, ces instruments acoustiques sont également présents sous forme d’échantillons numérisés (samples). Cela vient s’ajouter à la synthèse sonore (créé par des synthétiseurs physiques ou logiciels). Dans le style techno le plus répandu, les drums sont créés à l’aide de la synthèse sonore. Tous les instruments sont d’ailleurs échantillonnés ou reproduit par synthèse et ensuite arranger ensemble afin de produire une consistance musicale.
          </p>
            <button class="chapter2-more-infos-close" @click="toggled">X</button>
        </div>
        <button class="chapter2-more-infos" @click="toggled">En savoir plus</button>
      </div>
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
