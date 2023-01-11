const { Sequelize } = require("sequelize");
const { Review, Product, User } = require("../../../db");

const getAllReview_Product = async (productId) => {
    const reviews = await Review.findAll({
        include: [
            {
                model: Product,
                where: {
                    id: productId,
                },
                attributes: ["id"],
            },
            {
                model: User,
                attributes: ["id", "name"],
            },
        ],
    });
    return reviews;
};

const getScore_Product = async (productId) => {
    const reviews = await Review.findAll({
        include: {
            model: Product,
            where: {
                id: productId,
            },
            attributes: ["id"],
        },
        group: ["productId", "product.id"],
        attributes: [[Sequelize.fn("AVG", Sequelize.col("score")), "rating"]],
    });
    return reviews;
};

const postReview = async (user_id, image, name, score, comment, productId) => {
    const newReview = await Review.create({
        user_id: user_id,
        image: image,
        name: name,
        score: score,
        comment: comment,
    });
    const findProduct = await Product.findOne({
        where: { id: productId },
    });
    await findProduct.addReview(newReview);
    return await newReview;
};

const deleteReview = async (id) => {
    await Review.destroy({
        where: { user_id: id },
    });
    return "Review eliminado";
}

module.exports = {
    postReview,
    getScore_Product,
    getAllReview_Product,
    deleteReview,
};
