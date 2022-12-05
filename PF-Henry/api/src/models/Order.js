const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('order', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false
        }
    );
};