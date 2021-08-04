<template>
  <div>
    <FormContact/>
    <Contact  v-for="contact in contacts"
      v-bind:contact="contact"
    />
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'
import Black from './components/Black.vue'
import FormContact from './components/contact/FormContact.vue'
import Contact from './components/contact/Contact.vue'

import {ContactsCollection} from '../api/collections/Contact'

export default {
  components: {
    Hello,
    Info,
    Black,
    FormContact,
    Contact
  },
  data() {
    return {

    }
  },
  meteor: {
    contacts() {
      return ContactsCollection.find({}).fetch();
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
