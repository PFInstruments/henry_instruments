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

const postOrder = async (totalAmount, state, productId, userId) => {
    const newOrder = await Order.create({ totalAmount, state });
    await newOrder.setProducts(productId);
    await newOrder.setUser(userId);
    return newOrder;
};

module.exports = {
    getOrders_Products,
    getOrders_Users,
    getAllOrders,
    postOrder,
};
