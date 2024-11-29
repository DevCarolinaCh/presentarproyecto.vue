// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const sucursales = [
    { id: 1, nombre: 'Sucursal Centro', direccion: 'Calle AVvenida Corrientes 1908, Caba' },
    // ... resto de las sucursales
];

app.get('/sucursales', (req, res) => {
    res.json(sucursales);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});