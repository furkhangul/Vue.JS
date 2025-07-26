<template>
    <div class="project">
        <div class="actions">
        <h3 @click="showDetails = !showDetails" class="title">
            {{ project.isim }}
        </h3>
        <div class="icons">
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete </span>
            <span class="material-symbols-outlined">check</span>
        </div>
        </div>
        <p v-if="showDetails" class="info">
            {{ project.bilgi }}
        </p>
    </div>
</template>

<script>
export default{
    name:"Veri Aktar",
    data(){
        return{
            showDetails: false
        }
    },
    props:["project"]
}
</script>

<style>
.project{
    width: 95%;
    margin:20px auto;
    padding:10px 20px;
    background-color: aliceblue;
    border-radius: 5px;
    box-shadow: 1px 2px 3px rgb(0,0,0,0.05);
    border-left: 4px solid #0069e9;
}
h3 {
    cursor: pointer;
}
.actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined{
    font-size: 24px;
    font-weight: bold;
    padding-left:5px;
    padding-right: 5px;
    align-items: right;
    cursor:pointer;
    color:rgb(173, 182, 193);
}
.material-symbols-outlined:hover{
    color:rgb(3, 4, 37);
}
</style>
