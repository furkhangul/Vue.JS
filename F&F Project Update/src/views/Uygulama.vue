<template>
  <div class="about">
    <h1>Bu sayfa sadece senin için, aşkım 💖</h1>
    <p style="text-align: center;">Sana kalpli mesaj yazabilecek bir site olmadığını farkettim.<br> Daha fazla zaman ayrımamız için bu siteyi sana yaptım.</p>
  </div>

  <div>
    <form @submit.prevent="gonder">
      <label for="emojiSelect">Kalp Emojini Seç:</label>
<select id="emojiSelect" v-model="emoji" class="emoji-select">
  <option disabled value="">Lütfen bir emoji seç</option>
  <option>❤️</option>
  <option>💕</option>
  <option>💖</option>
  <option>💝</option>
  <option>💗</option>
  <option>💘</option>
  <option>💙</option>
  <option>💚</option>
  <option>💛</option>
  <option>💜</option>
  <option>🖤</option>
  <option>🤍</option>
  <option>🤎</option>
  <option>💓</option>
  <option>💞</option>
  <option>💟</option>
  <option>❣️</option>
  <option>💔</option>
  <option>❤️‍🔥</option>
  <option>❤️‍🩹</option>
</select>

      <br />
      <input
        type="text"
        class="emoji"
        v-model="mesaj"
        placeholder="Sevgilimin Adı"
      />
      <br />
      <button type="submit" class="btn">Sevgi Dolu Gönderiyi Oluştur 💌</button>
      <p class="yazi">{{ yaziRomantik }}</p>
      <pre class="post">{{ gonderiRomantik }}</pre>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emoji: "",
      mesaj: "",
      gonderildi: false,
    };
  },
  computed: {
    yaziRomantik() {
      if (!this.emoji && !this.mesaj)
        return "Kalbinizin sesi burada yankılanacak...";
      return `Sevgili ${this.mesaj}, kalbimden sana gelen mesaj: ${this.emoji}`;
    },
    gonderiRomantik() {
      if (!this.emoji || !this.mesaj)
        return "Lütfen kalp simgeni ve sevgilinin adını gir.";

      const girilen = this.mesaj.trim().toUpperCase();
      let tumDesen = "";

      function satirTamamla(satir) {
        const uzunluk = 7;
        let temizSatir = satir;
        const fark = uzunluk - [...satir].length;
        if (fark > 0) {
          temizSatir = satir + " ".repeat(fark);
        }
        return temizSatir;
      }

      for (let i = 0; i < girilen.length; i++) {
        const harf = girilen[i];
        let desen = "";

        if (harf === "A") {
          desen = [
            satirTamamla("  " + this.emoji + "  "),
            satirTamamla(" " + this.emoji + " " + this.emoji + " "),
            satirTamamla(this.emoji.repeat(3)),
            satirTamamla(this.emoji + "   " + this.emoji),
            satirTamamla(this.emoji + "   " + this.emoji),
          ].join("\n");
        } else if (harf === "B") {
          desen = [
            satirTamamla(this.emoji.repeat(2)),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji.repeat(2)),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji.repeat(2)),
          ].join("\n");
        } else if (harf === "C") {
          desen = [
            satirTamamla(" " + this.emoji.repeat(3)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(" " + this.emoji.repeat(3)),
          ].join("\n");
        } else if (harf === "Ç") {
          desen = [
            satirTamamla(" " + this.emoji.repeat(3)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(" " + this.emoji.repeat(3)),
            satirTamamla("  " + this.emoji),
          ].join("\n");
        } else if (harf === "D") {
          desen = [
            satirTamamla(this.emoji.repeat(2) + " "),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji.repeat(2) + " "),
          ].join("\n");
        } else if (harf === "E") {
          desen = [
            satirTamamla(this.emoji.repeat(4)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji.repeat(4)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji.repeat(4)),
          ].join("\n");
        } else if (harf === "F") {
          desen = [
            satirTamamla(this.emoji.repeat(4)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji.repeat(3)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
          ].join("\n");
        } else if (harf === "G") {
          desen = [
            satirTamamla(" " + this.emoji.repeat(3)),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji + " " + this.emoji.repeat(2)),
            satirTamamla(this.emoji + "    " + this.emoji),
            satirTamamla(" " + this.emoji.repeat(3)),
          ].join("\n");
        } else if (harf === "H") {
          desen = [
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(this.emoji.repeat(4)),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(this.emoji + "     " + this.emoji),
          ].join("\n");
        } else if (harf === "I") {
          desen = [
            satirTamamla(this.emoji.repeat(2)),
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(this.emoji.repeat(2)),
          ].join("\n");
        } else if (harf === "İ" || harf ==="i") {
          desen = [
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(this.emoji.repeat(2)),
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(" " + this.emoji + " "),
            satirTamamla(this.emoji.repeat(2)),
          ].join("\n");
        } else if (harf === "J") {
          desen = [
            satirTamamla("  " + this.emoji.repeat(3)),
            satirTamamla("   " + this.emoji),
            satirTamamla("   " + this.emoji),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(" " + this.emoji.repeat(2) + " "),
          ].join("\n");
        } else if (harf === "K") {
          desen = [
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji + " " + this.emoji + " "),
            satirTamamla(this.emoji.repeat(2) + "  "),
            satirTamamla(this.emoji + " " + this.emoji + " "),
            satirTamamla(this.emoji + "  " + this.emoji),
          ].join("\n");
        } else if (harf === "L") {
          desen = [
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji.repeat(4)),
          ].join("\n");
        }else if (harf === "M") {
  desen = [
    satirTamamla(this.emoji + "       " + this.emoji),
    satirTamamla(this.emoji.repeat(2) +"  " + this.emoji.repeat(2)),
    satirTamamla(this.emoji + "  " +this.emoji + "   " + this.emoji), 
    satirTamamla(this.emoji + "       " + this.emoji),
    satirTamamla(this.emoji + "       " + this.emoji),
  ].join("\n");
}

 else if (harf === "N") {
          desen = [
            satirTamamla(this.emoji + "      " + this.emoji),
            satirTamamla(this.emoji.repeat(2) + "   " + this.emoji),
            satirTamamla(this.emoji + " " + this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji + "   " + this.emoji.repeat(2)),
            satirTamamla(this.emoji + "     " + this.emoji),
          ].join("\n");
        } else if (harf === "O") {
          desen = [
            satirTamamla(" " + this.emoji.repeat(3) + " "),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(" " + this.emoji.repeat(3) + " "),
          ].join("\n");
        } else if (harf === "Ö") {
          desen = [
            satirTamamla("  " + this.emoji + " " + this.emoji + " "),
            satirTamamla("\n"),
            satirTamamla(" " + this.emoji.repeat(3) + " "),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(" " + this.emoji.repeat(3) + " "),
          ].join("\n");
        } else if (harf === "P") {
          desen = [
            satirTamamla(this.emoji.repeat(3) + " "),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji.repeat(3) + " "),
            satirTamamla(this.emoji),
            satirTamamla(this.emoji),
          ].join("\n");
        } else if (harf === "R") {
          desen = [
            satirTamamla(this.emoji.repeat(3) + " "),
            satirTamamla(this.emoji + "  " + this.emoji),
            satirTamamla(this.emoji.repeat(3) + " "),
            satirTamamla(this.emoji + " " + this.emoji),
            satirTamamla(this.emoji + "  " + this.emoji),
          ].join("\n");
        } else if (harf === "S") {
          desen = [
            satirTamamla(" " + this.emoji.repeat(3)),
            satirTamamla(this.emoji + "   "),
            satirTamamla(" " + this.emoji.repeat(2) + " "),
            satirTamamla("     " + this.emoji),
            satirTamamla(this.emoji.repeat(3) + " ")
          ].join("\n");
        } else if (harf === "Ş") {
          desen = [
            satirTamamla(" " + this.emoji.repeat(3)),
            satirTamamla(this.emoji),
            satirTamamla(" " + this.emoji.repeat(2)),
            satirTamamla("      " + this.emoji),
            satirTamamla(this.emoji.repeat(3) + " "),
            satirTamamla("  " + this.emoji),
          ].join("\n");
        } else if (harf === "T") {
          desen = [
            satirTamamla(this.emoji.repeat(4)),
            satirTamamla("   " + this.emoji + "  "),
            satirTamamla("   " + this.emoji + "  "),
            satirTamamla("   " + this.emoji + "  "),
            satirTamamla("   " + this.emoji + "  "),
          ].join("\n");
        } else if (harf === "U") {
          desen = [
            satirTamamla(this.emoji + "    " + this.emoji + " "),
            satirTamamla(this.emoji + "    " + this.emoji + " "),
            satirTamamla(this.emoji + "    " + this.emoji + " "),
            satirTamamla(this.emoji + "    " + this.emoji + " "),
            satirTamamla(" " + this.emoji.repeat(3) + "  ")
          ].join("\n");
        } else if (harf === "Ü") {
          desen = [
            satirTamamla(this.emoji + "    " + this.emoji),
            satirTamamla("       "),
            satirTamamla(this.emoji + "    " + this.emoji),
            satirTamamla(this.emoji + "    " + this.emoji),
            satirTamamla(" " + this.emoji.repeat(3) + " "),
          ].join("\n");
        } else if (harf === "V") {
          desen = [
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(" " + this.emoji + "   " + this.emoji + " "),
            satirTamamla("  " + this.emoji + " " + this.emoji + "  "),
            satirTamamla("   " + this.emoji + "   "),
          ].join("\n");
        } else if (harf === "Y") {
          desen = [
            satirTamamla(this.emoji + "     " + this.emoji),
            satirTamamla(" " + this.emoji + "  " + this.emoji + " "),
            satirTamamla("   " + this.emoji + "   "),
            satirTamamla("   " + this.emoji + "   "),
            satirTamamla("   " + this.emoji + "   "),
          ].join("\n");
        } else if (harf === "Z") {
          desen = [
            satirTamamla(this.emoji.repeat(3)),
            satirTamamla("   " + this.emoji + " "),
            satirTamamla("  " + this.emoji + "  "),
            satirTamamla(" " + this.emoji + "   "),
            satirTamamla(this.emoji.repeat(3)),
          ].join("\n");
        } else if (harf === "W") {
          desen = [
            satirTamamla(this.emoji + "   " + this.emoji + "   " + this.emoji),
            satirTamamla(this.emoji + "   " + this.emoji + "   " + this.emoji),
            satirTamamla(
              this.emoji +
                " " +
                this.emoji +
                " " +
                this.emoji +
                " " +
                this.emoji +
                " " +
                this.emoji
            ),
            satirTamamla(
              this.emoji +
                " " +
                this.emoji +
                " " +
                this.emoji +
                " " +
                this.emoji +
                " " +
                this.emoji
            ),
            satirTamamla(" " + this.emoji + "   " + this.emoji + "   " + this.emoji),
          ].join("\n");
        } else if (harf === "X") {
          desen = [
            satirTamamla(this.emoji + "   " + this.emoji),
            satirTamamla(" " + this.emoji + " " + this.emoji + " "),
            satirTamamla("  " + this.emoji + "  "),
            satirTamamla(" " + this.emoji + " " + this.emoji + " "),
            satirTamamla(this.emoji + "   " + this.emoji),
          ].join("\n");
        } else {
          desen = `(${harf} henüz kalbimizde yer almadı 💔)`;
        }

        tumDesen += desen + "\n\n";
      }

      return tumDesen;
    },
  },
  methods: {
    gonder() {
      this.gonderildi = true;
    },
  },
};
</script>

