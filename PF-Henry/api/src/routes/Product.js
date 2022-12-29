const express = require('express');
const router = express.Router();
const controller = require('./controllers/Product');

router.get('/', async (req, res) => {
    try {
        const products = await controller.listProducts();
        res.status(200).send(products);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await controller.product(id);
        res.status(200).send(product);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/', async (req, res) => {
    const { name, image, description, price, stock, category, trademark, model } = req.body;
    if (!name || !image || !description || !price || !stock || !category || !trademark || !model) {
        return res.status(404).send('faltan datos por completar');
    }
    try {
        const createProduct = await controller.createProduct(name, image, description, price, stock, category, trademark, model);
        res.status(200).send(createProduct);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, image, description, price, stock, category, trademark, model } = req.body;
    let update = {
        id,
        name,
        image,
        description,
        price,
        stock,
        category,
        trademark,
        model
    }
    try {
        let change = await controller.updateProduct(update);
        res.status(200).send(change);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await controller.deleteProduct(id);
        res.status(200).send(deleted);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post('/bulkcreate', async (req, res) => {
    try {
        res.status(201).send(await controller.createMultipleProducts());
    } catch (err) {
        res.status(404).send(err.message);
    }
});

module.exports = router;