import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDXBS78g4AFSXlAL3YneRzxw9QNdF3DAIs",
  authDomain: "calculator-app-a427d.firebaseapp.com",
  databaseURL: "https://calculator-app-a427d.firebaseio.com",
  projectId: "calculator-app-a427d",
  storageBucket: "calculator-app-a427d.appspot.com",
  messagingSenderId: "1064653458586",
  appId: "1:1064653458586:web:5893431b6552a97590a323"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {

  console.log(user)

  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
      }).$mount('#app')
  }
})


