<template>
  <div id="index">
    <headerNav :headerData="hData[0]"></headerNav>
    <banner :backgroundImageURL="bData[0]"></banner>
    <h2>热游推荐</h2>
    <scrollBanner :sbData="sbData"></scrollBanner>
    <h2>新游推荐</h2>
    <leftButtonPanel :leftPanelData="lpData"></leftButtonPanel>
    <cubes :cubeData="cbData"></cubes>
    <newFooter></newFooter>
  </div>
</template>

<script>
import headerNav from '../components/headerNav'
import banner from '../components/banner'
import scrollBanner from '../components/scrollBanner'
import cubes from '../components/cubes'
import newFooter from '../components/newFooter'
import headerData from '../lib/headerData'
import scrollBannerData from '../lib/scrollBannerData'
import cubeData from '../lib/cubeData'
import bannerData from '../lib/bannerData'
import leftButtonPanel from '../components/leftButtonPanel'
import leftPanelData from '../lib/leftPanelData'

export default {
  name: 'index',
  data () {
    return {
      bData: bannerData,
      sbData: scrollBannerData,
      cbData: cubeData,
      hData: headerData,
      lpData: leftPanelData
    }
  },
  components: {
    cubes,
    headerNav,
    banner,
    scrollBanner,
    newFooter,
    leftButtonPanel
  }
}
</script>

<style>
  body{
    background: rgba(0, 0, 0, 0.9);
  }
  #index>h2{
    display: block;
    height: 80px;
    line-height: 80px;
    width: 100%;
    background: url("../assets/img/index/headerBack.jpg");
    text-align: center;
  }
</style>
