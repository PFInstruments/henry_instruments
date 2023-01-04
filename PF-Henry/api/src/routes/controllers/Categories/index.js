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
    deleteCategory: async (id) => {
        if(!id) throw new Error("Faltan argumentos para eliminar categoria.");
        await Category.destroy({ where: { id } });
        return "Categoria eliminada.";
    }, 
    modifyCategory: async (changeCategory) => {
        if(!changeCategory.name) throw new Error("Faltan argumentos para actualizar categoria.");
        await Category.update({
            name: changeCategory.name
        },{
            where: { id: changeCategory.id }
        });
        return "Categoria actualizada.";
    },
};
