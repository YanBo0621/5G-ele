import Vue from 'vue'
import Router from 'vue-router'
// import axios from "axios"
import Application from '@/components/Application'
import User from '@/components/User'


import geren from '@/components/User/geren'
import yeji from '@/components/User/yeji'
import zonglan from '@/components/User/zonglan'
import tixian from '@/components/User/tixian'

Vue.use(Router)
// Vue.use(axios)

export default new Router({
  mode: 'history' ,
  routes: [
    {
      path: '/application',
      name: 'Application',
      component: Application
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children:[
          { path: '/geren',name:'geren', component: geren},
          { path: '/yeji',name:'yeji', component: yeji},
          { path: '/zonglan',name:'zonglan', component: zonglan},
          { path: '/tixian',name:'tixian', component: tixian},
      ]
    }
  ]
})
