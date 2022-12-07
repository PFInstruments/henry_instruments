const express = require('express');
const router = express.Router();
const { getOrders_Products, getOrders_Users, getAllOrders, postOrder } = require('./controllers/Orders');


router.get("/",async (req,res)=>{
    try {
        const { productoName, userName } = req.params;  
        if(productoName&&!userName){       // si se le da el nombre de un producto traera todas las orders que tenga ese producto
            const orders=await getOrders_Products(productoName)
            if(!orders) throw Error("Error al buscar ordenes con productoName")
            res.status(200).json(orders)
        }else if(!productoName&&userName){    // si se le da el nombre de un usuario traera todas las orders que tenga ese usuario
            const orders=await getOrders_Users(userName)
            if(!orders) throw Error("Error al buscar ordenes con usuarioID")
            res.status(200).json(orders);
        }else if(!productoName&&!userName){     // trae todas las ordenes si no se le da un nombre de producto o usuario
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
        const { totalAmount, state, productId, userId }=req.body
        if(totalAmount&&state&&productId&&userId){
            const newOrder=await postOrder(totalAmount,state,productId,userId);
            res.status(200).json(newOrder);
        }else throw Error("Faltan datos por introducir")
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

module.exports=router;