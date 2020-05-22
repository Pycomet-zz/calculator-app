<template>
    <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
        <h1>Forget Password?</h1>
        <p>Please enter your email address below to receive a reset link for your password.</p>
        <hr>
        <div class="email">
            <input type="email" v-model="email" placeholder="email">
        </div>
        <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
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
input {
    width: 400px;
    padding: 30px;
    margin: 20px;
    font-size: 21px;
}

button {
    width: 400px;
    padding: 20px;
    height: 75px;
    font-size: 100%;
}
</style>