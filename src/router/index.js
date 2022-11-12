import Vue from 'vue'
import VueRouter from 'vue-router'

//modules
import home from "@/router/modules/home";
import login from "@/router/modules/login";

Vue.use(VueRouter)

const routes = [
  ...home,
  ...login,
]

const router = new VueRouter({
  routes
})


//路由守卫
// router.beforeEach((to, from, next) => {
//
// })


export default router
