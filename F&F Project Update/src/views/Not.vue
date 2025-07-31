<template>
    <div class="listeleme" v-for="yazi in yazilar" :key="yazi.id"> 
        <Not :yazi="yazi"/>
    </div>
</template>
<script>
import Not from '../components/Notlar.vue'
export default{
        components:{
        Not
    },
    data(){
        return{
            yazilar:[]
        }
    },
    mounted(){
        const url = 'http://localhost:3000/yazilar'
        fetch(url)
        .then(res => res.json())
        .then(data => this.yazilar = data)
        .catch(err=>console.log(err))
    }
}
</script>
<style>

</style>