
<template>
  <mdb-container>
    <mdb-navbar color="secondary" dark>
      <mdb-navbar-brand v-if="loggedIn" href="https://mdbootstrap.com/">
        Hello {{ showUsername }}
      </mdb-navbar-brand>
      <mdb-navbar-brand v-else href="https://mdbootstrap.com/">
        Welcome
      </mdb-navbar-brand>

      <mdb-navbar-toggler>
        <mdb-navbar-nav right class="text-left">
          <mdb-nav-item v-if="loggedIn" @click="signout"> |Log Out</mdb-nav-item>
          <mdb-nav-item to="/login" v-else> |Log In</mdb-nav-item>
          
          <mdb-nav-item to="/calculator" v-if="loggedIn"> |Calculator</mdb-nav-item>
          <mdb-nav-item to="/sign_up" v-else> |Register</mdb-nav-item>
        </mdb-navbar-nav>
        <form>
          <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </mdb-container>
</template>

<script>
const fb = require('../firebase.js');
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

        data() {
            return {
                loggedIn: false,
                db_names: fb.namesRef.orderByKey(),
                user: null,
            }
        },

        created() {
            fb.auth.onAuthStateChanged(user=> {
                this.loggedIn = !!user;

                if(this.loggedIn === true) {

                  this.db_names.once("value").then(function(snapshot) {
                    var read = snapshot.exportVal();

                    var data = Object.entries(read);

                    console.log(data[1][1]['uid']);

                    for(user of data) {
                      console.log(user[1]);
                      var uid = user[1]['uid'];
                      var user_id = fb.auth.currentUser.uid;
                      console.log(user_id)

                      if(uid === user_id) {
                        console.log(user[1]['name']);
                        this.user ==  String(user[1]['name']);
                        console.log(this.user)
                      }else {
                        console.log("Try")
                      }
                    }

                  })

                } else {
                  return console.log("Not Found")
                }

            })
        },


        methods: {
            async signout() {
                try {
                    const data = await fb.auth.signOut();
                    console.log(data);
                    this.$router.replace({name: "Login"})
                }catch(err) {
                    console.log(err)
                }     
            }
        },
        computed: {
          showUsername() {
            console.log(this.user);
            return this.user
          }
        }


        // computed: {
        //     activeUser() {
        //         // this.db_names.once("value").then(function(snapshot) {
        //         //     var read = snapshot.exportVal();

        //         //     console.log(read);
        //         //     return read

        //         //   // var hasId = snapshot.hasChild("uid");
        //         //   // console.log(hasId);

        //         //   // if(hasId === true) {
        //         //   //     var uid = snapshot.child("uid");
        //         //   //     var user_id = fb.auth.currentUser.uid;

        //         //   //     if(uid === user_id){
        //         //   //         var name = snapshot.child("name").val();
                          
        //         //   //     }
        //         //   // }

        //         //   // return name;
        //         // })





        //         this.db_names.once("value").then(function(snapshot) {
        //             snapshot.forEach(function(childSnapshot) {
        //               // var key = childSnapshot.key;

        //               var uid = childSnapshot.child("uid").val();
        //               console.log(uid + ' - ' + fb.auth.currentUser.uid);
                      
        //               // Check authenticated user for this uid
        //               if(uid === fb.auth.currentUser.uid) {
        //                 var name = childSnapshot.child("name").val();
        //                 console.log(name);
        //               }
                      
        //             });
        //             return name;
        //         })
        //     }
        // },
    }
</script>

<style scoped>
.navbar.navbar-1 .navbar-toggler-icon {
background-image: url('https://mdbootstrap.com/img/svg/hamburger6.svg?color=000');
}
</style>