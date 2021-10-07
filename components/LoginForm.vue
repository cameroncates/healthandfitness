<template>
            <div class="row mx-0 px-0 justify-content-center">            
                <div class="col-md-6 mx-0 px-md-3 px-0 mt-0">
                    <form  @submit.prevent="login(form)"  class="row mx-0 bg-white py-5 px-4 px-md-5 border-radius-10 shadow">
                        <div class="col-md-12 px-1 px-md-2">
                            <h4 class="text-center mb-4 pb-4 border-bottom">Login To Continue!</h4>
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.email" type="email" class="form-control custom--input" placeholder="Email" required>
                            </div>    
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.password" 
                                    :type="showPassword ? 'text' : 'password'" class="form-control custom--input" placeholder="Password" required  style="border-right: 0px">
                                <div class="input-group-append">
                                    <span 
                                        @click="showPassword = !showPassword"
                                        :class="showPassword ? 'text-primary' : 'text-dark'"
                                        class="input-group-text cursor-pointer border-right bg-transparent mdi mdi-eye"></span>
                                </div>                                
                            </div>    
                        </div>
                        <div class="col-md-12 my-4">
                            <button :disabled="loading" type="submit" class="btn btn--primary px-5 py-1 font-weight-bold rounded-pill">
                                {{ loading ? "Please wait..." : "Login" }}
                            </button>
                        </div>
                        <div class="col-md-12 px-0 px-md-2 my-0">
                            <div class="py-0 my-0">
                                <a href="/resetpassword" class="btn px-0 py-0 my-4 text-primary font-weight-bold"> Forgot password?</a>
                            </div>
                            <span class="font-weight-normal">Not Registered?</span> <a href="/register" class="btn px-0 text-danger font-weight-bold"> Create an Account</a>
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
            showPassword: false,
            loading: false,
            form: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        ...mapMutations({
            setUid: "web/setUid"
        }),

        async login(form) {
            try {
                this.loading = true
                await fb.auth.signInWithEmailAndPassword(form.email, form.password)
                const token = await fb.auth.currentUser.getIdToken()
                await Cookie.set('access_token', token)    
                this.setUid(fb.auth.currentUser.uid)
                this.loading = false
                setTimeout(() => {
                    this.$router.push("/dashboard")                
                }, 199)
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