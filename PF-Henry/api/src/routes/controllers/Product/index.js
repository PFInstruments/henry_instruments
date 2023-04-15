const { Sequelize } = require("sequelize");
const { Product, Category, Order, Review } = require("../../../db");
const cloudinary = require("../../../Utils/cloudinary");
const bulkProducts = require("../../../Utils/variables");

module.exports = {
    listProducts: async () => {
        const allProducts = Product.findAll({
            include: [
                {
                    model: Category,
                },
                {
                    model: Order,
                },
                {
                    model: Review,
                },
            ],
        });
        return allProducts;
    },
    product: async (id) => {
        const product = await Product.findOne({
            where: { id: id },
            include: [{ model: Category }, { model: Review }],
        });
        return await product;
    },
    createProduct: async (
        name,
        image,
        description,
        price,
        stock,
        category,
        brand,
        model,
        active
    ) => {
        try {
            const findCategory = await Category.findOne({
                where: { name: category },
            });
            const result = await cloudinary.uploader.upload(image, {
                folder: "Products",
            });
            const product = await Product.create({
                name,
                image: result.url,
                description,
                price,
                stock,
                brand,
                model,
                active,
            });
            await product.setCategory(findCategory);
            console.log(product);
            res.send(product);
        } catch (error) {
            console.log(error);
        }
    },
    updateProduct: async (obj) => {
        const findCategory = await Category.findOne({
            where: { name: obj.category },
        });

        let product = await Product.findOne({
            where: { id: obj.id },
        });
        await product.setCategory(findCategory);

        product = await Product.update(
            {
                name: obj.name,
                image: obj.image,
                description: obj.description,
                price: obj.price,
                stock: obj.stock,
                model: obj.model,
                brand: obj.brand,
                active: obj.active,
            },
            {
                where: {
                    id: obj.id,
                },
            }
        );
        return "Producto modificado";
    },
    updateStock: async (id, quantity) => {
        if (!id || !quantity) throw new Error("insufficient arguments");
        const product = await Product.findOne({ where: { id } });
        let stock = product.stock - quantity;
        const productStock = await Product.update(
            {
                stock,
            },
            {
                where: { id },
            }
        );
        return productStock;
    },
    deleteProduct: async (id) => {
        await Product.destroy({
            where: { id: id },
        });
        return "Producto eliminado";
    },
    createMultipleProducts: async () => {
        bulkProducts.map(async (p) => {
            try {
                const findCategory = await Category.findOne({
                    where: { name: p.category },
                });
                const result = await cloudinary.uploader.upload(p.image, {
                    folder: "Products",
                });
                const product = await Product.create({
                    name: p.name,
                    image: result.url,
                    description: p.description,
                    price: p.price,
                    stock: p.stock,
                    model: p.model,
                    brand: p.brand,
                    catehory: p.category,
                    active: p.active,
                });
                await product.setCategory(findCategory);
                console.log(product);
                res.send(product);
            } catch (error) {
                console.log(error);
            }
        });
        return "Productos creados";
    },
};
