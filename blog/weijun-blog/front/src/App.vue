<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-default{
  color: #515a6e;
}
.margin15{
    margin: 15px 0;
}
.margin-left-30{
    margin-left: 30px;
}
.content-style{
    padding: 0 100px;
}
@media screen and (max-width:980px){
    .content-style{
        padding: 0 20px;
    }
}
</style>
