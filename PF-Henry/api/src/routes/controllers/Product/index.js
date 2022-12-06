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
                where: { id: id }
            }
        );
        return await product;
    },
    createProduct: async (name, image, description, price, stock, category) => {
        const findCategory = Categorie.findOne({
            where: { name: category }
        })
        const productCreated = await Products.create({
            name: name,
            image: image,
            description: description,
            price: price,
            stock: stock,
        });
        await productCreated.addCategorie(findCategory)
        return await Products.findOne(
            {
                where: { name: name },
                include: [{ model: Categorie }]
            }
        );
    },
    updateProduct: async (obj) => {
        let product = await Products.findOne(
            {
                where: { id: obj.id }
            }
        );
        product = await Products.update(
            {
                name: obj.name,
                image: obj.image,
                description: obj.description,
                price: obj.price,
                stock: obj.stock
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