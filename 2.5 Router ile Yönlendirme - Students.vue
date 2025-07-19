    <template>
        <div>
            <h1>Öğrenciler</h1>

            <!--
            Key:
            :key, Vue'de bir listeyi ekrana yazdırmada kullanılır.

            Birden fazla veriyi yazıdırmaya çalışırken. Vue bu verileri takip etmek zorunda.
            Ama her öğrenciyi nasıl ayırt edecek ki.
             İşte burada :key devreye girer.
             Vue'ya "bu öğrenci şudur" diyebilmek için :key veririz.
            
            
            -->
            <div v-for="std in students" :key="std.id">
                ID: {{ std.id }}, İsim: {{ std.name }}, Not: {{ std.not }}
            </div>
        </div>
    </template>
    <script>
    export default{
        name:"students",
        data(){
            return{
                students:[
                    {id:1, name:"Furkan",not:89},
                    {id:2, name:"Kemal",not:90},
                    {id:3, name:"Rasim",not:68}
                ]
            }
        }
    }
    </script>
    <style>

    </style>
