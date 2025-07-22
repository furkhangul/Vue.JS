<template>
  <div class="home">
    <img class="heartlogo" alt="Vue logo" src="../assets/icon.webp">
    <HelloWorld msg="Rojin'imm"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.heartlogo{
  width: 200px;
  height: 200px;
  margin:20px;
  padding:10px;

}
</style>


