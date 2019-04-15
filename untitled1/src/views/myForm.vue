<template>
  <div id="myFromFrame">
    <headerNav :headerData="hData[0]"></headerNav>
  <div id="frame">
    <div class="blank"></div>
    <div id="FormLogo"></div>
    <form>
      <div class="inputD"><label for="user">账号</label><input id="user"></div>
      <div class="inputD"><label for="password">密码</label><input id="password" type="password" ></div>
      <button id="login">登录</button>
    </form>
    <button id="signUp">注册</button>
  </div>
    <div class="weather"><iframe></iframe></div>
  <newFooter></newFooter>
  </div>
</template>

<script>
import headerNav from '../components/headerNav'
import headerData from '../lib/headerData'
import newFooter from '../components/newFooter'
export default {
  name: 'myForm',
  data () {
    return {
      hData: headerData
    }
  },
  components: {
    headerNav,
    newFooter
  }
}
</script>

<style>
  #myFromFrame{
    background:url("../assets/img/form/timg-(3).jpg") no-repeat fixed;
    background-size: cover;
  }

  .blank{
    width: 200px;
    height: 100px;
  }
  #FormLogo{
    width: 280px;
    height: 180px;
    background: url("../assets/img/index/panda.png") no-repeat center;
    background-size: cover;
    margin: 0 auto;
  }
  #frame{
    width: 40%;
    height: 80%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin: 10% auto;
    display: block;
  }
  #FormLogo form{
    display: block;
    font-size: x-large;
  }

  .inputD input{
    height: 25px;
    width: 250px;
    margin: 0 5px;
  }

  .inputD{
    margin: 20px auto;
  }

  #frame button{
    width: 200px;
    height: 25px;
    margin: 15px auto;
    background: orange;
    border: none;
    border-radius: 10px;
    font-size: large;
    cursor: pointer;
  }
  #frame button:hover{
    transform: scale(1.25);
  }
</style>
