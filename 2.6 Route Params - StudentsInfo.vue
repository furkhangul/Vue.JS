    <template>
        <div>
            <h3>Öğrenci Bilgi Sayfası</h3>
            <p>Öğrenci ID'si: {{StudentId}}</p>
        </div>
    </template>
    <script>
    export default{
        name:"studentInfo",
        data(){
            return{

                //Burada Url den id bilgisini almak için kullanılıyor.
                //.../student/2 yaptığımız zaman 2 numaralı id'ye sahip kullanıcı sahneleniyor.
                //params urldeki değişken kısmını tanımlar.
                
                StudentId : this.$route.params.id
            }
        }
    }
    </script>
    <style>

    </style>
