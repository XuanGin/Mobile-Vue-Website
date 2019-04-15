<template>
<div class="cubes">
  <div class="cubes_level1" v-for="(item,index) in cubeData" :key="index">
    <a :href="item.hrefUrl">
    <div class="cubes_level2" >
      <div v-bind:style="{backgroundImage:'url(' + item.imagePath + ')'}"></div>
      <h3>{{item.cubeTitle}}</h3>
      <span>{{item.cubeText}}</span>
    </div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'cubes',
  props: {
    cubeData: {
      type: Array
    }
  }
}

</script>

<style>
.cubes{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
  .cubes_level1{
width: 49%;
height: 500px;
    padding: 0.5%;
    text-align: center;
  }
.cubes a{
  text-decoration: none;
}
  .cubes_level2 {
    display: block;
  }
.cubes_level1:hover{
  background: darkorange;
}
.cubes h3{
color: white;
    padding: 5px;
  }
.cubes span{
  color: white;
}
.cubes_level2>div{
  background: no-repeat center;
  background-size: cover;
  height: 400px;
}

</style>
