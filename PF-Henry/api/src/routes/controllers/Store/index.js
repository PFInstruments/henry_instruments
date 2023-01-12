const { Store } = require("../../../db");
const cloudinary = require("../../../Utils/cloudinary");

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
            const result = await cloudinary.uploader.upload(storeUpdate.icon, {
                folder: "Products",
            });
            await Store.update(
                {
                    carrousel: storeUpdate.carrousel,
                    icon: result.url,
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
            res.send(error);
        }
    },
};
