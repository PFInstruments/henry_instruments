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
};