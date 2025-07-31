<template>
    <nav class="menu">
        <RouterLink :to="{name:'sayac'}">
            Sayaç
        </RouterLink> | 
        <RouterLink :to="{name:'about'}">
            Uygulama
        </RouterLink> |
        <RouterLink :to="{name:'chat'}">
            Mesajlaşma
        </RouterLink> | 
        <RouterLink :to="{name:'home'}">
            Ana Sayfa
        </RouterLink> | 
        <RouterLink :to="{name:'not'}">
            Notlar
        </RouterLink> | 
        <RouterLink :to="{name:'notekle'}">
            Not Ekle
        </RouterLink> |
        <RouterLink :to="{name:'galeri'}">
            Galeri
        </RouterLink>
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
.menu{
    text-align: center;
    margin:40px auto;
    color:aliceblue;    
}
.menu a {
    text-decoration:none;
    font-weight: bold;
    color:#999;
}
a.router-link-active{
    border-bottom: 2px solid rgb(201, 50, 121);
    padding-bottom:4px;
    color:pink;
}
</style>