<template>
  <h3>{{titleText1}}</h3>
  <h4>{{titleText2 }}</h4>
</template>

<script>
  export default{
    name: "AppTitle",
    props:["titleText1","titleText2"],
    data(){
      return{
      }
    }
  }
</script>

<style>
h3{
  font-size: 30px;
  color:aqua;
  font-family: 'Courier New', Courier, monospace;
}
</style>
