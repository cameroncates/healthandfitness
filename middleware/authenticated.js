export default function({store, route, redirect }) {
    const user = store.state.web.uid
    // const blockedRoute = /\/signup\/*/g
    const blockRoutes = ["/", "/register", "/login"]
    const unblockRoutes = ["/dashboard"]
    if(user) {
        for(let i=0; i<blockRoutes.length; i++) {
            route.path == blockRoutes[i] ? redirect("/dashboard") : ""
        }    
    } else {
        for(let i=0; i<unblockRoutes.length; i++) {
            route.path == unblockRoutes[i] ? redirect("/") : ""
        }
    }
}