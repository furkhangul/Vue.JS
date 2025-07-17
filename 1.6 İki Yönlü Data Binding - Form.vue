<template>
    <form>
        <!--Kullanıcının girdiği verileri, Vue bileşenindeki bir değişkene otomatik olarak bağlar ve günceller-->
        <input type="text" v-model="text"/>
        <p>{{text}}</p>
    </form>
</template>

<script>
    export default
    {
        name:"FormData",
        data(){
            return{
                text:"deneme"
            }
        }
    }
</script>

<style>

</style>
