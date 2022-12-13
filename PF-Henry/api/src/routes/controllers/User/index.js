const e = require('express');
const { Users, Order } = require('../../../db');

module.exports = {
    getUsers: async ()=>{
        const users = await Users.findAll({
            include: [
                {model: Order}
            ]
        });
        if(!users.length) throw new Error("There are no users")
        return users;
    },

    getUser: async (id)=>{
        const user = await Users.findByPk(id,{
			include:{
				model: Order,
			},
		});
        if(!user) throw new Error("Not found.");
        return user;
    },
    createUser: async (name, phone_num, email, password, adress, isAdmin=false)=>{
        if(!name || !phone_num || !email || !password, !adress) throw new Error("insufficient arguments to create User");
        await Users.create({name, phone_num, email, password, adress, isAdmin});
        return "User created successfully";
    },

    updateUser: async (id, name, phone_num, email, password, adress, isAdmin=false)=>{
        let user = await Users.findOne(
            {
                where: { id }
            }
        );

        if(!name) name = user.name;
        if(!phone_num) phone_num = user.phone_num;
        if(!email) email = user.email;
        if(!password) password = user.password;
        if(!adress) adress = user.adress;
        if(!isAdmin) isAdmin = user.isAdmin;

        await Users.update({ 
            name, 
            phone_num, 
            email, 
            password, 
            adress, 
            isAdmin
        }, 
        {
            where: {
                id
            }
        });
        return "Usuario modificado"
    },
    createMultipleUsers: async ()=>{
        const users = [
            {
                name:"Benja",
                email:"correoloco@benja.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd",
                isAdmin: true,
            },
            {
                name:"Andy",
                email:"correoloco@andy.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd",
                isAdmin: true,
            },
            {
                name:"Antonio",
                email:"correoloco@antonio.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd"
            },
            {
                name:"Mari",
                email:"correoloco@mari.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd"
            },
            {
                name:"Henrique",
                email:"correoloco@henrique.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd"
            },
            {
                name:"Guille",
                email:"correoloco@guille.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd"
            },
            {
                name:"Santi",
                email:"correoloco@santi.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd"
            },
            {
                name:"Facu",
                email:"correoloco@facu.com",
                phone_num:"123789",
                adress:"este es mi adress loco",
                password:"asdassd"
            },
        ];
        await Users.bulkCreate(users);
        return "Usuarios creados";
    },
};