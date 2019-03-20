import Vue from 'vue'
import Router from 'vue-router'
import Titles from '@/pages/Titles'
import Table from '@/pages/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/titles',
      name: 'titles',
      component: Titles
    }
  ],
  mode: 'history'
})
