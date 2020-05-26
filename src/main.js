import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { rtdbPlugin } from 'vuefire'


// import { auth } from './firebase'
const fb = require('./firebase.js')

Vue.use(rtdbPlugin);
Vue.config.productionTip = false;


// Handling page reloads
let app;
fb.auth.onAuthStateChanged(user => {

  console.log(user)

  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
      }).$mount('#app')
  }
})


