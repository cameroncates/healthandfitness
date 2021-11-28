<template>
    <!-- NAVIGATION -->
    <nav id="header-desktop" class="container-fluid py-2 bg-light mb-5 shadow d-lg-block d-none my-0 position-relative">
        <div class="container">
            <div class="row mx-0 justify-content-between align-items-center">
                <div arial-label="left">
                    <a rel="nofollow" :href="uid ? '/dashboard' : '/'"><img :src="logo" width="200px" alt=""></a>
                     
                </div>
                <div arial-label="right">                   
                    <a rel="nofollow" :href="menu_item.href" v-for="(menu_item, i) in uid ? auth_menu : menu" :key="i" class="btn font-weight-bold btn--hover--primary ml-2">
                        {{ menu_item.name }}
                    </a>
                    <div class="dropdown d-inline-block position-relative">
                        <button class="btn position-relative" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mdi mdi-bell text-dark mdi-36px"></span>
                            <span v-if="user && user.notification && user.notification.filter(n => !n.read).length > 0" class="bg-danger text-white px-2 font-weight-bold py-1 small position-absolute" style="border-radius:50%;right:0px;">
                                {{ user.notification.filter(n => !n.read).length }}
                            </span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style="min-width:300px; max-height:500px; overflow: auto">
                            <ul v-if="user && user.notification && user.notification.filter(n => !n.read).length > 0 && !loading" class="list-group">
                                <li @click="notification.read = true, $router.push(notification.url), updateNotification(user)" class="list-group-item border-0 p-0" v-for="(notification, i) in user.notification.filter(n => !n.read)" :key="i">
                                    <div
                                        :class="!notification.read ? 'active' : ''" 
                                        class="d-flex w-100 border-bottom px-3 py-3 transition mb-1 cursor-pointer">
                                        <div class="round-circle flex-shrink-0">
                                            <span class="initials">{{ notification.user.fname[0] + notification.user.lname[0] }}</span>
                                        </div>         
                                        <div class="px-3">
                                            <p class="small pb-1 mb-0" v-html="notification.title"></p>
                                            <p class="small text-primary font-weight-bold"><i>{{ notification.datetime }}</i></p>
                                        </div>           
                                    </div>
                                </li>
                                <li class="list-group-item border-0 p-2 text-center">
                                    <a href="/notifications" class="small">View all</a>
                                </li>
                            </ul>        
                            <p v-else-if="loading" class="text-center small p-5">
                                Loading notifications...
                            </p>
                            <p v-else class="text-center small p-5">
                                No New notification Found!
                                <br>
                                <a v-if="user && user.notification && user.notification.length > 0" href="/notifications" class="small">view old notification</a>
                            </p>                            
                        </div>
                    </div>     
                </div>            
            </div>    
        </div>
    </nav>
    <!-- NAVIGATION -->
</template>

<script>
import logo from "@/assets/images/LOGO.png"
import { mapActions, mapGetters, mapMutations } from 'vuex'
import * as fb from '@/services/firebase.js'
export default {
    data() {
        return {
            read: false,
            loading: true,
            logo,
            auth_menu: [
                { name: "Dashboard", href: "/dashboard" },
                { name: "Results", href: "/results" },
                { name: "Profile", href: "/profile" },
                { name: "Logout", href: "/logout" },
            ],
            menu: [
                { name: "Signup", href: "/register" },
                { name: "Login", href: "/" }
            ]
        }
    },
    computed: {
        ...mapGetters({
            uid: "web/getUid",
            user: "web/getUser"
        })
    },
    methods: {
        ...mapMutations({
            setUser: "web/setUser"
        }),
        async updateNotification(data) {
            await fb.db.collection("users").doc(this.uid).set(data)
        }
    },
    watch: {
        user(user) {
            this.loading = false
        }
    },    
    async mounted() {
        if (this.uid) {
            let ref = await fb.db.collection("users").doc(this.uid)
            const doc = await ref.get()
            if (doc.exists) {
                this.setUser(doc.data())
            }                    
        }
    }
}
</script>

<style>
/* http://caniuse.com/#search=variables */
:root {
  --avatar-size: 2.5rem;
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
