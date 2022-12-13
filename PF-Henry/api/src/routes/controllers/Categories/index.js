const { Categorie, Product } = require('../../../db');

module.exports = {
    listCategories: async (name) => {
        if (name) {
            const categories = await Categorie.findOne({where: {name: name}, include: Product});
            return categories;
        }
        const categories = await Categorie.findAll({include: Product}, {where: {Categorie: name}});
        return categories;
    },
    postCategorie: async (name) => {
        const createCategorie = await Categorie.create({name: name});
    }, 
    createMultipleCategories: async () => {
        const categories = [
            {name: "Digital Keyboards"},
            {name: "Electric Guitars"},
            {name: "Digital Drums"},
            {name: "Electric Violin"},
            {name: "Acoustic Violin"},
            {name: "Electric Bass"},
            {name: "Electro-Acoustic Guitars"},
        ];

        await Categorie.bulkCreate(categories);
        return "Categorias creadas";
    },
}