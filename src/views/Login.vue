<template>
    <div class="display text-center">
        <mdb-card>
            <mdb-card-body>
                <div v-if="error" class="error">{{ error.message }}</div>
                <form @submit.prevent="pressed">
                    <p class="h4 text-center mb-4">Sign In</p>
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
import * as firebase from "firebase/app";
import "firebase/auth";
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';

    export default {
        name: "LoginPage",

        components: {
            mdbInput,
            mdbBtn,
            mdbCard,
            mdbCardBody
        },

        methods: {
            async pressed() {
                try {
                    const user = await firebase.auth().signInWithEmailAndPassword(
                        this.email,
                        this.password
                    )
                    console.log(user)
                    this.$router.replace({name: "Home"})
                }catch(err) {
                    console.log(err.message)
                }
            }
        },
        data() {
            return {
                email: "",
                password: "",
                error: ""
            }
        }
    }
</script>

<style scoped>
.error {
    color: red;
    font-size: 18px;
}

.display {
    margin: 2px auto;
    padding: 0 40rem;
}

</style>