import Vue from 'vue'
import Vuerouter from 'vue-router'
import Purchase from './views/purchase'

Vue.use(Vuerouter)
/* eslint-disable no-new */
const router = new Vuerouter({
  routes: [
    {
      path: '/',
      component: Purchase
    }
  ]
})

export default router
