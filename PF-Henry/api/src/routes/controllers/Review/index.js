const { Sequelize } = require('sequelize');
const { Review, Products, Users } = require('../../../db');

const getAllReview_Product = async (productId) => {
    const reviews = await Review.findAll({
        include: [
            {
                model: Products,
                where: {
                    id: productId
                },
                attributes: ['id']
            },
            {
                model: Users,
                attributes: ['id', 'name',]
            }
        ]
    });
    return reviews;
}

const getScore_Product = async (productId) => {
    const reviews = await Review.findAll({
        include: {
            model: Products,
            where: {
                id: productId
            },
            attributes: ['id']
        },
        group: ['productId', 'product.id'],
        attributes: [[Sequelize.fn('AVG', Sequelize.col('score')), "rating"]],
    });
    return reviews;
}

const postReview = async (image, name, score, comment, productId) => {
    const newReview = await Review.create({
        image: image,
        name: name,
        score: score,
        comment: comment
    });
    const findProduct = await Products.findOne({
        where: { id: productId }
    });
    await findProduct.addReview(newReview);
    return await newReview;
}

module.exports = {
    postReview,
    getScore_Product,
    getAllReview_Product
}