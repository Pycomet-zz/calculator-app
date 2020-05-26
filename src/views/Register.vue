<template>
    <div class="display text-center">
        <mdb-card>
            <mdb-card-body>
                
                <form @submit.prevent="pressed">
                    <p class="h4 text-center mb-4">Sign Up Form</p>
                    <div v-if="error" class="error">{{ error }}</div>
                    <div class="grey-text text-left">
                        <mdb-input type="text" label="Your name" icon="user" v-model="name"/>
                        <mdb-input type="email" label="Your email" icon="envelope" v-model="email"/>
                        <mdb-input type="password" label="Your password" icon="lock" v-model="password"/>
                        <mdb-input type="password" label="Confirm password" icon="exclamation-triangle" v-model="cpassword"/>
                    </div>
                    
                    <div class="text-center">
                        <mdb-btn type="submit" color="secondary">Register</mdb-btn>
                    </div>
                </form>
            </mdb-card-body>
        </mdb-card>
    </div>
</template>

<script>
const fb = require('../firebase.js');
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';

    export default {
        name: "Registration",

        data() {
            return {
                name: "",
                email: "",
                password: "",
                cpassword: "",
                error: ""
            }
        },


        
        components: {
            mdbInput,
            mdbBtn,
            mdbCard,
            mdbCardBody
        },

        methods: {
            async pressed() {
                if(this.password !== this.cpassword) {

                    this.error = "Password Does Not Match",
                    window.alert(this.error)

                }else {
                    try {
                        const user = await fb.auth.createUserWithEmailAndPassword(
                            this.email,
                            this.password
                        );
                        console.log(fb.auth.currentUser);
                        
                        // Add User Information To Database
                        await fb.namesRef.push({
                            uid: fb.auth.currentUser.uid,
                            name : this.name,
                            email : this.email,
                            edit : false
                        });

                        console.log(user);
                        this.$router.replace({name: "Home"});

                    }catch(err) {
                        this.name = "";
                        this.email = "";
                        this.password = "";
                        this.cpassword = "";

                        this.error = err.message
                    }
                }

            }
        },
    }
</script>

<style scoped>


</style>