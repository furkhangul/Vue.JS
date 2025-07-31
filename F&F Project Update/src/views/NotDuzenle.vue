<template>
  <form @submit.prevent="EditScript" class="love-form">
    <h1>Düzenle ❤️</h1>

    <label for="title">Başlık:</label>
    <input id="title" type="text" v-model="title" required />

    <label for="message">Mesaj:</label>
    <textarea id="message" v-model="message" required></textarea>

    <button type="submit">Düzenle</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      message: "",
      complate: false
    };
  },
  mounted() {
    const id = this.$route.params.id;
    const url = 'http://localhost:3000/yazilar/' + id;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.title = data.title;
        this.message = data.message;
        this.complate = data.complate ?? false;
      })
      .catch(err => console.log(err));
  },
  methods: {
    EditScript() {
      const id = this.$route.params.id;
      const url = 'http://localhost:3000/yazilar/' + id;

      fetch(url, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          message: this.message,
          complate: this.complate
        })
      })
      .then(() => this.$router.push('/not'))
      .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
.love-form {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px 40px;
  background: linear-gradient(135deg, #f9e1e7 0%, #f2b8c7 100%);
  border-radius: 25px;
  box-shadow: 0 8px 20px rgba(255, 105, 180, 0.3);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #880e4f;
  user-select: none;
  transition: box-shadow 0.3s ease;
}
.love-form:hover {
  box-shadow: 0 12px 30px rgba(255, 105, 180, 0.6);
}

.love-form h1 {
  text-align: center;
  font-weight: 700;
  margin-bottom: 25px;
  font-size: 2.2rem;
  letter-spacing: 1.2px;
  color: #a81d5d;
  text-shadow: 1px 1px 3px #f48fb1;
}

.love-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: #7b1fa2;
  letter-spacing: 0.05em;
}

.love-form input[type="text"],
.love-form textarea {
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 20px;
  border: none;
  border-radius: 15px;
  background-color: #fff0f6;
  box-shadow: inset 2px 2px 6px #f8bbd0, inset -2px -2px 6px #fce4ec;
  font-size: 1rem;
  color: #5d2a51;
  resize: vertical;
  transition: box-shadow 0.3s ease;
}

.love-form input[type="text"]:focus,
.love-form textarea:focus {
  outline: none;
  box-shadow: 0 0 8px 3px #ec407a;
  background-color: #fff4f8;
  color: #3b003b;
}

.love-form button {
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #ec407a, #d81b60);
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(216, 27, 96, 0.6);
  transition: background 0.3s ease, box-shadow 0.3s ease;
  user-select: none;
}

.love-form button:hover {
  background: linear-gradient(45deg, #d81b60, #ec407a);
  box-shadow: 0 8px 20px rgba(236, 64, 122, 0.8);
}
</style>
