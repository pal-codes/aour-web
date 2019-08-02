import Vue from 'vue'
import Router from 'vue-router'
import Signup from './views/Signup.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if( requiresAuth && !currentUser ) next ('login')
  else if( !requiresAuth && currentUser ) next ('dashboard')
  else next()
})

export default router