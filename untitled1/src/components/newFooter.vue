<template>
  <footer id="myFooter"><div id="fLogo"></div><span>本实例仅作学习之用素材均来自网络如有任何侵权行为<br>
请联系作者e-mail:papapug1998@163.com</span>
  </footer>
</template>

<script>
export default {
  name: 'newFooter'
}
</script>

<style>
  #myFooter{
    text-align: center;
    display: flex;
    justify-content: center;
    height: 100px;
    left: 0;
    right: 0;
    background: url("../assets/img/index/headerBack.jpg");
    align-items: center;
  }
  #fLogo {
    height: 60px;
    width: 100px;
    background: url("../assets/img/index/panda.png");
    background-size: cover;
    margin: auto 10px auto 10px;
  }
</style>
