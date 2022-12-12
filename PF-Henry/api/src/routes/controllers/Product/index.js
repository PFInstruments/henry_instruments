const { Products, Categorie, Order } = require('../../../db');

module.exports = {
    listProducts: async () => {
        const products = Products.findAll({
            include: [
                {
                    model: Categorie
                },
                {
                    model: Order
                }
            ]
        });
        return products;
    },
    product: async (id) => {
        const product = await Products.findOne(
            {
                where: { id: id },
                include: [{ model: Categorie }]
            }
        );
        return await product;
    },
    createProduct: async (name, image, description, price, stock, category, trademark, model) => {
        const findCategory = await Categorie.findOne({
            where: { name: category }
        });
        const productCreated = await Products.create({
            name: name,
            image: image,
            description: description,
            price: price,
            stock: stock,
            trademark, 
            model
        });
        await productCreated.setCategorie(findCategory)
        return await Products.findOne(
            {
                where: { name: name },
                include: [{ model: Categorie }]
            }
        );
    },
    updateProduct: async (obj) => {
        const findCategory = await Categorie.findOne({
            where: { name: obj.category }
        });
        let product = await Products.findOne(
            {
                where: { id: obj.id }
            }
        );
        await product.setCategorie(findCategory)
        product = await Products.update(
            {
                name: obj.name,
                image: obj.image,
                description: obj.description,
                price: obj.price,
                stock: obj.stock,
                trademark: obj.trademark, 
                model: obj.model
            },
            {
                where: {
                    id: obj.id
                }
            }
        );
        return 'Producto modificado'
    },
    deleteProduct: async (id) => {
        await Products.destroy({
            where: { id: id }
        });
        return 'Producto eliminado';
    }
}