<style>
.emoji-select {
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  font-size: 22px;
  width: 270px;
  border: 2px solid #ff4d6d;
  background: #fff0f6;
  color: #d4145a;
  font-weight: 700;
  box-shadow: 0 0 10px #ff4d6d88;
  cursor: pointer;
  transition: 0.3s;
}
.emoji-select:focus {
  outline: none;
  border-color: #ff3366;
  box-shadow: 0 0 15px #ff3366aa;
}
.emoji {
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  font-size: 22px;
  width: 250px;
  border: 2px solid #ff4d6d;
  background: #fff0f6;
  color: #d4145a;
  font-weight: 700;
  box-shadow: 0 0 10px #ff4d6d88;
  transition: 0.3s;
}
.emoji:focus {
  outline: none;
  border-color: #ff3366;
  box-shadow: 0 0 15px #ff3366aa;
}
.post {
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  margin: 20px;
  padding: 20px;
  white-space: pre-wrap;
  font-family: "Courier New", Courier, monospace;
  color: #d4145a;
  background: #fff0f6;
  border-radius: 15px;
  box-shadow: 0 0 15px #ff3366aa;
}
.yazi {
  color: #d4145a;
  font-size: 18px;
  margin: 10px 20px;
  font-weight: 600;
  font-style: italic;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.about h1 {
  color: #d4145a;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-top: 30px;
  font-weight: 900;
  text-shadow: 0 0 10px #ff4d6d;
}
.btn {
  margin: 0 20px 15px 20px;
  padding: 10px 20px;
  background-color: #d4145a;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 0 10px #ff4d6dcc;
  transition: 0.3s;
}
.btn:hover {
  background-color: #ff4d6d;
  box-shadow: 0 0 15px #ff3366ee;
}
</style>