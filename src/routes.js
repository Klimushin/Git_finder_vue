// default
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404"

// Routing
export default new VueRouter({
    mode: 'history', //если нужно убрать # из линка
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
    ]
})
