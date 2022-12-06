const { User } = require('../../../db');

module.exports = {
    getUsers: async ()=>{
        const users = await User.findAll();
        return users;
    },

    getUser: async (id)=>{
        const [user] = await User.findById(id);
        if(!user) throw new Error("Not found.");
        return user;
    },
};