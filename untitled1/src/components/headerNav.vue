<template>
    <div id="header" :style="{backgroundImage:headerData.backgroundURL}">
      <router-link to="/myForm">
        <div id="logo" v-bind:style="{backgroundImage:headerData.logoURL}"></div>
      </router-link>
      <h1>{{headerData.titleText}}</h1>
      <ul id="rightUL">
        <li class="rtp"><a href="#">小游戏</a></li>
        <li class="rtp"><a href="#">音乐</a></li>
        <li class="rtp"><a href="#">壁纸</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    headerData: {
      type: Object
    }
  }
}
</script>

<style>
</style>
