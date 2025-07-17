<template>
  <form>
    <!-- .prevent uzantısı JS de olduğu üzere sayfayı yenilenmesini engelliyor.-->
        <button @click.prevent="sendData">Gönder</button>
  </form>
</template>

<script>
export default {
  name: "FormData",
  data() {
    return {

    };
  },
  methods: {
    sendData(){
        console.log("Veriler Gönderildi")
    }
  }
};
</script>
