const { Category, Product } = require('../../../db');

module.exports = {
    listCategories: async (name) => {
        if (name) {
            const categories = await Category.findOne({where: {name: name}, include: Product});
            return categories;
        }
        const categories = await Category.findAll({include: Product}, {where: {category: name}});
        return categories;
    },
    postCategory: async (name) => {
        const category = await Category.create({
            name: name
        });
    }
}