import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import MainBoard from "../imports/ui/MainBoard.vue"
import NotFound from '../imports/ui/NotFound.vue'
import FormContact from '../imports/ui/components/contact/FormContact.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "main",
        component: MainBoard
    },
    { 
        path: '/404', 
        name: 'dashboard', 
        component: NotFound
    },
    { 
        path: '/createContact', 
        name: 'generate', 
        component: FormContact 
    },
]

const router = new VueRouter({
//   mode: 'history',
  routes,
})

export default router