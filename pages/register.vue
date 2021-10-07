<template>
            <div class="row mx-0 px-0 justify-content-center">            
                <div class="col-md-6 mx-0 px-md-3 px-0 mt-0">
                    <form  @submit.prevent="register(form)" class="row mx-0 bg-white py-5 px-4 px-md-5 border-radius-10 shadow">
                        <div class="col-md-12 px-1 px-md-2">
                            <h4 class="text-center mb-4 pb-4 border-bottom">Register a Free Account</h4>
                        </div>
                        <div class="col-md-6 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.fname" type="text" class="form-control custom--input" placeholder="First Name" required>
                            </div>    
                        </div>
                        <div class="col-md-6 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.lname" type="text" class="form-control custom--input" placeholder="Last Name" required>
                            </div>    
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.email" type="email" class="form-control custom--input" placeholder="Email" required>
                            </div>    
                        </div>
                        <div class="col-md-6 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.password" 
                                    :type="showPassword ? 'text' : 'password'" class="form-control custom--input" placeholder="Password" required style="border-right: 0px">
                                <div class="input-group-append">
                                    <span 
                                        @click="showPassword = !showPassword"
                                        :class="showPassword ? 'text-primary' : 'text-dark'"
                                        class="input-group-text cursor-pointer border-right bg-transparent mdi mdi-eye"></span>
                                </div>                                      
                            </div>    
                        </div>
                        <div class="col-md-6 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.confirm_password" 
                                    :type="showPassword ? 'text' : 'password'" class="form-control custom--input" placeholder="Confirm Password" required style="border-right: 0px">
                                <div class="input-group-append">
                                    <span 
                                        @click="showPassword = !showPassword"
                                        :class="showPassword ? 'text-primary' : 'text-dark'"
                                        class="input-group-text cursor-pointer border-right bg-transparent mdi mdi-eye"></span>
                                </div>                                      
                            </div>    
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.mobile_number" type="text" class="form-control custom--input" placeholder="Mobile Number" required>
                            </div>    
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input v-model="form.age" type="number" class="form-control custom--input" placeholder="Age" required>
                            </div>    
                        </div>
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="form-group">
                                <select v-model="form.gender" class="form-control custom--input" id="exampleFormControlSelect1" required>
                                  <option selected disabled>Select Gender</option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                            </div>                                
                        </div>       
                        <div class="col-md-12 text-center my-4">
                            <button :disabled="loading" class="btn btn--primary px-5 py-1 font-weight-bold rounded-pill">
                                {{ loading ? "Please wait..." : "Create Account" }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
export default {
    data() {
        return {
            showPassword: false,
            loading: false,
            form: {
                fname: null,
                lname: null,
                email: null,
                password: null,
                confirm_password: null,
                mobile_number: null,
                age: null,
                gender: null
            }
        }
    },
    methods: {
        async register(form) {
            if (form.password != form.confirm_password) {
                alert("Password do not matched")
                return
            }
            // sign user up
            try {
                this.loading = true
                const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
                await fb.usersCollection.doc(user.uid).set({
                    fname: form.fname,
                    lname: form.lname,
                    email: form.email,
                    mobile_number: form.mobile_number,
                    age: form.age,
                    gender: form.gender
                })
                this.loading = false
                this.$router.push("/")

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