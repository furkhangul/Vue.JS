<template>
    <div class="project">
        <h3 @click="showDetails = !showDetails" class="title">
            {{ project.isim }}
        </h3>
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
    border-left: 4px solid #e90074;
}
h3 {
    /*üZERİNE GELDİĞİ ZAMAN : EL ŞARETİ ÇIKSIN */ 
    cursor: pointer;
}

</style>
