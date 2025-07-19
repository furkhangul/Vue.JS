    <template>
        <div>
            <h1>Öğrenciler</h1>
            <div v-for="std in students" :key="std.id">
                <!--
                Bi önceki konuda biz paramsı path ile çekebilmiştik. Bu sefer ise name formatı üzerinden çekmeye çalışcağız.-->
                <router-link :to="{name:'studentsInfo',params:{id:std.id}}">
                        İsim: {{ std.name }}
                </router-link>
            </div>
        </div>
    </template>
    <script>
import StudentInfo from './StudentInfo.vue';

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
