<template>
<nav class="manu">
    <RouterLink :to="{path:'/'}">Ana Sayfa</RouterLink> | 
    <RouterLink :to="{path:'/ekle'}">Proje Ekleme</RouterLink>
</nav>

    
</template>
<script>
export default{
    data(){
        return{

        }
    }
}
</script>

<style>
.manu{
    text-align: center;
    margin:40px auto;
    color:aliceblue;
}
.manu a {
    display: inline-block;
    text-decoration:none;
    font-weight: bold;
    color:#999;
}
a.router-link-active{
    border-bottom: 2px solid rgb(33, 91, 33);
    padding-bottom:4px;
}
</style>
