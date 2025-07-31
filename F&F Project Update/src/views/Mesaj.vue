<template>
  <div class="container">
    <h1 class="title">Sohbet</h1>

    <div class="input-section">
      <textarea v-model="mesaj" placeholder="Mesajınızı yazın..." class="textarea"></textarea>
      <div class="buttons">
        <button class="furkan-btn" @click="gonder('Furkan')">Fırkan 💙</button>
        <button class="firdevs-btn" @click="gonder('Firdevs')">Frdevs 💖</button>
      </div>
    </div>

    <div class="messages">
      <div v-for="item in mesajlar" :key="item.id" class="message-box" :class="item.kim === 'Furkan' ? 'furkan-msg' : 'firdevs-msg'">
        <strong>{{ item.kim }}:</strong> {{ item.icerik }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesaj: "",
      mesajlar: [],
      url: "http://localhost:3000/mesajlar"
    };
  },
  mounted() {
    this.mesajlariGetir();
  },
  methods: {
    mesajlariGetir() {
      fetch(this.url)
        .then(res => res.json())
        .then(data => {
          this.mesajlar = data;
        })
        .catch(err => console.log(err));
    },
    gonder(kim) {
      if (!this.mesaj.trim()) return;

      const yeniMesaj = {
        kim: kim,
        icerik: this.mesaj.trim()
      };

      fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(yeniMesaj)
      })
        .then(res => res.json())
        .then(data => {
          this.mesajlar.push(data);
          this.mesaj = "";
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 30px auto;
  padding: 25px;
  border-radius: 15px;
  background: linear-gradient(to right, #ffe0f0, #e0f4ff);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #b30059;
}

.input-section {
  margin-bottom: 20px;
}

.textarea {
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  resize: none;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: white;
}

.furkan-btn {
  background-color: #3f87f5;
}

.firdevs-btn {
  background-color: #ff69b4;
}

.messages {
  margin-top: 20px;
}

.message-box {
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 10px;
  max-width: 90%;
  word-wrap: break-word;
}

.furkan-msg {
  background-color: #e1efff;
  color: #004e92;
  align-self: flex-start;
}

.firdevs-msg {
  background-color: #ffe1f1;
  color: #b30059;
  align-self: flex-end;
}
</style>
