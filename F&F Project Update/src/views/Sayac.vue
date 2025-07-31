<template>
  <div class="love-container">
    <div class="love-box">
      <h1>💞 Birlikteyiz:</h1>
      <p class="time">
        {{ zaman.ay }} ay 
        {{ zaman.gun }} gün 
        {{ zaman.saat }} saat 
        {{ zaman.dakika }} dakika 
        {{ zaman.saniye }} saniye
      </p>
    </div>
    <div class="hearts">
      <span class="heart" v-for="n in 20" :key="n">❤️</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baslangic: new Date('2025-02-22T15:30:20'), // Örnek: 5 ay 1 gün 6 saat önce
      zaman: { ay: 0, gun: 0, saat: 0, dakika: 0, saniye: 0 },
      timer: null
    };
  },
  mounted() {
    this.guncelle();
    this.timer = setInterval(this.guncelle, 1000);
  },
  methods: {
    guncelle() {
      const simdi = new Date();
      let toplamSaniye = Math.floor((simdi - this.baslangic) / 1000);

      const ay = Math.floor(toplamSaniye / (30 * 24 * 3600));
      toplamSaniye -= ay * 30 * 24 * 3600;

      const gun = Math.floor(toplamSaniye / (24 * 3600));
      toplamSaniye -= gun * 24 * 3600;

      const saat = Math.floor(toplamSaniye / 3600);
      toplamSaniye -= saat * 3600;

      const dakika = Math.floor(toplamSaniye / 60);
      const saniye = toplamSaniye % 60;

      this.zaman = { ay, gun, saat, dakika, saniye };
    }
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.love-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffc0cb, #ffe4e1);
  overflow: hidden;
}

.love-box {
  text-align: center;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(255,20,147,0.4);
  animation: pulse 2s infinite;
}

.love-box h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #c71585;
}

.love-box .time {
  font-size: 28px;
  font-weight: bold;
  color: #d02090;
}

.hearts {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.heart {
  position: absolute;
  font-size: 20px;
  animation: drift 6s infinite ease-in;
  opacity: 0.8;
}

.heart:nth-child(odd) { font-size: 24px; }
.heart:nth-child(even) { font-size: 18px; }

@keyframes pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}

@keyframes drift {
  0% {
    transform: translateY(100vh) rotate(0deg);
    left: calc(5% + 90% * var(--i));
  }
  100% {
    transform: translateY(-10vh) rotate(360deg);
  }
}
</style>