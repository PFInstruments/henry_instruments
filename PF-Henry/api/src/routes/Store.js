const express = require("express");
const router = express.Router();
const controllers = require("./controllers/Store");

router.get("/", async (req, res, next) => {
    const stores = await controllers.listStores();
    return res.status(200).json(stores);
});

router.post("/", async (req, res) => {
    const {
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
        facebook,
    } = req.body;

    try {
        controllers.postStore(
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
        );
        res.status(200).send("Tienda creada");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const {
        carrousel,
        icon,
        phoneNumber,
        email,
        adress,
        country,
        city,
        state,
        zip,
        facebook,
        twitter,
        instagram,
    } = req.body;
    let update = {
        id,
        carrousel,
        icon,
        phoneNumber,
        email,
        adress,
        country,
        city,
        state,
        zip,
        facebook,
        twitter,
        instagram,
    };
    try {
        let change = await controllers.updateStore(update);
        res.status(200).send(change);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;
