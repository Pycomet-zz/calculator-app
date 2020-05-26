<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome To Codefred's Vue Calculator App"/>
    <div class="text-center">
        <mdb-btn color="secondary">
          <router-link :style="linkObject" to="/calculator">Open Calculator</router-link>
        </mdb-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mdbBtn } from 'mdbvue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    mdbBtn
  },

  data() {
    return {
      linkObject: {
        color: 'white',
      }
    }
  },
}
</script>
