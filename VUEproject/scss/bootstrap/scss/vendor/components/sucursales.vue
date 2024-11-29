<template>
    <div>
      <h1>Nuestras Sucursales</h1>
      <ul>
        <li v-for="sucursal in sucursales" :key="sucursal.id">
          {{ sucursal.nombre }} - {{ sucursal.direccion }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sucursales',
    data() {
      return {
        sucursales: [
          { id: 1, nombre: 'Sucursal Centro', direccion: 'Calle AVvenida Corrientes 1908, Caba' },
          { id: 2, nombre: 'Sucursal Norte', direccion: 'Avenida Principal 456, ciudad de Neuquén, pcia de  Neuquén' },
          { id: 3, nombre: 'Sucursal Centro', direccion: 'Avenida Las Pampas 256, ciudad de Oberá, pcia de Misiones' },
          { id: 4, nombre: 'Sucursal Norte', direccion: 'Avenida Las Lucilas 1856, ciudad de Cordoba, pcia de Cordoba' },
          { id: 5, nombre: 'Sucursal Sur', direccion: 'Castelar 56,ciudad de Ushuaia, pcia de Tierra del Fuego' },
          { id: 6, nombre: 'Sucursal Este', direccion: 'Bartolome Mitre 3556,ciudad de Rosario, pcia de Santa Fe' },
       
        ]
        
      }
    }
  }
  </script>
  <template>
    <div>
      <h1>Nuestras Sucursales</h1>
      <ul v-if="sucursales">
        <li v-for="sucursal in sucursales" :key="sucursal.id">
          {{ sucursal.nombre }} - {{ sucursal.direccion }}
        </li>
      </ul>
      <p v-else>Cargando sucursales...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Sucursales',
    data() {
      return {
        sucursales: null
      }
    },
    mounted() {
      axios.get('http://localhost:3000/sucursales')
        .then(response => {
          this.sucursales = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  </script>
  <template>
    <div>
      <h1>Nuestras Sucursales</h1>
      <ul>
        <li v-for="sucursal in sucursalesFiltradas" :key="sucursal.id">
          {{ sucursal.nombre }} - {{ sucursal.direccion }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Sucursales',
    data() {
      return {
        sucursales: null,
        provinciasFiltradas: ['Buenos Aires', 'Neuquén', 'Tierra del Fuego', 'Córdoba', 'Misiones', 'Santa Fe']
      }
    },
    computed: {
      sucursalesFiltradas() {
        if (!this.sucursales) return [];
        return this.sucursales.filter(sucursal => {
          const provincia = sucursal.direccion.split(',')[1].trim();
          return this.provinciasFiltradas.includes(provincia);
        });
      }
    },
    mounted() {
        'http://localhost:3000/sucursales'
    }
  }
  </script>