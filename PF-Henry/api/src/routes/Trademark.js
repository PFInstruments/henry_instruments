const express = require('express');
const router = express.Router();
const controllers = require('./controllers/Trademark');

router.get('/', async (req, res, next) => {
    try{
        const trademarks = await controllers.getTrademarks();
        res.status(200).json({ results: trademarks });
    }catch(err){
        res.status(404).json({error: err.message});
    }
});

router.get('/:name', async (req, res, next) => {
    const { name } = req.params;
    try{
        const trademark = await controllers.getTrademark(name);
        res.status(200).json(trademarks);
    }catch(err){
        res.status(404).json({error: err.message});
    }
});

router.post('/', async (req, res, next) => {
    const { name } = req.body;
    try{
        res.status(201).json({details: await createTrademark(name)});
    } catch(err){
        res.status(404).json({error: err.message});
    }
});

module.exports = router;