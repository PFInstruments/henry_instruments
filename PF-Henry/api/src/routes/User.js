const express = require('express');
const router = express.Router();
const controllers = require('./controllers/User');

router.post('/auth0/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const userLogIn = await controllers.getLogIn(id)
        res.status(200).json(userLogIn);
    } catch (error) {
        console.log(error)
        res.status(404).send(error.message);
    };
});

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

router.put('/:id', async(req, res) => {
    const { id } = req.params;
    const obj = req.body;
    try{
        const request = await controllers.updateUser(id, obj);
        res.status(201).json({details: request});
    } catch(err){
        res.status(404).json({error: err.message});
    }
});

router.put('/changeRole/:id', async(req, res) => {
    const {id} = req.params;
    const {admin} = req.body;
    try {
        const request = await controllers.changeRole(id, admin);
        res.status(200).json({details: request});
    } catch (error) {
        res.status(404).json({error: error.message});        
    }
});

router.put('/db/:id', async(req, res) => {
    const { id } = req.params;
    const { 
        phone_number,
        zip,
        country,
        province,
        city,
        adress,
        wishlist 
    } = req.body;
    try {
        const updatedUser = await controllers.updateDBUser(
            id,
            phone_number,
            zip,
            country,
            province,
            city,
            adress,
            wishlist );
        res.status(200).json(updatedUser);
    }catch(err) {
        res.status(404).send(err.message);
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        const user = await controllers.getUser(id);
        await controllers.deleteUserAuth0(id);
        if(user){
            user.destroy();
            res.status(200).send(user);
        }else throw Error("Not found.")
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