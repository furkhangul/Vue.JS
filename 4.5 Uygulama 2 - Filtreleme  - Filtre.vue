<template>
  <div>
<Filtre @filtrele="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Veri :project="project" @delete="handleDelete" @bittiDegisti="handleBittiGuncelle"/>
      </div>
    </div>
  </div>
</template>

<script>
import Veri from '../components/VeriGonder.vue'
import Filtre from './Filtre.vue'
export default {
  data() {
    return {
      projects: [],
      current:""
    }
  },
  components: {
    Veri,
    Filtre
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id)
    },
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
