<template>
  <div>
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <Veri :project="project"/>
      </div>
    </div>
  </div>
</template>
<script>
import Veri from '../components/VeriGonder.vue'
export default {
    data(){
      return{
        projects : [

        ]
      }
    },
    components: {
      Veri
    },

    mounted() {
      fetch('http://localhost:3000/Projeler')
      .then( res => res.json())
      .then(data  => this.projects = data)
      .catch(err => console.log(err.message))
    }
}
</script>
