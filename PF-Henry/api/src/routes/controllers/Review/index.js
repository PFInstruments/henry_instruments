const { Sequelize } = require('sequelize');
const { Review, Products } = require('../../../db');

const getAllReview_Product = async(productId)=>{
    const reviews = await Review.findAll({
        include: {
            model: Products,
            where: {
                id: productId
            }
        },
        group: ['productId', 'product.id'],
        attributes: [[Sequelize.fn('AVG', Sequelize.col('score')), "rating"]],
    });
    return reviews;
}

const postReview = async(score,productId,userId)=>{
    const newReview = await Review.create({score: score});
    await newReview.setProduct(productId);
    await newReview.setUser(userId);
    return newReview;
}

const putReview = async(obj)=>{

}

module.exports={
    postReview,
    getAllReview_Product,
}