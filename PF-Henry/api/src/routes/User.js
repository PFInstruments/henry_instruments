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
    const {name, phone_num, surname, email, password, adress, isAdmin} = req.body;
    try{
        res.status(201).json({details: await controllers.createUser(name, surname, phone_num, email, password, adress, isAdmin)});
    }catch(err){
        res.status(404).json({error: err.message});
    }
});

router.put('/:id', async(req, res, next) => {
    const { id } = req.params;
    const { name, surname, phone_num, email, password, adress, isAdmin } = req.body;
    try{
        const request = await controllers.updateUser(id, name, surname, phone_num, email, password, adress, isAdmin);
        res.status(201).json({details: request});
    } catch(err){
        res.status(404).json({error: err.message});
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        const user = await controllers.getUser(id);
        if(user){
            user.destroy();
            res.status(200).send(user);
        }else throw Error("No se proporsiono Id de usuario")
    } catch(err){
        res.status(404).send(err.message);
    }
});

router.post('/bulkcreate', async(req, res, next) => {
    try{
        res.status(201).send(await controllers.createMultipleUsers());
    } catch(err){
        res.status(404).send(err.message);
    }
});

module.exports = router;