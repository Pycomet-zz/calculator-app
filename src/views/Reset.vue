<template>
    <div class="display text-center">
        <mdb-card>
            <mdb-card-body>
                <div v-if="error" class="error">{{ error.message }}</div>
                <form @submit.prevent="pressed">
                    <h1>Forget Password?</h1>
                    <p>Please enter your email address below to receive a reset link for your password.</p>
                    <hr>
                    <div class="email p-5">
                        <mdb-input type="email" v-model="email" label="Your Email"/>
                    </div>
                    <mdb-btn color="secondary" type="submit">Send Reset Link</mdb-btn>
                </form>
            </mdb-card-body>
        </mdb-card>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mdbCard, mdbCardBody, mdbBtn, mdbInput } from 'mdbvue';

    export default {
        name: "ResetPassword",

        components: {
            mdbCardBody,
            mdbCard,
            mdbInput,
            mdbBtn
        },
        data() {
            return {
                email: "",
                error: ""
            }
        },
        methods: {
            async pressed() {
                try {
                    await firebase.auth().sendPasswordResetEmail(
                        this.email
                    )
                    window.alert("Link Sent To" + this.email)
                }catch(err) {
                    window.alert(err.message)
                }
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