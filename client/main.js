import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

import router from './routes'

Meteor.startup(() => {
  new Vue({
    router,
    render: (h)=>h(App)
  }).$mount("#app");
})
