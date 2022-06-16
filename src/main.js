import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import authVue from '@/components/authVue.vue';
import registrationVue from '@/components/registrationVue.vue'
import forgotVue from '@/components/forgotVue'
import Vue from 'vue'
import Router from 'vue-router'



createApp(App)
     .use(router)
     .use(store)
.mount('#app')

Vue.use(Router)
export default new Router({
    routes: [
        { path: '/reg', name:registrationVue, component: registrationVue },
        { path: '/auth', name:authVue, component: authVue },
        { path: '/forgot', name:forgotVue, component: forgotVue}
    ]
})


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