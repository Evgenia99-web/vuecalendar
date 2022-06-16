import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/authVue.vue";
import Register from "./components/registrationVue.vue";
// lazy-loaded
const profile = () => import("./components/profileVue.vue")
const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: profile,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;