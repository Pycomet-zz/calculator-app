<template>
    <div>
        Logged in
        <span v-if="loggedIn">Yes</span>
        <span v-else>No</span>
        <div>
            <button @click="signout">Sign Out</button>
        </div>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth"
    export default {
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

</style>