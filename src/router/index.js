import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/hello',
      component: HelloWorld
    }
  ],
  mode: 'history'
})