<template>
  <div class="container-full">
    <div class="half-block-1">
      <div class="audio-player center-player">
        <audio
        src="/static/epoque-temoin.mp3"
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
    </div>
    <div class="half-block-2">
      <h1 class="chapter-2-title">SE DIVERTIR A TOUT PRIX </h1>
      <div class="more-infos-block">
        <div class="more-infos-content" v-if="displayed">
          <h2>SE DIVERTIR MALGRE TOUT</h2>
          <p>
            La population Berlinoise est répartie entre Berlin Est et Berlin Ouest. Dirigée par les Soviétique d’un côté et les Occidentaux de l’autres, la vie y est différente.
            A Berlin Est, les restrictions sont nombreuses et les divertissements sont limités. Le régime est fort et la propagande militaire est omniprésente. Le gouvernement traque sans relâche certaines formes de divertissements comme le Rock’n’Roll ou les musiques non politiques. Les jeunes restent forts face à ces interdictions en essayant de garder une vie la plus normale possible : danser, sortir, chanter …
          </p>
          <p>
            A Berlin Ouest, même si les régimes sont plus occidentaux et favorisent un développement rapide sur le plan technologique et sociétal, des familles restent séparées par le Rideau de Fer. La consommation et la vie à l’américaine se développent ce qui apportent notamment des nouveautés artistiques : musique et danse. Les disquaires se munissent de CD avec les meilleurs DJs de techno Nord-Américains comme Jeff Miles, DJ Dilla et Kevin Saunderson.
          </p>
          <p>
            Ce sont ces CD que les nouveaux DJs de techno viendront récupérer lors de l’ouverture du mur avant de retourner à l’Est dans les zones désaffectées pour faire la fête.
          </p>
            <button class="chapter2-more-infos-close" @click="toggled">X</button>
        </div>
        <button class="chapter2-more-infos" @click="toggled">En savoir plus</button>
      </div>
      <p class="chapter-2-p">
        L’appel de la liberté reste constant tout au long des 28 ans de l’histoire du mur. La population a besoin de respirer et de retrouver espoir. Cette ville particulière attire malgré les restrictions … De s jeunes venus des quatre coins du globe découvrent la ville et facilitent l’arrivée de nouveaux divertissements.
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
    computed: {
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
      toggled: function () {
        this.displayed = !this.displayed
      }
    }
  }
</script>
