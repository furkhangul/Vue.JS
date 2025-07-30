<template>
  <form @submit.prevent="GirisYap">
    <label for="title">Başlık:</label>
    <input type="text" name="title" v-mode="title" required>
    <br>
    <br>
    <label for="detail">Mesaj:</label>
    <textarea v-mode="details" name="detail" required></textarea>
    <br/>
    <br/>
    <button>Proje Ekle</button>
  </form>
</template>
<script>
export default{
  data(){
    return{
        title:"",
        details:""
    }
  },
  methods:{
    GirisYap(){
      console.log(this.title, this.details);
    }
  }
}
</script>

<style>
form{
  width: 50%;
  height: auto;
  background-color: aliceblue;
  border-radius: 20px;
  margin: 10px;
  padding: 30px; 
  display: block;
}
label{
  /*Ekranda nasıl davranacağını gösterir.
  satırda mı blokta mı duracağını
  görünüp görünmeyeceğini
  diğer ögelere nasıl hizzalanacağını belirler 
  
  block ise o satırın komple ona ait olduğunu göstermekte kullanılır*/ 
  display: block;
  color:rgb(14, 37, 1);
  font-weight: bold;
  font-size:14px;
  /*Harfler arası boşluk */
  letter-spacing: 1px;
  margin:3px;
  padding: 2px;
}
input{
  padding:8px;
  width: 70%;
  border-radius: 8px;
  border:5px;
  border-bottom: 1px solid blue;
  box-shadow: 1px 1px 1px rgb(118, 141, 163);
}
textarea{
  padding:8px;
  width: 70%;
  border-radius: 8px;
  border:5px;
  border-bottom: 1px solid blue;
  box-shadow: 1px 1px 1px rgb(118, 141, 163);
}
form button{
  display: block;
  margin: 15px;
  padding:10px;
  border-radius: 20px;
  border:0px;
  background-color: blue;
  font-weight: bold;
  color:white;
  cursor: pointer ;
  border-bottom:1px solid rgb(0, 4, 24);
  }
</style>
