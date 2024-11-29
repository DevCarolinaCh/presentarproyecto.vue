<template>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li v-if="isLoggedIn">Bienvenido, {{ user }}</li>
        <li v-else><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['isLoggedIn', 'getUser']),
      user() {
        return this.getUser;
      }
    }
  };
  </script>
  