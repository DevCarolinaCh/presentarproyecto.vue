<template>
    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Usuario</label>
          <input v-model="username" id="username" type="text" />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input v-model="password" id="password" type="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        if (this.username && this.password) {
          // Validar usuario y contraseña
          if (this.username === 'usuario' && this.password === 'contraseña') {
            this.$store.commit('setUser', this.username);
            this.$router.push('/home');
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        } else {
          alert('Por favor, complete todos los campos');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: 0 auto;
  }
  </style>
  