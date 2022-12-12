const express = require('express');
const router = express.Router();
const { postReview, getScore_Product, getAllReview_Product } = require('./controllers/Review');

router.post("/", async (req,res)=>{
    try {
        const { score, comment, productId, userId } = req.body
        if(score&&productId&&userId&&comment){
            const newReview = await postReview(score,comment,productId,userId);
            res.status(200).json(newReview);
        }else throw Error("Error, falta de datos para subir a la base de datos");
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get("/rating/:productId", async (req,res)=>{
    try {
        const { productId } = req.params;
        if(productId){
            const rating = await getScore_Product(productId);
            res.status(200).json(rating)
        }else throw Error("Error, Falta proporcionar la id del producto");
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.get("/:productId", async (req,res)=>{
    try {
        const { productId } = req.params
        if(productId){
            const reviews = await getAllReview_Product(productId);
            res.status(200).json(reviews)
        }else throw Error("Error, Falta proporcionar la id del producto");
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports=router;