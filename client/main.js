import Vue from 'vue'
import '../imports/ui/plugins'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Template
import App from '../imports/ui/App.vue'
import NotFound from '../imports/ui/NotFound.vue'
import ContactCreateForm from '../imports/ui/components/contact/FormContact.vue'

// Routing ...
FlowRouter.route('/', {
    name: 'index',
    action(){
        Meteor.startup(() => {
            new Vue({
                el: "#app",
                ...App
            })
        })    
    }
})

// Create contact
FlowRouter.route('/createContact', {
    name: 'index',
    action(){
        Meteor.startup(() => {
            new Vue({
                el: "#app",
                ...ContactCreateForm
            })
        })    
    }
})
// Create 404 route (catch-all)
FlowRouter.route('*', {
    action() {
        Meteor.startup(()=>{
            new Vue({
                el: "#app",
                ...NotFound
            })
        })
    }
});