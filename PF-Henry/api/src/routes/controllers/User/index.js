require('dotenv').config();
const e = require("express");
const axios = require('axios');
const { User, Order } = require("../../../db");

const { TOKEN, AUTH0_DOMAIN, REACT_APP_BASEURL } = process.env;

module.exports = {
    getLogIn: async (id) => {
        const auth0User =  await axios.get(`https://${AUTH0_DOMAIN}/api/v2/users/${id}`,  {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        const find = await User.findOne({
            where: {
                id: auth0User.data.user_id,
            }
        });
         const create = find? find : await User.create({
                id: auth0User.data.user_id,
                name: auth0User.data.name,
                nickname: auth0User.data.nickname,
                email: auth0User.data.email,
                picture: auth0User.data.picture,
                connection: auth0User.data.identities[0].provider,
                role: 'user',
                created_at: auth0User.data.created_at,
                updated_at: auth0User.data.updated_at,
                last_login: auth0User.data.last_login,
                logins_count: auth0User.data.logins_count,
        });
        await axios.post(`${REACT_APP_BASEURL}/mail/welcome`, {username: auth0User.data.email});
        return create;
    }, 

    deleteUserAuth0: async (id) => {
        const auth0User =  await axios.delete(`https://${AUTH0_DOMAIN}/api/v2/users/${id}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        return auth0User.data;
    },

    getUsers: async () => {
        const users = await User.findAll({
            include: [{ model: Order }],
        });
        if (!users.length) throw new Error("There are no users");
        return users;
    },

    getUser: async (id) => {
        const user = await User.findByPk(id, {
            include: {
                model: Order,
            },
        });
        if (!user) throw new Error("Not found.");
        return user;
    },
    createUser: async (
        name, 
        surname,
        phone_num,
        email,
        password,
        adress,
        isAdmin = false
    ) => {
        if ((!name || !phone_num || !email || !password || !adress || !surname))
            throw new Error("insufficient arguments to create User");
        await User.create({
            name,
            surname,
            phone_num,
            email,
            password,
            adress,
            isAdmin,
        });
        return "User created successfully";
    },
    updateUser: async (id, obj) => {
        let auth0User = await axios.patch(`https://${AUTH0_DOMAIN}/api/v2/users/${id}`, obj,
         {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        await User.update(
            {
                name: auth0User.data.name , 
                picture: auth0User.data.picture, 
                nickname: auth0User.data.nickname, 
                email: auth0User.data.email, 
                connection: auth0User.data.connection, 
                created_at: auth0User.data.created_at, 
                updated_at: auth0User.data.created_at,
                last_login: auth0User.data.last_login,
            },
            {
                where: {
                    id,
                },
            }
            );
            let user = await User.findOne({
                where: { id },
            });
        return await user
    },
    changeRole: async (id, role) => {
        await User.update(
            {
                role: role
            },
            {
                where: {id}
            }
        );
        let user = await User.findOne({
            where: {id}
        });
        return await user;
    },
    createMultipleUsers: async () => {
        const users = [
            {
                name: "Benja",
                surname: "Grupo",
                email: "correoloco@benja.com",
                phone_num: "123789",
                adress: "este es mi adress loco",
                password: "asdassd",
                isAdmin: true,
            },
            {
                name: "Andy",
                surname: "Grupo",
                email: "correoloco@andy.com",
                phone_num: "123789",
                adress: "este es mi adress loco",
                password: "asdassd",
                isAdmin: true,
            },
            {
                name: "Antonio",
                surname: "Grupo",
                email: "correoloco@antonio.com",
                phone_num: "123789",
                adress: "este es mi adress loco",
                password: "asdassd",
            },
        ];
        await Users.bulkCreate(users);
        return "Usuarios creados";
    },
};
