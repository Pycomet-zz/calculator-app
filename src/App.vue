<template>
  <div id="app">
    <top-header></top-header>
    <div id="nav">
      <router-link to="/sign_up">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/">Home</router-link>
    </div>
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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
