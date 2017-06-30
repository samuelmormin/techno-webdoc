<template>
  <div class="container-full fantome">
    <h1 class="chapter-1-title">
      VILLE FANTOME
      <div class="more-infos-block">
        <div class="more-infos-content" v-if="displayed">
          <h2>LA REGLEMENTATION</h2>
          <p>
            Dans l’Est de la ville, la moindre sous-culture est réprimée, tandis que le rock et la techno se sont imposés à l’Ouest. Mais quelques jours avant la chute du mur, lors de manifestations du côté Est, les forces de l’ordre ne réagissent pas alors que le cortège demande plus de liberté : liberté de la presse, de circuler et d’opinion.
          </p>
          <p>
          A la suite de la chute du mur, les gendarmes et membres des forces de l’ordre de l’Est n’ont eu plus aucune valeur aux yeux du gouvernement, de la justice et surtout des jeunes. Dans de nombreux témoignages, les jeunes parlent d’ouvertures de portes musclées sans que les gendarmes, juste à côté, ne réagissent.
          </p>
          <p>
            La voix est libre pour les DJ’s qui cherchent des lieux pour faire la fête le soir venue.
          </p>
          <div class="audio-player center-player">
            <p>TEMOIGNAGE</p>
            <audio
            src="/static/loi.mp3"
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
            <button class="chapter2-more-infos-close" @click="toggled">X</button>
        </div>
        <button class="chapter2-more-infos" @click="toggled">En savoir plus</button>
      </div>
    </h1>
    <p class="chapter-1-p">
      Avec près de 25 000 bâtiments désaffectés Berlin Est est un terrain de jeu à grande échelle. Quelques jours d’inactivité dans l’un d’eux et c’est au pied de biche que l’on rentre pour occuper l’espace. Quelques éléments techniques, de grands draps noirs pour camoufler les murs et tous sont prêts pour une soirée de plusieurs jours.
    </p>
    <router-link :to="{name: 'chapters.page12'}" class="chapter2-more-infos-11">EN SAVOIR PLUS</router-link>
  </div>
</template>


<script>
  export default {
    name: 'chapter1',
    nextLink: 'chapters.chapter1',
    data () {
      return {
        displayed: false
      }
    },
    methods: {
      toggled: function () {
        this.displayed = !this.displayed
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
      }
    }
  }
</script>
