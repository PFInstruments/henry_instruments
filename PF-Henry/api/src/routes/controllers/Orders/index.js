const { Product, Users, Order } = require('../../../db');

const getOrders_Products=async(productName)=>{
    const orders=await Order.findAll({
        include: [
            {
                model: Product,
                where:{
                    name: productName
                }
            },
            {
                model: Users
            }
        ]
    });
    return orders
}

const getOrders_Users=async(userName)=>{
    const orders=await Order.findAll({
        include: [
            {
                model: Users,
                where: {
                    id: userName
                }
            },
            {
                model: Product
            }
        ]
    });
    return orders
}

const getAllOrders=async()=>{
    const orders=await Order.findAll({
        include: [
            {
                model: Product,
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