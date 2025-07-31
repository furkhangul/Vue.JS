<template>
  <div class="gallery-container">
    <h1 class="title">💖 Anılarımız 💖</h1>
    
    <div class="gallery-grid">
      <div class="gallery-item" v-for="(foto, index) in fotoGaleri" :key="index">
        <img :src="foto" alt="Birlikte Anı" />
        <span class="heart-overlay">❤️</span>
      </div>
    </div>

    <div class="floating-hearts">
      <span class="floating-heart" v-for="n in 30" :key="n">💗</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
fotoGaleri: Array.from({ length: 80 }, (_, i) => require(`@/assets/${i + 1}.jpg`))


    };
  }
};
</script>

<style scoped>
.gallery-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ffe4e1, #ffc0cb);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  overflow: hidden;
  position: relative;
}

.title {
  font-size: 36px;
  color: #d02090;
  margin-bottom: 30px;
  text-shadow: 1px 1px 5px white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  width: 90%;
  max-width: 1200px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(255,20,147,0.4);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-radius: 20px;
}

.heart-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px 8px;
  border-radius: 10px;
}

.floating-hearts {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-heart {
  position: absolute;
  font-size: 18px;
  animation: float 10s infinite ease-in;
  opacity: 0.7;
}

.floating-heart:nth-child(odd) { font-size: 22px; }
.floating-heart:nth-child(even) { font-size: 16px; }

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    left: calc(5% + 90% * var(--i));
  }
  100% {
    transform: translateY(-10vh) rotate(360deg);
  }
}
</style>