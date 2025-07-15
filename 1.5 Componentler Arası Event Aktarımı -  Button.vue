<template>
    <div @click="clean">
        <h3>Temizlendi</h3>
    </div>
</template>

<script>
    export default{
        name:"ButtonAdd",

        data(){
            return{

            }
        },
    methods:{
        clean(){
            this.$emit("clean")
        }
    }
    }
</script>

<style>

</style>
