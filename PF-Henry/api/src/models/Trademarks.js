const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Trademarks', {
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