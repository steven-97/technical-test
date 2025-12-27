const express = require('express');
const router = express.Router();
let products = [];
let currentId = 1;

// GET /products - Get all products
router.get('/', (req, res) => {
    res.status(200).json(products);
});

// GET /products/:id - Get product by id
router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = products.find(p => p.id === id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto' });
    }
});


// POST /products - Create product
router.post('/', (req, res) => {
    const { name, descr, price } = req.body;
    const newProduct = {
        id: currentId++,
        name,
        descr,
        price,
        creationDate: new Date()
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

/**
 * Were missing some routes here...
 */
// PUT /products/:id - Update product
router.put('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, descr, price } = req.body;

        const product = products.find(p => p.id === id);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        if (!name || !descr || !price) {
            return res.status(400).json({ message: 'Datos incompletos' });
        }

        product.name = name;
        product.descr = descr;
        product.price = price;

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
});

//DELETE /products/:id – Delete product
router.delete('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = products.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        products.splice(index, 1);
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
});

module.exports = router;