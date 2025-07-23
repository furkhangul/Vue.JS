<template>
  <div>
    <nav @click="enableAudio">
      <router-link to="/">Ana Sayfa</router-link> |
      <router-link to="/about">Uygulama</router-link> |
      <router-link to="/sayac">Aşk Sayacı</router-link> |
      <router-link to="/galeri">Galeri</router-link>
    </nav>
    <router-view/>
    <!-- Arka planda ses -->
    <audio ref="audio" :src="audioSrc" autoplay loop muted></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioSrc: require('@/assets/arkaplan.mp3')
    }
  },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #FFC0CB;
}

/* Ses çalar görünmesin */
audio {
  display: none;
}
</style>
