<template>
    <div class="display text-center">
        <mdb-card>
            <mdb-card-body>
                <div v-if="error" class="error">{{ error.message }}</div>
                <form @submit.prevent="pressed">
                    <p class="h4 text-center mb-4">Sign Up Form</p>
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
import * as firebase from "firebase/app";
import "firebase/auth";
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
                        const user = await firebase.auth().createUserWithEmailAndPassword(
                            this.email,
                            this.password
                        );

                        console.log(user);
                        this.$router.replace({name: "Home"});

                    }catch(err) {
                        this.error = err.message
                    }
                }

            }
        },
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