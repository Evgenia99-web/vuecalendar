import Vue from 'vue'
import Router from 'vue-router'
import profileVue from '../components/profileVue.vue'
import Login from '../components/authVue.vue'
import Register from '../components/registrationVue.vue'
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
        component: profileVue
      },
    ]
  })

  router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })
  export default router