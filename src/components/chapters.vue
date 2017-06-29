<template>
  <div class="chapters-wrapper">
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="chapters-nav-container" v-if="chapter1">
      <div class="chapters-menu">
        <ul class="chapters-nav-ul" v-if="visible">
          <li><router-link :to="{name: 'chapters.chapter1'}" class="experience-choice-button">CHAPITRE 1</router-link></li>
          <li><router-link :to="{name: 'chapter/02'}" class="experience-choice-button">CHAPITRE 2</router-link></li>
          <li><router-link :to="{name: 'chapter/03'}" class="experience-choice-button">CHAPITRE 3</router-link></li>
          <li><router-link :to="{name: 'chapter/04'}" class="experience-choice-button">CHAPITRE 4</router-link></li>
        </ul>
        <button class="reveal-menu-button" @click="toggle">CHAPITRES</button>
      </div>
      <div class="chapter-navigation">
        <div>
          <router-link :to="{name: 'chapters.chapter1'}" class="chapter-navigation-button"><div>UN REVEIL DIFFICILE</div></router-link>
          <router-link :to="{name: 'chapters.chapter2'}" class="chapter-navigation-button"><div>SE DIVERTIR</div></router-link>
          <router-link :to="{name: 'chapters.chapter3'}" class="chapter-navigation-button"><div>DATA BERLIN</div></router-link>
          <router-link :to="{name: 'chapters.chapter4'}" class="chapter-navigation-button"><div>UNE VISION COMUNE</div></router-link>
          <router-link :to="{name: 'chapters.page6'}" class="next-chapter" v-on:click="hideChapter1 = !hideChapter1">SUITE</router-link>
          <button @click="hideChapter1">SUITE</button>
        </div>
      </div>
      <div class="chapter-navigation">
        <div>
          <router-link :to="{name: 'chapters.page6'}" class="chapter-navigation-button"><div>UNE RENAISSANCE MUSICALE</div></router-link>
          <router-link :to="{name: 'chapters.page8'}" class="chapter-navigation-button"><div>PAS CHER ET EFFICACE</div></router-link>
          <router-link :to="{name: 'chapters.page9'}" class="chapter-navigation-button"><div>UN REGROUPEMENT PARTAGE</div></router-link>
          <router-link :to="{name: 'chapters.page6'}" class="next-chapter" v-on:click="hideChapter1 = !hideChapter1">SUITE</router-link>
          <button @click="hideChapter1">SUITE</button>
        </div>
      </div>
      <div class="chapter-navigation">
        <div>
          <router-link :to="{name: 'chapters.page14'}" class="chapter-navigation-button"><div>NI EST, NI OUEST</div></router-link>
          <router-link :to="{name: 'chapters.page15'}" class="chapter-navigation-button"><div>OUVERTURE ET LIBERTE</div></router-link>
          <router-link :to="{name: 'chapters.page6'}" class="next-chapter" v-on:click="hideChapter1 = !hideChapter1">SUITE</router-link>
          <button @click="hideChapter1">SUITE</button>
        </div>
      </div>
      <div class="chapter-navigation">
        <div>
          <router-link :to="{name: 'chapters.page17'}" class="chapter-navigation-button"><div>PLUS QU'UN BUSINESS</div></router-link>
          <router-link :to="{name: 'chapters.page18'}" class="chapter-navigation-button"><div>CLUB ET SELECTION</div></router-link>
          <router-link :to="{name: 'chapters.page20'}" class="chapter-navigation-button"><div>ET AUJOURD'HUI</div></router-link>
          <router-link :to="{name: 'chapters.page21'}" class="chapter-navigation-button"><div>PAGE FINALE</div></router-link>
          <router-link :to="{name: 'chapters.page6'}" class="next-chapter" v-on:click="hideChapter1 = !hideChapter1">SUITE</router-link>
          <button @click="hideChapter1">SUITE</button>
        </div>
      </div>
    </div>
    <div class="chapters-video-background">
        <img src="static/images/mur.jpg" alt="">
    </div>
  </div>
</template>


<script>
  import chapters2 from './chapters2.vue'
  
  export default {
    name: 'chapter1',
    components: {
      chapters2
    },
    data () {
      return {
        visible: false,
        chapter1: true,
        chapter1Dj: true,
        chapter2Menu: false
      }
    },
    methods: {
      toggle: function () {
        this.visible = !this.visible
      },
      hideChapter1: function () {
        let _this = this
        this.chapter1 = !this.chapter1
        setTimeout(function () { _this.$router.push('/chapter2Landing') }, 1000)
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
