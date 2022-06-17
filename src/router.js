import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import profileVue from './components/profileVue.vue'
import Login from './components/authVue.vue'
import Register from './components/registrationVue.vue'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/profileVue',
        name: 'profileVue',
        component: profileVue,
        meta: { 
          requiresAuth: true
        }
      },
    ]
  })

  router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
        return
      }
      next('/login') 
    } else {
      next() 
    }
  })
  export default router