const express = require('express');
const router = express.Router();
const { getOrders_Products, getOrders_Users, getAllOrders, postOrder,putOrderState } = require('./controllers/Orders');


router.get("/",async (req,res)=>{
    try {
        const { productId, userId } = req.query;  

        if(userId){ // si se le da el nombre de un usuario traera todas las orders que tenga ese usuario
            const orders=await getOrders_Users(userId)
            if(!orders) throw Error("Error al buscar ordenes con usuarioID")
            res.status(200).json(orders);
        }else if(productId){ // si se le da el nombre de un producto traera todas las orders que tenga ese producto
            const orders=await getOrders_Products(productId)
            if(!orders) throw Error("Error al buscar ordenes con productId")
            res.status(200).json(orders);
        }else{  // trae todas las ordenes si no se le da un nombre de producto o usuario
            const orders=await getAllOrders();
            if(!orders) throw Error("Error al buscar ordenes")
            res.status(200).json(orders);
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.post("/",async (req,res)=>{
    try {
        const { totalAmount, state, userId, totalProducts }=req.body
        if(totalAmount&&userId&&totalProducts){
            const newOrder=await postOrder(totalAmount,state,userId,totalProducts);
            res.status(200).json(newOrder);
        }else throw Error("Faltan datos por introducir")
    } catch (error) {
        res.status(404).send(error.message)
    }
});

router.put("/:id",async (req,res)=>{
    const { id } = req.params;
    const { state } = req.body;
    try {
        const order = await putOrderState(id,state);
        res.status(200).json(order);
    } catch(error) {
        res.status(404).send(error.message);
    }
});

module.exports=router;