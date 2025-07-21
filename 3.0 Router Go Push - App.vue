//Uygulamalarda ileri ve geri methodlarını inceledim. Burada go ve push ne işe yarıyor matnığı kavranıldı.

<template>
  <nav>

    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link> |
    <router-link :to="{name:'students'}">Students</router-link>
  </nav>

  <div>
    <span @click="anasayfa">Ana Sayfa</span>
    <span @click="geri">Geri</span>
    <span @click="ileri">İleri</span>
  </div>
  <router-view/>
</template>


<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      //this.$router.push(...) → Vue Router üzerinden yeni bir sayfaya ilerlemeyi sağlar.
      anasayfa(){
        this.$router.push({name:'home'})
      },

      ileri(){
        //Tarayıcı geçmişinde bir ileri gitmeye çalışır (tıpkı tarayıcıdaki "ileri" butonu gibi).

        //+1 → ileri 1 adım.
        this.$router.go(+1)
      },
      geri(){

        //Tarayıcı geçmişinde bir geri gitmeye çalışır (tıpkı tarayıcıdaki "geri" butonu gibi).

        //-1 → geri 1 adım.
        this.$router.go(-1)
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
  color: #42b983;
}
span{
  margin:20px;
  padding:30px;
  font-size: 20px;
  font-weight: bold;
}

</style>
