const e = require('express');
const { Trademarks, Products } = require('../../../db');

module.exports = {
    getTrademarks: async () => {
        const trademarks = await Trademarks.findAll();
        return trademarks;
    },
    getTrademark: async (name) => {
        const trademark = Trademarks.findOne({
            where: { name },
            include: [
                {
                    model: Products
                }
            ]
        });
        if(!trademark) throw new Error("La marca ingresada no esta registrada.");
        return trademark;
    },
    createTrademark: async (name) => {
        if(!name) throw new Error("Faltan argumentos para crear marca comercial.");
        await Trademarks.create({name});
        return "Marca comercial creada.";
    },
};