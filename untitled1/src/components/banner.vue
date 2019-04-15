<template>
  <div class="banner" v-bind:style="{backgroundImage:backgroundImageURL.bannerURL}"></div>
</template>

<script>
// import bannerImg from '../lib/bannerImg.js'
export default {
  data () {
    return {
    }
  },
  props: {
    backgroundImageURL: {
      type: Object
    }
  }
}
</script>

<style>
  .banner{
    background:no-repeat center;
    background-size: cover;
    height: 400px;
    left: 0;
    right: 0;
  }
</style>
