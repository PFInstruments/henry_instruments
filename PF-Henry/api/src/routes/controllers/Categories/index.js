const { Category, Product } = require("../../../db");

module.exports = {
    listCategories: async (name) => {
        if (name) {
            const categories = await Category.findOne({
                where: { name: name },
                include: Product,
            });
            return categories;
        }
        const categories = await Category.findAll(
            { include: Product }
            //   { where: { Categories: name } }
        );
        return categories;
    },
    postCategory: async (name) => {
        const createCategory = await Category.create({ name: name });
        return createCategory;
    },
    createMultipleCategories: async () => {
        const categories = [
            { name: "Digital Keyboards" },
            { name: "Electric Guitars" },
            { name: "Digital Drums" },
            { name: "Electric Violin" },
            { name: "Acoustic Violin" },
            { name: "Electric Bass" },
            { name: "Electro-Acoustic Guitars" },
        ];

        await Category.bulkCreate(categories);
        return "Categorias creadas";
    },
};
