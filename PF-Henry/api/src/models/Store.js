const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('store', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        //defaultValue: DataTypes.UUIDV4
        defaultValue: 1
    },
    carrousel: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://www.instagram.com/"
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://twitter.com/home"
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://www.facebook.com/"
    },
  },
  {
    timestamps: false
  }
  );
};