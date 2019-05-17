<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="top"></router-view>
    <router-view name="center"></router-view>
    <router-link to="photos">phtots</router-link>
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 5px;
}
#app>img {
  width: 50px;
  height: 50px;
  margin-left: 7%;

}
</style>
