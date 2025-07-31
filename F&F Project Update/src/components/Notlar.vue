<template>
    <div class="container"
    :style="{ borderLeftColor: yazi.complate ? '#08814d' : '#e92300' }">
        <div class="box">
            <h3 @click="ShowWrite = ! ShowWrite">{{ yazi.title }}</h3>
            <div class="icons">
                <RouterLink :to="{name:'edit',params:{id:yazi.id}}"><span class="material-symbols-outlined">edit</span></RouterLink>
                <span class="material-symbols-outlined" @click="sil">delete</span>
                <span class="material-symbols-outlined" @click="onay" :style="{ color: yazi.complate ? '#08814d' : 'rgb(173, 182, 193)' }" >check</span>
            </div>
        </div>
        <p v-if="ShowWrite">{{ yazi.message }}</p>
    </div>
</template>

<script>
export default{
    name:"Notlar",
    props:['yazi'],
    data(){
        return{
            ShowWrite: false,
            url: `http://localhost:3000/yazilar/${this.yazi.id}`
        }
    },
methods: {
    onay() {
        fetch(this.url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ complate: !this.yazi.complate })
        })
        .then(() => {
            console.log("Güncellendi:", this.yazi.id);
            this.yazi.complate = !this.yazi.complate;
        })
        .catch((err) => console.error(err));
    },
  sil() {
    fetch(this.url, {
      method: "DELETE"
    })
    .then(() => {
      this.$emit('deleted', this.yazi.id); 
    })
    .catch((err) => console.log(err));
  }


}
    }
</script>
<style>
.container{
    width: 87%;
    margin:20px auto;
    padding: 10px 20px;
    background-color: hsla(312, 62%, 88%, 0.766);
    border: 0px;
    border-radius: 9px;
    box-shadow: 1px 2px 3px rgb(237, 149, 227);
    border-left: 5px solid  ;
}
h3{
    cursor: pointer;
    text-align: left;
}
.box{
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
  color: rgb(193, 66, 225);
}
p {
    font-size:14px;
    text-align: left;
}

</style>