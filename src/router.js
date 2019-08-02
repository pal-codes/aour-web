import Vue from 'vue'
import Router from 'vue-router'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signup',
      component: Signup
    },
  ]
})
