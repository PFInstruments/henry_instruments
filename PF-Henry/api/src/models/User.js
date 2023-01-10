const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.STRING,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            nickname: {
                type: DataTypes.STRING,
                allownull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            picture: {
                type: DataTypes.STRING,
                allownull: true,
            },
            connection: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            admin: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            updated_at: {
                type: DataTypes.DATE,
                allownull: true,
            },
            last_login: {
                type: DataTypes.DATE,
                allownull: true,
            },
            logins_count: {
                type: DataTypes.INTEGER,
                allownull: true,
            },
            phone_number: {
                type: DataTypes.STRING,
                allownull: true,
            },
            zip: {
                type: DataTypes.STRING,
                allownull: true,
            },
            country: {
                type: DataTypes.STRING,
                allownull: true,
            },
            province: {
                type: DataTypes.STRING,
                allownull: true,
            },
            city: {
                type: DataTypes.STRING,
                allownull: true,
            },
            adress: {
                type: DataTypes.STRING,
                allownull: true,
            },
            wishlist: {
                type: DataTypes.ARRAY(DataTypes.JSONB),
                allownull: true,
            },
        },
        {
            timestamps: false,
        }
    );
};
