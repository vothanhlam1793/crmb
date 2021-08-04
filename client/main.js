import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue'

// import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Meteor.startup(() => {
  new Vue({
    el: "#app",
    ...App
  })
})
