const { Products, Categorie, Order, Trademarks } = require('../../../db');
const fs = require("fs");

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
        const findTrademark= await Trademarks.findOne({
            where: { name: trademark }
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
        await productCreated.setCategorie(findCategory);
        await productCreated.setTrademarks(findTrademark);
        return await Products.findOne(
            {
                where: { name: name },
                include: [
                    { model: Categorie },
                    { model: Trademarks }
                ]
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
    },
    createMultipleProducts: async () => {
        const products = fs.readFile('products.txt', (err, data) => { 
            if (err) throw err;
            console.log(data.toString) 
        });
        // await Products.bulkCreate(products);
        return "Productos creados";
    },
}