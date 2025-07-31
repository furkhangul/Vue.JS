<template>
  <div>
    <Menu @click="enableAudio"/>
    <router-view/>
    <audio ref="audio" :src="audioSrc" autoplay loop muted></audio>
  </div>
</template>

<script>
import Menu from './views/Menu.vue'

export default {
  data() {
    return {
      audioSrc: require('@/assets/arkaplan.mp3')
    }
  },
  components:{
    Menu
  }
  ,
  mounted() {
    const audio = this.$refs.audio;
    audio.play().catch(() => {
      console.log("Tarayıcı otomatik çalma engellendi.");
    });
  },
  methods: {
    enableAudio() {
      const audio = this.$refs.audio;
      if (audio.muted) {
        audio.muted = false;
        audio.play();
      }
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
}

audio {
  display: none;
}
</style>