<template>
  <div 
    class="project" 
    :style="{ borderLeftColor: project.bitti ? '#08814d' : '#e92300' }"
  >
    <div class="actions">
      <h3 @click="showDetails = !showDetails" class="title">
        {{ project.isim }}
      </h3>
      <div class="icons">
        <RouterLink :to="{name:'edit', params:{id:project.id }}"><span class="material-symbols-outlined">edit</span></RouterLink>
        <span class="material-symbols-outlined" @click="delProject">delete </span>
        <span 
          @click="finishButton" 
          class="material-symbols-outlined" 
          :style="{ color: project.bitti ? '#08814d' : 'rgb(173, 182, 193)' }"
        >
          check
        </span>
      </div>
    </div>
    <p v-if="showDetails" class="info">
      {{ project.bilgi }}
    </p>
  </div>
</template>

<script>
export default {
  name: "VeriGonder",
  props: ["project"],
  data() {
    return {
      showDetails: false
    }
  },
  methods: {
    delProject() {
      // Projeyi silmek için ilgili API adresine DELETE isteği gönderiliyor
      const url = 'http://localhost:3000/Projeler/' + this.project.id;
      fetch(url, { method: 'DELETE' })
        .then(() => this.$emit("delete", this.project.id))
        .catch(err => console.log(err));
    },

    // Finish butonu projenin tamamlandığını işaretlemek için veya işaretini kaldırmak için kullanılıyor.
    finishButton() {
      // Projenin bitti durumunu tersine çevirmek için PATCH isteği gönderiliyor
      const url = 'http://localhost:3000/Projeler/' + this.project.id;
      fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bitti: !this.project.bitti }) 
      })
      .then(() => this.$emit("bittiDegisti", this.project.id))
      .catch(err => console.log(err));
    }
  }
}
</script>

<style>
.project {
  width: 95%;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: aliceblue;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid; /* Rengi inline style ile kontrol edeceğiz */
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined {
  font-size: 24px;
  font-weight: bold;
  padding-left: 5px;
  padding-right: 5px;
  align-items: right;
  cursor: pointer;
  color: rgb(173, 182, 193);
}
.material-symbols-outlined:hover {
  color: rgb(3, 4, 37);
}
</style>
