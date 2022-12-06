const express = require('express');
const router = express.Router();
const controllers = require('./controllers/User');

router.get('/', async (req, res, next) => {
    const users = await controllers.getUsers();
    res.status(200).json({ results: users });
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
        const user = await controllers.getUser(id);
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({error: err.message});
    }
});

module.exports = router;