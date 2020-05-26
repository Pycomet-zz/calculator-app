<template>
    <div class="display text-center">
        <mdb-card>
            <mdb-card-body>
                
                <form @submit.prevent="pressed">
                    <h2>Forget Your Password?</h2>
                    <div v-if="error" class="error">{{ error }}</div>
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
const fb = require('../firebase.js');
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
                    await fb.auth.sendPasswordResetEmail(
                        this.email
                    );
                    window.alert("Your password reset link has been sent to " + this.email);

                    this.$router.replace({name: "Login"});
                }catch(err) {

                    this.email = "";

                    this.error = err.message;
                    window.alert(err.message)
                }
            }
        }
    }
</script>

<style scoped>

</style>