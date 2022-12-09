const { DataTypes } = require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('review',{
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },{timestamps: false});
};