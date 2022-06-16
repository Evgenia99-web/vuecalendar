import authVue from '@/components/authVue.vue';
import registrationVue from '@/components/registrationVue.vue'
import forgotVue from '@/components/forgotVue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        { path: '/reg', name:registrationVue, component: registrationVue },
        { path: '/auth', name:authVue, component: authVue },
        { path: '/forgot', name:forgotVue, component: forgotVue}
    ]
})