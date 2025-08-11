<template>
  <h1>Home</h1>
</template>

<script>

export default {
  name:"AnaSayfa",
  components:{

  },
  setup(){
    console.log("Setup yüklendi !")
    //ilk setup yüklendi
  },
  mounted(){
    console.log("Mounted yüklendi !")
    //en son mounted yüklendi
  },
  created(){
    console.log("Created yüklendi !")
  }
}
/*
Setup
-Bileşen daha oluşmaya başlarken, en başta çalışır.

-Reactive değişken tanımlarsın.
-Fonksiyon yazarken kullanılır.
-Composition API'de tüm mantık buradan başlar.

-This yok, kullanılmaz.
-DOM hazır değiş yani HTML elementlerine ulaşamazsın daha.




Created
-Data, computed, methods hazır ama DOM henüz oluşmamışken çalışır.

-API isteklerini yapabilirsin.
-Veriler üzerinde ilk ayarlamar yapılabilir.

-this vardır. data ve methods a ulaşabilirsin.
-DOM yoktur.

Mounted
-Bileşen tamamen render edilip, DOM'a eklendikten sonra çalışır.

-HTML elementlerine ref, this.$el gibi elementlere erişilebilir.
-Üçüncü parti kütüphaneler başlatılabilir.
-Animasyon, ölçüm, DOM manipülasyonu yapılabilir.

-this vardır.
-DOM tamamen hazırdır.
*/
</script>
