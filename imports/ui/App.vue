<template>
  <div>
  <div class="alert alert-secondary">
    <router-link to="/">Main</router-link> |
    <router-link to="/404">Error</router-link> |
    <router-link to="/createContact">Contact</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
