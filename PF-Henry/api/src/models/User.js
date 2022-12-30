const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("user", {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "El nombre solo puede contener letras",
                },
                notEmpty: {
                    args: true,
                    msg: "El campo nombre no puede ser caracteres vacios",
                },
                notNull: {
                    msg: "El campo nombre no puede ser nulo",
                },
                len: {
                    args: [3, 255],
                    msg: "El nombre tiene que tener entre 3 y 255 caracteres",
                },
            },
        },
        phone_num: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: {
                    args: true,
                    msg: "El numero de telefono solo puede contener numeros",
                },
                notNull: {
                    args: true,
                    msg: "El campo numero de telefono no puede estar vacio",
                },
                notEmpty: {
                    args: true,
                    msg: "El campo numero de telefono no puede ser caracteres vacios",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "El email ingresado ya esta registrado",
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: "El campo email tiene que ser un correo valido",
                },
                notNull: {
                    args: true,
                    msg: "El campo email no puede estar vacio",
                },
                notEmpty: {
                    args: true,
                    msg: "El campo email no puede ser caracteres vacios",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [7, 42],
                    msg: "La contraseña debe tener entre 7 y 42 caracteres.",
                },
                notNull: {
                    args: true,
                    msg: "El campo contraseña no puede estar vacio",
                },
                notEmpty: {
                    args: true,
                    msg: "El campo contraseña no puede ser caracteres vacios",
                },
            },
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "El campo direccion no puede estar vacio",
                },
                notEmpty: {
                    args: true,
                    msg: "El campo direccion no puede ser caracteres vacios",
                },
            },
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });
};
