import Vue from 'vue'
import '../imports/ui/plugins'
// import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import router from './routes'
// Template
import App from '../imports/ui/App.vue'
import NotFound from '../imports/ui/NotFound.vue'
import ContactCreateForm from '../imports/ui/components/contact/FormContact.vue'

Meteor.startup(() => {
    new Vue({
        router,
        render: (h) => h(App),
      }).$mount('#app');
})
  