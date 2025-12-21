const express = require('express');
const router = express.Router();
let products = [];

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
        id: products.length + 1,
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

module.exports = router;