<template>
  <div class="chapters-wrapper">
    <router-view></router-view>
    <div class="chapters-nav-container">
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
        <router-link :to="{name: 'chapters.chapter1'}" class="chapter-navigation-button"><div>UNE SOCIETE STRICTE</div></router-link>
        <router-link :to="{name: 'chapters.chapter2'}" class="chapter-navigation-button"><div>PEU DE LOISIRS</div></router-link>
        <router-link :to="{name: 'chapters.chapter3'}" class="chapter-navigation-button"><div>PEU DE LOISIRS</div></router-link>
        <router-link :to="{name: 'chapters.chapter4'}" class="chapter-navigation-button"><div>PEU DE LOISIRS</div></router-link>
        <router-link :to="{name: 'chapters.chapter4'}" class="chapter-navigation-button"><div>PEU DE LOISIRS</div></router-link>
      </div>
    </div>
    <video class="chapters-video-background" autoplay="autoplay" loop="loop">
      <source src="/static/video.mp4"  type="video/mp4"  />
      Your browser doesn't support video API
    </video>
  </div>
</template>
 

<script>
  export default {
    name: 'chapter1',
    data () {
      return {
        visible: false
      }
    },
    methods: {
      toggle: function () {
        this.visible = !this.visible
      }
    }
  }
</script>
