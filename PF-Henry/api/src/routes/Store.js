const express = require('express');
const router = express.Router();
const controllers = require('./controllers/Store');

router.get('/', async (req, res, next) => {
    const stores = await controllers.listStores();
    return res.status(200).json({ stores: stores });
});

router.post('/', async (req, res) => {
    const { banner, logo, phoneNumber, email, adress, country, city, state, zip } = req.body;
    if (!banner || !logo || !phoneNumber || !email || !adress || !country || !city || !state || !zip) {
        res.status(400).json({ info: 'falta ingresar un dato' })
    }
    try {
        controllers.postStore(banner, logo, phoneNumber, email, adress, country, city, state, zip);
        res.status(200).send('Tienda creada');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { banner, logo, phoneNumber, email, adress, country, city, state, zip } = req.body;

    let changeStore = {
        id: parseInt(id),
        banner,
        logo,
        phoneNumber,
        email,
        adress,
        country,
        city,
        state,
        zip
    }

    if (!changeStore.banner) {
        delete changeStore.banner
    }
    if (!changeStore.logo) {
        delete changeStore.logo
    }
    if (!changeStore.phoneNumber) {
        delete changeStore.phoneNumber
    }
    if (!changeStore.email) {
        delete changeStore.email
    }
    if (!changeStore.adress) {
        delete changeStore.adress
    }
    if (!changeStore.country) {
        delete changeStore.country
    }
    if (!changeStore.city) {
        delete changeStore.city
    }
    if (!changeStore.state) {
        delete changeStore.state
    }
    if (!changeStore.zip) {
        delete changeStore.zip
    }
    try {
        let store =
            controllers.listStores().modifyStore(changeStore);
        res.status(200).send(store)
    } catch (error) {
        res.status(404).send({ error: 'Store no cambiada' })
    }
})

module.exports = router;