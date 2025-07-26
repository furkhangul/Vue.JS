<template>
  <div>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <p>
          {{ project.isim }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    data(){
      return{
        projects : [

        ]
      }
    },
    //Vue, sayfaya bir şeyler çizmeye başlar: yazılar, resimler, butonlar... Ama bunları ekrana koymadan önce sadece hazırlanıyor.
    
    //mounted() = “Her şey yerine yerleşti, şimdi oynamaya başlayabiliriz!”
    mounted() {
      //Fetch internetten veri almak veya veri göndermek için kullanılır.
      //Özellikle bir API için istek yapmak için tercih edilir.
      /*
        fetch(...): İnternetten veri istiyor.

        .then(...): Cevap gelince, cevabı işler.
      */
      fetch('http://localhost:3000/Projeler')

      //Burada getirilen cevabı json formatına getiriyoruz.
      .then( res => res.json())
      //burada ise verileri dataya atmaya çalışıyoruz.
      .then(data  => this.projects = data)

      .catch(err => console.log(err.message))
    }
}
</script>
