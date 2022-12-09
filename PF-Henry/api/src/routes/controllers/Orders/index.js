const { Products, Users, Order } = require('../../../db');

const getOrders_Products=async(productId)=>{
    const orders=await Order.findAll({
        include: [
            {
                model: Products,
                where:{
                    id: productId
                }
            },
            {
                model: Users
            }
        ]
    });
    return orders
}

const getOrders_Users=async(userId)=>{
    const orders=await Order.findOne({
        include: [
            {
                model: Users,
                where: {
                    id: userId
                }
            },
            {
                model: Products
            }
        ]
    });
    return orders
}

const getAllOrders=async()=>{
    const orders = await Order.findAll({
        include: [
            {
                model: Products,
            },
            {
                model: Users
            }
        ]
    });
    return orders
}

const postOrder=async(totalAmount,state,productId,userId)=>{
    const newOrder=await Order.create({totalAmount,state});
    await newOrder.setProducts(productId);
    await newOrder.setUser(userId);
    return newOrder
}

module.exports = {
    getOrders_Products,
    getOrders_Users,
    getAllOrders,
    postOrder
}