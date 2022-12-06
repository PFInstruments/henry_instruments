const { User, Store } = require('../../../db');

module.exports = {
    listStores: async () => {
        const stores = await Store.findAll();
        return stores;
    },
    postStore: async (banner, logo, phoneNumber, email, adress, country, city, state, zip) => {
        const creatStore = Store.create({
            banner: banner,
            logo: logo,
            phoneNumber: phoneNumber,
            email: email,
            adress: adress,
            country: country,
            city: city,
            state: state,
            zip: zip
        });
    }
}