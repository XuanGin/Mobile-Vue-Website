import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import homepage from '../views/index'
import myForm from '../views/myForm'
import witcherPage from '../views/witcher3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: homepage
    },
    {
      path: '/myForm', component: myForm
    },
    {
      path: '/witcherPage', component: witcherPage
    }
  ]
})
