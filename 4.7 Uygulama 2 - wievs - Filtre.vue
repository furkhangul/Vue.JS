,<template>
  <nav class="filtreleme">
    <button @click="filtrele('all')" :class="{ active: current === 'all' }">Tümü</button>
    <button @click="filtrele('complate')" :class="{ active: current === 'complate' }">Bitirilmiş</button>
    <button @click="filtrele('ongoing')" :class="{ active: current === 'ongoing' }">Bitirilmemiş</button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    filtrele(by) {
      this.$emit('filtrele', by);
    }
  }
};
</script>

<style>
.filtreleme button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  text-transform: uppercase;
  font-size: 12px;
  margin: 8px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
}

.filtreleme button.active {
  color: #555;
}
</style>
