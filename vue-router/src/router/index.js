import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import Event from '../views/EventChange.vue'
import DataBindingList from '../views/DataBindingList2.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    // component: () => import(/* webpackChunkName: "about" */ DataBinding)
    component:DataBinding
  },
  {
    path: '/eventchange',
    name: 'EventChange',
    // component: () => import(/* webpackChunkName: "about" */ DataBinding)
    component:Event
  },
  {
    path: '/databindingList',
    name: 'DataBindingList',
    // component: () => import(/* webpackChunkName: "about" */ DataBinding)
    component:DataBindingList
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
