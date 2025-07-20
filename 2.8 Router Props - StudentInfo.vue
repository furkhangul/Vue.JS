    <template>
        <div>
            <h3>Öğrenci Bilgi Sayfası</h3>
            <p>Öğrenci ID'si: {{StudentId}}</p>
        </div>
    </template>
    <script>
    export default{
        name:"studentInfo",
        props:["StudentId"]
    }

    //Propslar, properties kelimesinin kısaltması yani özellktir. Bir üst bileşenden alt bileşene veri aktarmak için kullanılır.

    //Bir bileşeni daha esnek, yeniden kullanılabilir ve dinamik hale getirir.
    //Vue bileşenleri arası iletişim sağlar.
    //Parents -> child yönünde
    </script>
    <style>

    </style>
