<template>
  <div id="leftPanelFrame">
    <div id="mask" v-on:click="show=0" v-if="show===1"></div>
    <div id="leftPanelButton" v-on:click="show=1"></div>
    <transition name="lp">
      <div id="leftPanel" v-if="show===1">
      <span>游戏</span>
      <ul>
        <router-link tag="li" class="gameButton" v-for="(item,index) in leftPanelData" :key="index" :to="item.clickURL">
          <img :src="item.iconPath">
          <span class="higher">{{item.gameName}}</span>
          <span class="lower">{{item.enName}}</span>
        </router-link>
      </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'leftButtonPanel',
  data () {
    return {
      show: 0
    }
  },
  props: {
    leftPanelData: {
      type: Array
    }
  }
}

</script>

<style>
  #mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(47, 47, 47, 0.6);
  }

  #mask:hover{
    cursor: pointer;
  }
  #leftPanelButton{
    position: fixed;
    left: 0;
    height: 40px;
    width: 40px;
    top: 50%;
    margin-top:-20px;
    background: url("../assets/img/gameIcon/witcher3.png");
    background-size: contain;
  }

  #leftPanelButton:hover{
    cursor: pointer;
  }

  #leftPanel{
    display: block;
    width: 300px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: #312F2F;
  }
#leftPanel>span{
  box-sizing: border-box;
  display: block;
  border: #FFFFFF solid 1px;
  width: 100%;
  padding: 0 10px;
  background: url("../assets/img/index/headerBack.jpg") no-repeat center;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  font-size: xx-large;
}
.gameButton{
  height: 50px;
  width: 300px;
  align-content: center;
  display: flex;
  box-sizing: border-box;
  border: white solid 1px;
}
  .gameButton:hover{
    background: darkgrey;
    cursor: pointer;
  }
.gameButton>img{
  width: 40px;
  height: 40px;
  display: inline-block;
  padding: 5px;
}

.higher,.lower{
  display: inline-block;
  padding: 0 5px;
  height: 50px;
  line-height: 50px;
  color: white;
}
.lp-enter{
  transition: all .3s;
  transform: translateX(0);
  visibility: visible;
}

.lp-leave{
  transition: all .3s;
  transform: translateX(-100%);
  visibility: hidden;
}

  .lp-leave-active {
    transition: all .3s ease;
    transform: translateX(-100%);
    visibility: hidden;
  }
</style>
