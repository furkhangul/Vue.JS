<template>
    <form>
        <input type="checkbox" id="checkbox1" v-model="checked" />
        <label for="checkbox1"> Onay</label>
        <p>{{ checked ? "Kabul Ediyorum" : "Kabul Etmiyorum" }}</p>
    </form>
</template>

<script>
    export default
    {
        name:"FormData",
        data(){
            return{
                checked: true,
            }
        }
    }
</script>

<style>

</style>
