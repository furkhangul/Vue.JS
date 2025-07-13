<template>
    <AppTitle :titleText1="text"/>
    <AppTitle :titleText2="text2"/>
</template>

<script>

import AppTitle from './components/Baslik.vue';
export default {
  name: 'App',
  components: {
    AppTitle
  },
  data(){
    return{
      text:"FurOfTheWeak",
      text2:"Furkan Gül"
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
