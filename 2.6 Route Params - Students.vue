    <template>
        <div>
            <h1>Öğrenciler</h1>
            <div v-for="std in students" :key="std.id">
                <!--Burada kullanılan method tam olarak params metodu. Burada $ işareti ile verinin id bilgisi çekiliyor-->
                <router-link :to="{path:'/students/${student.id}'}">
                        İsim: {{ std.name }}
                </router-link>
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
