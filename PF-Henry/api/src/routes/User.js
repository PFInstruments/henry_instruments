const express = require('express');
const router = express.Router();
const controllers = require('./controllers/User');

router.get('/', async (req, res, next) => {
    try{
        const users = await controllers.getUsers();
        res.status(200).json({ results: users });
    }catch(err){
        res.status(404).json({error: err.message});
    }
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

router.post('/', async(req, res, next) => {
    const {name, phone_num, email, password, adress, isAdmin} = req.body;
    try{
        res.status(201).json({details: await controllers.createUser(name, phone_num, email, password, adress, isAdmin)});
    }catch(err){
        res.status(404).json({error: err.message});
    }
});

module.exports = router;