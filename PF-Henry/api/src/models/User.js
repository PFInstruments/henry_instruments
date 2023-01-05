const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("user", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "El nombre solo puede contener letras",
                },
                len: {
                    args: [3, 255],
                    msg: "El nombre tiene que tener entre 3 y 255 caracteres",
                },
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "El nombre solo puede contener letras",
                },
                len: {
                    args: [3, 255],
                    msg: "El nombre tiene que tener entre 3 y 255 caracteres",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: {
                msg: "El email ingresado ya esta registrado",
            },
            validate: {
                isEmail: {
                    args: true,
                    msg: "El campo email tiene que ser un correo valido",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [7, 42],
                    msg: "La contraseña debe tener entre 7 y 42 caracteres.",
                },
            },
        },
        email_Verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        created_auth0: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
};
