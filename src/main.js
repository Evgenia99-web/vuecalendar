import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'

// import store from './store'
import Axios from 'axios'

createApp(App).mount('#app')

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


