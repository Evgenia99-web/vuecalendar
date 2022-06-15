import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import authVue from './components/authVue.vue';
import registrationVue from './components/registrationVue.vue'


createApp(App).mount('#app')


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

//     function yearsOut(){
//     var years = ''

//     for(let i = 1; i<=100; i++){
//         years += '<div class="year">'
//         years += '<a href="#addModal"><p class="year_count">'+i+'</p></a>'
//         years += '</div>'
//     }

//     ('.calendar_block').html(years)

// }

// yearsOut()