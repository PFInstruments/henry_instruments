const { Sequelize } = require('sequelize');
const { Review, Products, Users } = require('../../../db');

const getAllReview_Product = async(productId)=>{
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
                attributes: ['id','name',]
            }
        ]
    });
    return reviews;
}

const getScore_Product = async(productId)=>{
    const reviews = await Review.findAll({
        include: {
            model: Products,
            where: {
                id: productId
            },
            //attributes: ['id']
        },
        group: ['productId', 'product.id'],
        attributes: [[Sequelize.fn('AVG', Sequelize.col('score')), "rating"]],
    });
    return reviews;
}

const postReview = async(score,comment,productId,userId)=>{
    const newReview = await Review.create({score: score,comment: comment});
    await newReview.setProduct(productId);
    await newReview.setUser(userId);
    return newReview;
}

module.exports={
    postReview,
    getScore_Product,
    getAllReview_Product
}