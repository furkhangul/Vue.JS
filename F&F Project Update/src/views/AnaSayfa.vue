<template>
  <div class="home">
    <img class="heartlogo" alt="Vue logo" src="../assets/icon.webp">
    <Mesaj msg="Firdevs'imm"/>
  </div>
</template>

<script>
import Mesaj from '@/components/Mesaj.vue'

export default {
  name: 'AnaSayfa',
  components: {
    Mesaj
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