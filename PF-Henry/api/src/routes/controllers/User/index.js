const e = require("express");
const { User, Order } = require("../../../db");

module.exports = {
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

    updateUser: async (
        id,
        name,
        surname,
        phone_num,
        email,
        password,
        adress,
        isAdmin = false
    ) => {
        let user = await User.findOne({
            where: { id },
        });

        if (!name) name = user.name;
        if (!surname) surname = user.surname;
        if (!phone_num) phone_num = user.phone_num;
        if (!email) email = user.email;
        if (!password) password = user.password;
        if (!adress) adress = user.adress;
        if (!isAdmin) isAdmin = user.isAdmin;

        await User.update(
            {
                name,
                surname,
                phone_num,
                email,
                password,
                adress,
                isAdmin,
            },
            {
                where: {
                    id,
                },
            }
        );
        return "Usuario modificado";
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
