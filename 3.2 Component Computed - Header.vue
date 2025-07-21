<template>
    <slot></slot>
    <div>
        <input type="text" v-model="name" placeholder="name">
        <br>
        <br>
        <input type="text" v-model="surname" placeholder="surname"> 
        <br>
        <br>
        <p>{{ nameandsurname }}</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:"",
                surname:""
            }
        },

        /*
        Computed kullanımı:
        Computed: Ben bir hesaplama yapacağım ama bu hesaplama veri değişmedikçe tekrar yapılmasın demek oluyor.
        
        yani birleştirilmiş isim (Furkan Gül) gibi bir şey sürekli değişmiyorsa Vue boşuna her defasında hesaplamasın diye kullanıyoruz.

        Bu işlemi Vue de 3 şekilde daha gerçekleştirebilirdik.

        1. Olarak string şekilde yapabilirdik yani:
        <p>{{ name + ' ' + surname }}</p>
         
        ama kod dağınık ve aynı bileşeni başka yerde de yapman gerekiyorsa kopyala yapıştır zorlaştırız.

        2.method ile yapılabilirdi yani:
                methods: {
        nameandsurname() {
            return this.name + ' ' + this.surname;
        }
        }

        Her defasında vue tekrardan çalışırdı ve çünkü methodlar ön belleğe alınmamaktadır.
        name ve surname değişmese bile tekrar çağırılır.


        3.computed ile

        yüksek performanslıdır
        property gibi çalışır
        hesaplama işlemlerinde sıkça kullanılır.
        
        
        */
        computed:{
            nameandsurname(){
                return (this.name + ' ' + this.surname)
            }
        }
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
