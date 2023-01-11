const { Product, User, Order } = require("../../../db");

const getOrders_Products = async (productId) => {
    const orders = await Order.findAll({
        include: [
            {
                model: Product,
                where: {
                    id: productId,
                },
            },
            {
                model: User,
            },
        ],
    });
    return orders;
};

const getOrders_Users = async (userId) => {
    const orders = await Order.findOne({
        include: [
            {
                model: User,
                where: {
                    id: userId,
                },
            },
            {
                model: Product,
            },
        ],
    });
    return orders;
};

const getAllOrders = async () => {
    const orders = await Order.findAll({
        include: [
            {
                model: Product,
            },
            {
                model: User,
            },
        ],
    });
    return orders;
};

const postOrder = async (totalAmount, state="Pending", userId, totalProducts) => {
    const newOrder = await Order.create({ totalAmount, state, totalProducts });
    let productsId = totalProducts.map(prod => prod.id);
    await newOrder.addProducts(productsId);
    // for(let i = 0; i < totalProducts.length; i++){
    //     await newOrder.addProduct(totalProducts[i].id);
    // }
    await newOrder.setUser(userId);
    return newOrder;
};

const putOrderState = async (id, state) => {
    if(!id || !state) throw new Error("insufficient arguments");
    await Order.update({
        state
    },{
        where: { id }
    });
    const order = await Order.findOne({
        where: {id},
        include: [
            {
                model: User,
            },
            {
                model: Product,
            },
        ],
    });
    return order;
};

module.exports = {
    getOrders_Products,
    getOrders_Users,
    getAllOrders,
    postOrder,
    putOrderState,
};
