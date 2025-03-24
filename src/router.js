import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'hash',  // ✅ Changed from 'history' to 'hash'
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: '404 - Not Found',
      path: '*',  // ✅ Use '*' instead of '**'
      component: NotFound,
    },
  ],
})
