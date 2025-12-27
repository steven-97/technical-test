const express = require('express');
const cors = require('cors');
const app = express();
const productsRoutes = require('./routes/products.js');
const port = 3000;

app.use(cors());
app.use(express.json());

// Rutas para productos
app.use('/products', productsRoutes);

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});