import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import store from '../store/index'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {  return originalPush.call(this, location).catch(err => err)}

Vue.use(VueRouter)
let router = new VueRouter({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/trade',
    children: [
      {
        path: 'trade',
        name: 'trade',
        component: () => import('../views/trade.vue'),
      }
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
]});

router.afterEach((to, form, next) => {

  window.scrollTo(0,0);
})

export default router
