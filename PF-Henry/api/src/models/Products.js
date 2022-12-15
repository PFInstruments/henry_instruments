const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('products', {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hidden: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }, 
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{timestamps:false})
}