import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import('@v/Index.vue')
  },
  {
    path: '/page1',
    name: 'Index',
    component: () =>
      import('@v/Index.vue')
  },
  {
    path: '/page2',
    name: 'Index',
    component: () =>
      import('@v/Index.vue')
  },
  {
    path: '/page3',
    name: 'Index',
    component: () =>
      import('@v/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
