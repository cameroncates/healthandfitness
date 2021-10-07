import { auth, db, storage } from '@/services/firebase.js'
import Cookie from 'js-cookie'

export const state = () => ({
    uid: null,
    user: null,
    notification: null
})

export const actions = {
}

export const mutations = {
    setUid(state, uid) {
        state.uid = uid
    },
    setUser(state, user) {
        state.user = user
    },
    setNotification(state, notification) {
        state.notification = notification
    }
}
export const getters = {
    getUid(state) {
        return state.uid
    },
    getUser(state) {
        return state.user
    },
    getNotification(state) {
        return state.notification
    }
}

