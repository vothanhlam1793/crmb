<template>
  <div>
    <Contact  v-for="contact in contacts"
      v-bind:contact="contact"
    />
  </div>
</template>

<script>
import Contact from './components/contact/Contact.vue'

import {ContactsCollection} from '../api/collections/Contact'

export default {
  components: {
    Contact
  },
  data() {
    return {

    }
  },
  meteor: {
    $subscribe:{
      'contacts': []
    },
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
