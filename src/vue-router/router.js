import Vue from 'vue'
import VueRouter from 'vue-router'
import authVue from './components/authVue.vue';
import registrationVue from './components/registrationVue.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/reg', component: registrationVue },
    { path: '/auth', component: authVue }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router