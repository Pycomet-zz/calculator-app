
<template>
  <mdb-container>
    <mdb-navbar color="secondary" dark>
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        Menu
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right class="text-left">
          <mdb-nav-item v-if="loggedIn" @click="signout"> > Log Out</mdb-nav-item>
          <mdb-nav-item to="/login" v-else> > Log In</mdb-nav-item>
          
          <mdb-nav-item to="/calculator" v-if="loggedIn"> > Calculator</mdb-nav-item>
          <mdb-nav-item to="/sign_up" v-else> > Register</mdb-nav-item>
        </mdb-navbar-nav>
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </mdb-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbNavbarBrand } from 'mdbvue';

    export default {
        components: {
            mdbNavbar,
            mdbNavItem,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbContainer,
            mdbNavbarBrand,
        },
        created() {
            firebase.auth().onAuthStateChanged(user=> {
                this.loggedIn = !!user;
                // if(user) {
                //     this.loggedIn = true;
                // } else {
                //     this.loggedIn = false
                // }
            })
        },
        data() {
            return {
                loggedIn: false
            }
        },
        methods: {
            async signout() {
                try {
                    const data = await firebase.auth().signOut();
                    console.log(data);
                    this.$router.replace({name: "Login"})
                }catch(err) {
                    console.log(err)
                }     
            }
        }
    }
</script>

<style scoped>
.navbar.navbar-1 .navbar-toggler-icon {
background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');
}
</style>