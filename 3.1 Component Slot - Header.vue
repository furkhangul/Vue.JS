<template>
    <div>
        <h3 class="head">{{content}}</h3>
        <!--YERİNE ALTERNATİF OLARAK-->
        <slot></slot>
    </div>
</template>
<script>
    export default{
        props: ['content']
    }
</script>
<style>
.head{
    margin:20px;
    padding:20px;
    font-size: 30px;
    font-weight: bold;
    color:black;
    border: 0cap;
    }
</style>
