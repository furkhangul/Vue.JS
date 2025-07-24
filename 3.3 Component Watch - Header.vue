<template>
  <slot></slot>
  <div>
    <input type="number" v-model="number1" placeholder="number 1" /><br /><br />
    <input type="number" v-model="number2" placeholder="number 2" /><br /><br />
    <p>Total: {{ total }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      number1: 0,
      number2: 0,
      total: 0
    };
  },
  watch: {
    number1(newValue, oldValue) {
      console.log("Sayılar:", oldValue, newValue);
      this.total = parseInt(this.number1) + parseInt(this.number2);
    },
    number2(newValue, oldValue) {
      console.log("Sayılar:", oldValue, newValue);
      this.total = parseInt(this.number1) + parseInt(this.number2);
    }
  }
};
</script>

<style>
.head {
  margin: 20px;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  color: black;
  border: 0cap;
}
</style>
