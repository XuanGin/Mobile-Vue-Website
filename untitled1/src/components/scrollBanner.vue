<template>
  <div class="scrollBanner">
    <transition-group tag='ul' class='scrollBanner_ul' name='item'>
      <li class="scrollBanner_li" v-for="(item,index) in sbData.slideList" :key="index" v-show="index===currentIndex" @mouseenter="changeFlag(0)" @mouseleave="changeFlag(1)">
        <a :href="item.clickUrl">
          <img :src="item.imagePath"/>
        </a>
      </li>
      </transition-group>
    <ul class="controlBtField">
      <li class="controlBt" v-for="(item,index) in sbData.slideList.length" :key="index" :class="{'controlBtActive':index === currentIndex}" @mouseenter="changeFlag(0),change(index)"  @mouseleave="changeFlag(1)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: '',
      currentIndex: 0,
      flag: 2
    }
  },
  props: {
    sbData: {
      type: Object
    }
  },
  methods: {
    turn () {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop () {
      if (this.flag < 2) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    autoPlay () {
      if (this.flag === 2) {
        this.currentIndex++
        if (this.currentIndex > this.sbData.slideList.length - 1) {
          this.currentIndex = 0
        }
      }
    },
    change (i) {
      this.currentIndex = i
    },
    changeFlag (key) {
      if (key === 1) {
        this.flag++
      } else if (key === 0) {
        this.flag--
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  }
}
</script>

<style>
  .scrollBanner {
    height: 1080px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
  }

  .scrollBanner_ul {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .scrollBanner_ul li {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .item-enter-to {
    transition: all .6s ease;
    transform: translateX(0);
  }

  .item-leave-active {
    transition: all .6s ease;
    transform: translateX(-100%)
  }

  .item-enter {
    transform: translateX(100%)
  }

  .item-leave {
    transform: translateX(0)
  }

  .controlBtField {
    position: absolute;
    z-index: 80;
    width: 100%;
    font-size: 0;
    bottom: -500px;
    display: flex;
    justify-content: center;
  }
  .controlBt{
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    margin: 0 10px;
  }
  .controlBtActive{
    background: rgba(255, 165, 0, 0.8);
  }
</style>
