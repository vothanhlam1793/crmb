import { check } from 'meteor/check';
import { ContactsCollection } from '../collections/Contact'

Meteor.methods({
    'contacts.insert'(obj) {
        check (obj, Object);
        ContactsCollection.insert(obj);
    }
});