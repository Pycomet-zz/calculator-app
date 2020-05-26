<template>
    <div class="display text-center">
        <mdb-card>
            <mdb-card-body>
                <form @submit.prevent="pressed">
                    <p class="h4 text-center mb-4">Sign In</p>
                    <div v-if="error" class="error">{{ error }}</div>
                    <div class="grey-text text-left">
                        <mdb-input type="email" label="Your email" icon="envelope" v-model="email"/>
                        <mdb-input type="password" label="Your password" icon="lock" v-model="password"/>
                    </div>
                    
                    <div class="text-center">
                        <mdb-btn type="submit" color="secondary">Log In</mdb-btn>
                    </div>
                </form>
            </mdb-card-body>
            <router-link to="/reset_password">Reset Password</router-link>
        </mdb-card>
    </div>
</template>

<script>
const fb = require('../firebase.js');
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';

    export default {
        name: "LoginPage",
        
        data() {
            return {
                email: "",
                password: "",
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
                try {
                    const user = await fb.auth.signInWithEmailAndPassword(
                        this.email,
                        this.password
                    );
                    console.log(user);
                    this.$router.replace({name: "Home"});
                    
                }catch(err) {
                    this.email = "";
                    this.password = "";

                    this.error = err.message;
                    console.log(err.message)
                }
            }
        },
    }
</script>

<style scoped>

</style>