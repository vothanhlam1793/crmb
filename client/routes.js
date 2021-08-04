import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Hello from '../imports/ui/components/Hello.vue'
import Info from '../imports/ui/components/Info.vue'

const routes = [
  {
    path: "/about",
    name: "Hello",
    component: Hello
  },
  {
    path: "/hobbies",
    name: 'Info',
    component: Info
  }
]

const router = new VueRouter({
  routes
})

export default router