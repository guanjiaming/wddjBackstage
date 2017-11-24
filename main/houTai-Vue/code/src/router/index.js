import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Main from '@/views/Main'
import Home from '@/views/home/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Main,
      redirect: '/Home',
      children:[
        { path: '/Home', component: Home},
      ]
    },
  ]
})
