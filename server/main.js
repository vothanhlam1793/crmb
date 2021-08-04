import '../imports/api/fixtures'
import '../imports/api/methods'
import '../imports/api/publications'

import '../imports/api/methods/methodContact'

import {ContactsCollection} from '../imports/api/collections/Contact'

// import { Meteor } from 'meteor/meteor';
// import Vue from 'vue';
// import { onPageLoad } from 'meteor/server-render';
// import { createRenderer } from 'vue-server-renderer';
// const renderer = createRenderer();

// onPageLoad(sink => {
//     console.log('onPageLoad');
//     const url = sink.request.url.path;
//     const app = new Vue({
//         data: {
//             url
//         },
//         template: `<div>The visited URL is: {{ url }}</div>`
//     });

//     renderer.renderToString(app, (err, html) => {
//         if (err) {
//             res.status(500).end('Internal Server Error');
//             return
//         }
//         console.log('html', html);
//         sink.renderIntoElementById('app', html);
//     })
// })