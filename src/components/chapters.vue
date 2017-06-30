<template>
  <div class="chapters-wrapper">
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
    <button class="experience-choice-button-dj" @click="displayChapter1DJb" v-if="djButton">DECOUVRIR L'HISTOIRE</button>
    <button class="experience-choice-button-societe" @click="displayChapter1societe" v-if="djButton">DECOUVRIR L'HISTOIRE</button>
    <div class="chapters-nav-container">
      <div class="chapters-menu" v-if="navChap">
        <ul class="chapters-nav-ul" v-if="visible">
          <li><router-link :to="{name: 'chapterone'}" class="experience-choice-button">1. DEUX PARTIES, UNE VISION</router-link></li>
          <li><button @click="goMenuChap1">1. DEUX PARTIES, UNE VISION</button></li>
          <li><button @click="goMenuChap2">2. UNE JEUNESSE, UNE SOIREE</button></li>
          <li><button @click="goMenuChap2">3. UNE EVOLUTION</button></li>
          <li><router-link :to="{name: 'chapters.chapter2'}" class="experience-choice-button">2. UNE JEUNESSE, UNE SOIREE</router-link></li>
          <li><router-link :to="{name: 'chapters.page16'}" class="experience-choice-button">3. UNE EVOLUTION</router-link></li>
        </ul>
        <button class="reveal-menu-button" @click="toggle">CHAPITRES</button>
      </div>
      <div class="chapter-navigation" v-if="chapter1S">
        <div>
          <router-link :to="{name: 'chapters.chapter1'}" class="chapter-navigation-button"><div>UN REVEIL DIFFICILE</div></router-link>
          <router-link :to="{name: 'chapters.chapter2'}" class="chapter-navigation-button"><div>SE DIVERTIR</div></router-link>
          <router-link :to="{name: 'chapters.chapter3'}" class="chapter-navigation-button"><div>DATA BERLIN</div></router-link>
          <router-link :to="{name: 'chapters.chapter4'}" class="chapter-navigation-button"><div>UNE VISION COMUNE</div></router-link>
          <button @click="displayMenu22" class="next-chapter">SUITE</button>
        </div>
      </div>
      <div class="chapter-navigation" v-if="chapter1Dj">
        <div class="dj">
          <router-link :to="{name: 'chapters.page6'}" class="chapter-navigation-button"><div>UNE RENAISSANCE MUSICALE</div></router-link>
          <router-link :to="{name: 'chapters.page8'}" class="chapter-navigation-button"><div>PAS CHER ET EFFICACE</div></router-link>
          <router-link :to="{name: 'chapters.page9'}" class="chapter-navigation-button"><div>UN REGROUPEMENT PARTAGE</div></router-link>
          <button @click="displayMenu2" class="next-chapter">SUITE</button>
        </div>
      </div>
      <div class="chapter-navigation" v-if="chapter2Menu">
        <div>
          <router-link :to="{name: 'chapters.page14'}" class="chapter-navigation-button"><div>NI EST, NI OUEST</div></router-link>
          <router-link :to="{name: 'chapters.page15'}" class="chapter-navigation-button"><div>OUVERTURE ET LIBERTE</div></router-link>
          <button @click="displayMenu3" class="next-chapter">SUITE</button>
        </div>
      </div>
      <div class="chapter-navigation" v-if="chapter3Menu">
        <div>
          <router-link :to="{name: 'chapters.page17'}" class="chapter-navigation-button"><div>PLUS QU'UN BUSINESS</div></router-link>
          <router-link :to="{name: 'chapters.page18'}" class="chapter-navigation-button"><div>CLUB ET SELECTION</div></router-link>
          <router-link :to="{name: 'chapters.page20'}" class="chapter-navigation-button"><div>ET AUJOURD'HUI</div></router-link>
          <router-link :to="{name: 'chapters.page21'}" class="chapter-navigation-button"><div>PAGE FINALE</div></router-link>
          <button @click="goIntro" class="next-chapter">INTRO</button>
        </div>
      </div>
    </div>
    <div class="chapters-video-background">
        <img src="static/images/mur.jpg" alt="">
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        visible: false,
        chapter1S: false,
        chapter1Dj: false,
        chapter2Menu: false,
        chapter3Menu: false,
        djButton: true,
        navChap: false
      }
    },
    methods: {
      toggle: function () {
        this.visible = !this.visible
      },
      hideChapter1: function () {
        // let _this = this
        this.chapter1 = !this.chapter1
      },
      displayChapter1societe: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/chapitre1'); _this.chapter1S = !_this.chapter1S; _this.djButton = !_this.djButton }, 500)
      },
      displayChapter1DJ: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/page6'); _this.chapter1Dj = !_this.chapter1Dj; _this.chapter1S = !_this.chapter1S }, 500)
      },
      displayChapter1DJb: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/page6'); _this.djButton = !_this.djButton; _this.chapter1Dj = !_this.chapter1Dj }, 500)
      },
      displayMenu22: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/chapter2Landing'); _this.chapter1S = !_this.chapter1S; _this.chapter1Dj = !_this.chapter1Dj }, 500)
      },
      displayMenu2: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/chapter2Landing'); _this.chapter2Menu = !_this.chapter2Menu; _this.chapter1Dj = !_this.chapter1Dj }, 500)
      },
      displayMenu3: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/page16'); _this.chapter3Menu = !_this.chapter3Menu; _this.chapter2Menu = !_this.chapter2Menu }, 500)
      },
      goIntro: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/landingTitle'); _this.chapter3Menu = !_this.chapter3Menu }, 500)
      },
      goMenuChap2: function () {
        let _this = this
        setTimeout(function () { _this.$router.push('/chapter2Landing'); _this.chapter3Menu = !_this.chapter3Menu; _this.chapter2Menu = !_this.chapter2Menu }, 500)
      }
    }
  }
</script>
<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-out .5s;
  }
  @keyframes bounce-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
      transform: translateX(0%);
      opacity: 1;
    }
    50% {
      transform: scale(0.5);
      transform: translateX(-50%);
      opacity: 0.5;
    }
    100% {
      transform: scale(0);
      transform: translateX(-100%);
      opacity: 0;
    }
  }
</style>
