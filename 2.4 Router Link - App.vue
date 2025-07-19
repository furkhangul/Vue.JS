<template>
  <nav>

    <!--Normal halinden farklı olarak to etiketinin başına : getirerek yani v-bind yapısı kullanılarak biz bu işlemi vue.js üzerinden de gerçekleştirebiliyoruz. Örnek olacak olursa:-->
    <router-link :to="{name:'home'}">Home</router-link> |
    <!--Veya path ile de bu ilemi gerçekleştirebiliriz.-->
    <router-link :to="{path:}">About</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
