<template>
    <div>
        <ul v-if="user && user.notification && !loading" class="list-group">
            <li @click="notification.read = true, $router.push(notification.url), updateNotification(user)" class="list-group-item p-0 cursor-pointer" v-for="(notification, i) in user.notification" :key="i">
                <div                
                    :class="!notification.read ? 'active' : ''"  
                    class="d-flex px-4 py-3">
                    <div class="round-circle">
                        <span class="initials">{{ notification.user.fname[0] + notification.user.lname[0] }}</span>
                    </div>         
                    <div class="py-2 px-3">
                        <p class="mb-0 pb-0" v-html="notification.title"></p>
                        <p class="small text-primary font-weight-bold"><i>{{ notification.datetime }}</i></p>
                    </div>           
                </div>
            </li>
        </ul>        
        <p v-else-if="loading" class="text-center p-5">
            Loading notifications...
        </p>
        <p v-else class="text-center p-5">
            No notification Found!
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as fb from '@/services/firebase.js'
export default {
    data() {
        return {
            loading: true
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
            this.loading = false
            console.log(this.loading, "loaded")
        }
    },
    methods: {
        async updateNotification(data) {
            await fb.db.collection("users").doc(this.uid).set(data)
        }        
    }
}
</script>

<style>
/* http://caniuse.com/#search=variables */
:root {
  --avatar-size: 3rem;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.round-circle {
  background-color: #ccc;
  border-radius: 50%;
  height: var(--avatar-size);
  text-align: center;
  width: var(--avatar-size);
}

.initials {
  font-size: calc(var(--avatar-size) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(var(--avatar-size) / 4); /* 25% of parent */
}




</style>