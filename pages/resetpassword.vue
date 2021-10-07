<template>
            <div class="row mx-0 px-0 justify-content-center">            
                <div class="col-md-6 mx-0 px-md-3 px-0 mt-0">
                    <form  @submit.prevent="resetPassword(form)"  class="row mx-0 bg-white py-5 px-4 px-md-5 border-radius-10 shadow">
                        <div class="col-md-12 px-1 px-md-2">
                            <h4 class="text-center mb-4 pb-4">Please enter the email address associated with your account</h4>
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.email" type="email" class="form-control custom--input" placeholder="Email" required>
                            </div>    
                        </div>
                        <div class="col-md-12 my-4 text-center">
                            <button :disabled="loading" type="submit" class="btn btn--primary px-5 py-1 font-weight-bold rounded-pill">
                                {{ loading ? "Please wait..." : "Send Password Reset Email" }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import Cookie from 'js-cookie'
import { mapAction, mapMutations } from 'vuex'
export default {
    data() {
        return {
            loading: false,
            form: {
                email: null
            }
        }
    },
    methods: {
        ...mapMutations({
            setUid: "web/setUid"
        }),

        async resetPassword(form) {
            try {
                this.loading = true
                fb.auth.sendPasswordResetEmail(form.email)
                .then(() => {
                    this.loading = false
                    // ..
                })
                .catch((error) => {
                    console.log(error, "error")
                    // ..
                });                
            } catch (err) {
                alert(err.message)
                this.loading = false
            }
        }
    }
}
</script>

<style>

</style>