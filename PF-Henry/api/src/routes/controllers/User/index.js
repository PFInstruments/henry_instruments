const e = require('express');
const { Users, Order } = require('../../../db');
const { use } = require('../../User');

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
};