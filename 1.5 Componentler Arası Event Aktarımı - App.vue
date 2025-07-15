<template>
    <AppTitle :titleText1="text"/>
    <AppTitle :titleText2="text2"/>
    <ButtonAdd @clean="cleanInput" />
    <input type="text" ref="inputText">
</template>

<script>

import AppTitle from './components/Baslik.vue';

import ButtonAdd from './components/Button.vue';
export default {
  name: 'App',
  components: {
    AppTitle,
    ButtonAdd
  },
  data(){
    return{
      text:"FurOfTheWeak",
      text2:"Furkan Gül"
    }
  },
  methods:{
    cleanInput(){
      this.$refs.inputText.value = "";
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
