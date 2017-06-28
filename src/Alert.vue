<template>
  <div>
    <h1>This is header</h1>
    
    <transition name="bounce" appear mode="out-in">
    <div class="message success" v-if="visible" key="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae qui cumque blanditiis itaque cupiditate, ipsum, pariatur officia est enim ipsam? Quas velit, vitae nisi deserunt alias obcaecati officia dolore explicabo!
    </div>
    <div class="message success" v-else key="invisible">
      Quae qui cumque blanditiis itaque cupiditate, ipsum, pariatur officia est enim ipsam? Quas velit, vitae nisi deserunt alias obcaecati officia dolore explicabo!
    </div>
    </transition>
    <button @click="toggle">toggle</button>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        visible: true
      }
    },
    methods: {
      enter: function (el, done) {
        $(el).hide().slideDown(500, done)
      },
      leave: function (el, done) {
        $(el).show().slideUp(500, done)
      },
      toggle: function () {
        this.visible = !this.visible
      }
    }
  }
</script>

<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
