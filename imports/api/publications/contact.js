import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../collections/Contact';

Meteor.publish('contacts', function publishContacts() {
  return ContactsCollection.find({});
});