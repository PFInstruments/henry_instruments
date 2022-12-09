const express = require('express');
const router = express.Router();
const { postReview, getAllReview_Product } = require('./controllers/Review');

router.post("/", async (req,res)=>{
    try {
        const { score, productId, userId } = req.body
        if(score&&productId&&userId){
            const newReview = await postReview(score,productId,userId);
            res.status(200).json(newReview);
        }else throw Error("Error, falta de datos para subir a la base de datos");
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get("/:productId", async (req,res)=>{
    try {
        const { productId } = req.params;
        if(productId){
            const rating = await getAllReview_Product(productId);
            res.status(200).json(rating)
        }else throw Error("Error, Falta proporcionar la id del producto");
    } catch (error) {
        console.log(error.message)
        res.status(404).send(error.message)
    }
})

module.exports=router;