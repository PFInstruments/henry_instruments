const { Store } = require("../../../db");

module.exports = {
    listStores: async () => {
        const stores = await Store.findAll();
        return stores;
    },
    postStore: async (
        carrousel,
        icon,
        phoneNumber,
        email,
        adress,
        country,
        city,
        state,
        zip,
        instagram,
        twitter,
        facebook
    ) => {
        const creatStore = await Store.create({
            carrousel: carrousel,
            icon: icon,
            phoneNumber: phoneNumber,
            email: email,
            adress: adress,
            country: country,
            city: city,
            state: state,
            zip: zip,
            instagram: instagram,
            twitter: twitter,
            facebook: facebook,
        });
        return creatStore;
    },
    deleteStore: async () => {
        await Store.destroy({
            where: { id: 1 },
        });
        return "Store eliminada";
    },
    updateStore: async (storeUpdate) => {
        try {
            await Category.update(
                {
                    carrousel: storeUpdate.carrousel,
                    icon: storeUpdate.icon,
                    phoneNumber: storeUpdate.phoneNumber,
                    email: storeUpdate.email,
                    adress: storeUpdate.adress,
                    country: storeUpdate.country,
                    city: storeUpdate.city,
                    state: storeUpdate.state,
                    zip: storeUpdate.zip,
                    instagram: storeUpdate.instagram,
                    twitter: storeUpdate.twitter,
                    facebook: storeUpdate.facebook,
                },
                {
                    where: { id: storeUpdate.id },
                }
            );
        } catch (error) {
            res.send(error.message);
        }
    },
};
