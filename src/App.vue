<template>
  <div id="app">
    <top-header></top-header>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
import TopHeader from '@/components/Top-Header.vue';

  export default {
    components: {
      'top-header': TopHeader
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aa3f50;
}

#nav {
  padding: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
