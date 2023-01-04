const { Store } = require('../../../db');

module.exports = {
    listStores: async () => {
        const stores = await Store.findAll();
        return stores;
    },
    postStore: async (carrousel, icon, phoneNumber, email, adress, country, city, state, zip) => {
        const creatStore = Store.create({
            carrousel: carrousel,
            icon: icon,
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