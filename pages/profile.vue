<template>
            <div class="row mx-0 px-0 justify-content-center">            
                <div class="col-md-6 mx-0 px-md-3 px-0 mt-0">
                    <form  @submit.prevent="update(form)" class="row mx-0 bg-white py-5 px-4 px-md-5 border-radius-10 shadow">
                        <div class="col-md-12 px-1 px-md-2">
                            <h4 class="text-center mb-4 pb-4 border-bottom">User Profile</h4>
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
                                {{ loading ? "Please wait..." : "Update Account" }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            loading: false,
            form: {
                fname: "loading...",
                lname: "loading...",
                email: "loading...",
                mobile_number: "loading...",
                age: "loading...",
                gender: null
            }
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid",
            user: "web/getUser"
        })
    },
    watch: {
        user(user) {
            this.form.fname = user.fname
            this.form.lname = user.lname
            this.form.email = user.email
            this.form.mobile_number = user.mobile_number
            this.form.gender = user.gender
            this.form.age = user.age
        }
    },
    methods: {
        async update(form) {
            try {
                this.loading = true
                await fb.usersCollection.doc(this.uid).set(form)
                this.loading = false
                alert("Profile Updated successfully")

            } catch (err) {
                alert(err.message)
                this.loading = false
            }
        }
    },
}
</script>

<style>

</style>