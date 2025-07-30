<template>
    <form @submit.prevent="EditScript">
        <h1>Düzenle</h1>
        <label for="title">Başlık:</label>
        <input type="text" name="title" v-model="title" required>
        <label for="detail">Mesaj:</label>
        <textarea v-model="details" name="detail" required></textarea>
        <button>Düzenle</button>
    </form>
</template>
<script>
export default{
    props:['id'],
    data(){
        return{
            title:"",
            details:"",
        }
    },
    mounted(){
        const id = this.$route.params.id
        const url = 'http://localhost:3000/Projeler' + id

        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            //Bunları yerleştireceğiz.
            this.title = data.title;
            this.details = data.bilgi
        })
        .catch((err)=>console.log(err))
    },
    methods:{
        EditScript(){

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
  display: block;
  color:rgb(14, 37, 1);
  font-weight: bold;
  font-size:14px;
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
