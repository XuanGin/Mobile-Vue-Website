<template>
<div>
  <header-nav :headerData="hData[1]"></header-nav>
  <aside class="gameIntroduction">
    <div id="ItdImg"></div>
    <span>游戏介绍</span>
    <ul>
      <li><span class="ItdH">游戏名称:</span><span class="ItdL">巫师3：狂猎</span><hr></li>
      <li><span class="ItdH">英文名称:</span><span class="ItdL">The Witcher 3: Wild Hunt</span><hr></li>
      <li><span class="ItdH">游戏制作:</span><span class="ItdL">CD Projekt Red</span><hr></li>
      <li><span class="ItdH">游戏发行:</span><span class="ItdL">WB Games(NA)，Spike Chunsoft(JP)</span><hr></li>
      <li><span class="ItdH">游戏平台:</span><span class="ItdL">Xbox One/PC/PS4</span><hr></li>
      <li><span class="ItdH">发售日期:</span><span class="ItdL">2015年5月19日</span><hr></li>
      <li><span class="ItdH">游戏题材:</span><span class="ItdL">中世纪，魔幻，冒险</span><hr></li>
    </ul>
    <span>媒体评分</span>
    <ul>
      <li class="gameScore">
        <div class="ScoreTitle"  v-on:click="expend(0)"><span>IGN</span><span class="arrow"></span></div>
        <div class="details detailsHide">
          <img src="../assets/img/witcher3/IGN.jpg" width="100%">
          <ul>
            <li class="scoreText">开放大世界，精致的细节，《巫师3》给杰洛特的故事划上了一个完美的句号。9.3/10<hr></li>
            <li class="scoreText">+开放大世界<hr></li>
            <li class="scoreText">+有血有肉的角色<hr></li>
            <li class="scoreText">+沉浸式体验<hr></li>
            <li class="scoreText">+酣畅淋漓的战斗<hr></li>
            <li class="scoreText">-故事不够恢宏大气<hr></li>
          </ul>
        </div>
      </li>
      <li class="gameScore">
        <div class="ScoreTitle"  v-on:click="expend(1)"><span>GameSpot</span><span class="arrow"></span></div>
        <div  class="details detailsHide">
          <img src="../assets/img/witcher3/GameSpot.jpg" width="100%">
          <ul>
            <li class="scoreText">10/10<hr></li>
            <li class="scoreText">+残酷而又美丽的开放世界<hr></li>
            <li class="scoreText">+个人矛盾和政治博弈平衡得恰到好处又引人入胜的剧情<hr></li>
            <li class="scoreText">+耐人寻味的细节揭露每一个行动带来的影响<hr></li>
            <li class="scoreText">+护甲、魔药系统，让人能直观感觉到主角的成长<hr></li>
            <li class="scoreText">+耐玩度超高<hr></li>
            <li class="scoreText">-还有些许小BUG<hr></li>
          </ul>
        </div>
      </li>
    </ul>
  </aside>
  <div id="mainFrame">
    <div id="witcherVideo">
      <iframe src="//player.bilibili.com/player.html?aid=35470503&cid=62184033&page=1"
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
      </iframe>
    </div>
    <h2>剧情介绍</h2>
    <div class="stories">
      <a href="#"><img src="../assets/img/witcher3/wh.jpg" width="100%"></a>
      <a href="#"><img src="../assets/img/witcher3/hos.jpg" width="100%"></a>
      <a href="#"><img src="../assets/img/witcher3/baw.jpg" width="100%"></a>
    </div>
  </div>
  <div class="blank"></div>
  <newFooter></newFooter>
</div>
</template>

<script>
import HeaderNav from '../components/headerNav'
import NewFooter from '../components/newFooter'
import headerData from '../lib/headerData'
import jQuery from 'jquery'
export default {
  name: 'witcher3',
  data () {
    return {
      hData: headerData
    }
  },
  components: {NewFooter, HeaderNav},
  methods: {
    expend (i) {
      jQuery('.details').eq(i).toggleClass('detailsHide')
      jQuery('.arrow').eq(i).toggleClass('extends')
    }
  }
}
</script>

<style>
  body{
    list-style: none;
    background:rgba(0, 0, 0, 0.9);
  }

  #mainFrame{
    width: 73%;
    float: right;
    margin:0 1%;
    border-radius: 10px;
  }

  .gameIntroduction{
    float: left;
    width: 25%;
    border-radius: 10px;
    border: rgba(255,255,255,0.3);
    background: #eeeeee;
  }

  .gameIntroduction ul{
    list-style: none;
    margin: 5px 0;
  }

  .gameIntroduction ul hr{
    border: 1px dotted;
  }

  .gameIntroduction>span{
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: x-large;
    background: url("../assets/img/index/headerBack.jpg");
    border-radius: 5px;
    padding: 0 5px;
  }

  #ItdImg{
    background: url("../assets/img/witcher3/pict.jpg") no-repeat center;
    background-size: contain;
    height: 500px;
    width: 80%;
    margin: 10px auto;
  }

  .gameIntroduction li{
    margin: 5px;
  }

  .ItdH{
    color: rgba(40, 40, 40, 0.8);
    margin: 5px;
    font-size: x-large;
  }

  .ItdL{
    font-size: larger;
  }

  .ScoreTitle{
    height: 40px;
    line-height: 40px;
    display: flex;
    background: #888888;
    justify-content: space-between;
  }
  .ScoreTitle:hover{
    cursor: pointer;
  }

  .ScoreTitle>span{
    font-size: large;
  }

  .arrow{
    display: block;
    width: 30px;
    height: 30px;
    background: url("../assets/img/witcher3/arrow.png") no-repeat center;
    background-size: cover;
    text-align: center;
    margin: 5px;
  }

  .extends{
    transform:rotate(90deg) ;
  }

  .detailsHide{
    display: none;
  }

  .scoreText{
    font-size: larger;
  }

  #mainFrame>h2{
    background: url("../assets/img/index/headerBack.jpg");
    height: 50px;
    line-height: 50px;
    width: 99%;
    padding: 0 0.5%;
  }

  .stories{
    width: 100%;
  }

  #witcherVideo{
    margin: 0 auto;
    width: 100%;
  }

  #witcherVideo iframe{
    width: 100%;
    height: 960px;
  }
.blank{
  clear: both;
}
</style>
