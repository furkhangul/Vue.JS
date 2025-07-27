<template>
  <div>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <!-- Veri bileşeninden gelen silme ve tamamlanma olaylarını dinliyoruz -->
        <Veri :project="project" @delete="handleDelete" @bittiDegisti="handleBittiGuncelle"/>
      </div>
    </div>
  </div>
</template>

<script>
import Veri from '../components/VeriGonder.vue'

export default {
  data() {
    return {
      projects: []
    }
  },
  components: {
    Veri
  },
  methods: {
    // Gelen id'ye göre projeyi listeden siler
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
    // Gelen id'ye göre projeyi bulur ve 'bitti' değerini tersine çevirir (reactivity için array kopyalama ile)
    handleBittiGuncelle(id) {
      this.projects = this.projects.map(p => {
        if (p.id === id) {
          return { ...p, bitti: !p.bitti };
        }
        return p;
      });
    }
  },
  mounted() {
    fetch('http://localhost:3000/Projeler')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  }
}
</script>
