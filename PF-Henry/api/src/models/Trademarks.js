const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Trademarks', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'La marca ingresada ya fue registrada.'
            },
        }
    },
        {
            timestamps: false
        }
    );
};