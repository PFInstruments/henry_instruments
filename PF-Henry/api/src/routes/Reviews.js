const express = require('express');
const router = express.Router();
const { postReview, getScore_Product, getAllReview_Product, deleteReview } = require('./controllers/Review');

router.post("/", async (req, res) => {
    const { image, name, score, comment, productId } = req.body;
    if (!image || !name || !score || !comment || !productId) {
        return res.status(404).send("Faltan datos por completar");
    }
    try {
        const newReview = await postReview(image, name, score, comment, productId);
        res.status(200).send(newReview);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get("/rating/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        if (productId) {
            const rating = await getScore_Product(productId);
            res.status(200).json(rating)
        } else throw Error("Error, Falta proporcionar la id del producto");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get("/:productId", async (req, res) => {
    try {
        const { productId } = req.params
        if (productId) {
            const reviews = await getAllReview_Product(productId);
            res.status(200).json(reviews)
        } else throw Error("Error, Falta proporcionar la id del producto");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await deleteReview(id);
        res.status(200).send(deleted);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;