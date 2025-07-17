<template>
    <form>
        <select v-model="renkler">
            <option>Mavi</option>
            <option>Gri</option>
            <option>Beyaz</option>
        </select>
        <p>{{ renkler }}</p>
    </form>
</template>

<script>
    export default
    {
        name:"FormData",
        data(){
            return{
                renkler:""
            }
        }
    }
</script>

<style>

</style>
