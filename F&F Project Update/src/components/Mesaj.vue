<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <p class="mektup">
        Bugün 5. ayımız.
        <br><br>
        Biliyorum… Belki zamanın nasıl geçtiğini sen de benim gibi anlayamıyorsun.
        <br><br>
        Ama her geçen gün seni biraz daha tanıyor, biraz daha seviyorum.
        <br><br>
        Sana olan hislerim öyle sıradan, basit duygular değil...
        <br><br>
        Bu siteyi senin için kodladım...
        <br><br>
        Her satırına sana olan sevgimi ekledim.
        <br><br>
        Belki bir web sitesidir dışarıdan bakınca...
        <br><br>
        Ama senin için attığım binlerce kalp atışından biri gibi düşün.
        <br><br>
        Geleceğimizin her satırını birlikte yazalım istiyorum.
        <br><br>
        Seni sonsuz kere seviyorum Firdevs...
        <br><br>
        Bu küçük site sadece bir hediye...
        <br><br>
        Ama sen, bana hayatın en büyük hediyesisin.
        <br><br>
        5. ayımız kutlu olsun, canımın içi.
        <br><br>
        Seni her şeyden çok seven,
        <br><br>
        Furkan…
        </p>
            <h3 class="subtitle">Aşk Kadınım Firdevs'im</h3>
        <div class="hitap-container">
          <p class="hitap-list">
            gülüm,<br>
            balım,<br>
            çiçeğim,<br>
            nefesim,<br>
            güzelim,<br>
            prensesim,<br>
            arım,<br>
            peteğim,<br>
            meleğim,<br>
            yıldızım,<br>
            güneşim,<br>
            ayım,<br>
            gecem,<br>
            günüm,<br>
            kalbim,<br>
            kelebeğim,<br>
            papatyam,<br>
            hayatım,<br>
            dünyam,<br>
            kaderim,<br>
            şansım,<br>
            mucizem,<br>
            rüyam,<br>
            ışığım,<br>
            umut ışığım,<br>
            gözbebeğim,<br>
            huzurum,<br>
            canım,<br>
            ruh eşim,<br>
            ömrüm,<br>
            baharım,<br>
            mevsimim,<br>
            hayalim,<br>
            umut ışığım,<br>
            en güzelim,<br>
            en kıymetlim,<br>
            en değerlim,<br>
            en özelim,<br>
            en sevdiğim…
      </p>
    </div>
    <h3 class="footer-love">♥ Furkan & Firdevs ♥</h3>
    <br>
    <p class="footer-link">By <a href="https://github.com/furkhangul">FurOfTheWeak</a> | Tüm Hakları Saklıdır.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  background-color: #fff0f5;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #ff4d6d;
  text-align: center;
  padding: 40px 20px;
}

.title {
  font-size: 36px;
  color: #e63946;
  font-weight: bold;
  margin-bottom: 20px;
}

.hitap-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}

.hitap-list {
  max-width: 300px;
  font-size: 20px;
  font-weight: bold;
  color: #ff69b4;
  line-height: 2;
}

.subtitle {
  font-size: 28px;
  color: #e63946;
  font-style: italic;
  margin-top: 30px;
}

.mektup {
  font-size: 18px;
  line-height: 1.8;
  color: #c9184a;
  text-align: justify;
  background: #fffafa;
  border: 2px solid #ffccd5;
  border-radius: 15px;
  padding: 20px;
  max-width: 700px;
  margin: 30px auto;
  box-shadow: 0 0 15px rgba(255, 105, 180, 0.3);
}

.footer-love {
  font-size: 24px;
  margin-top: 50px;
  color: #ff3366;
}

.footer-link {
  font-size: 14px;
  color: #6c757d;
}

a {
  color: #ff6f91;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>