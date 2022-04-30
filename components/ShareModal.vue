<template>
    <div class="modal fade" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <section class="container">
                        <h6 class="text-primary">
                            Share your survey with others
                        </h6>
                        <p class="text-muted small font-weight-normal">We will sent a sharable link to the user once you enter the email address of user and sent them an invitation</p>
                    </section>                        
                    <form  @submit.prevent="sendInvitation(form)" class="row mx-0 ">
                        <div class="col-md-12 px-1 px-md-2 my-2">
                            <div class="input-group">
                                <input type="text" v-model="form.email" class="form-control custom--input text-sm" placeholder="Email Address" required>
                            </div>    
                        </div>
                        <div class="col-md-12 text-right px-0 my-4">
                            <button ref="close" type="button" class="btn btn-secondary d-none" data-dismiss="modal">Close</button>
                            <button :disabled="loading" class="btn btn--primary px-4 shadow rounded-pill">
                                {{ loading ? "Please wait..." : "Send Share Link" }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as fb from '@/services/firebase.js'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            form: {
                email: "ali@gmail.com"
            },
            loading: false
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid",
            notification: "web/getNotification"
        })
    },
    methods: {
        async sendInvitation(form) {  

            this.loading = true

  await this.$axios.post('/api/message', {
    email: form.email,
    notification: this.notification.title,
  })
    .then((res) => {
        console.log(res);
      // On clear le formulaire
        alert("Invitation Send Successfully")
        $(this.$refs.close).click()
    })
    .catch((err) => {
      console.log(err)
    })            
          
            this.loading = false
        }
    }
}
</script>

<style>

</style>