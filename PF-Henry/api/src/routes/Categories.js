const express = require("express");
const router = express.Router();
const controllers = require("./controllers/Categories");

router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
        const categories = await controllers.listCategories(name);
        res.status(200).json({ categories: categories });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post("/", async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ info: "falta ingresar un dato" });
    }
    try {
        controllers.postCategory(name);
        res.status(200).send("Categoria agregado");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    let changeCategory = {
        id,
        name,
    };
    try {
        let message = await controllers.modifyCategory(changeCategory);
        return res.status(200).json(message);
    } catch (error) {
        res.status(404).send({ error: "Categoria no cambiada" });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json({details: await controllers.deleteCategory(id)});
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post("/bulkcreate", async (req, res) => {
    try {
        res.status(201).send(await controllers.createMultipleCategories());
    } catch (err) {
        res.status(404).send(err.message);
    }
});

module.exports = router;
