const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    //Sí no se asigna el ID sequalize por defecto le asigna desde 1 en adelante, se puede pisar con los de la API.
    id:{  
      type: DataTypes.UUID, //UUID es un datatype de sequalize que genera un número a la zar
      allowNull: false, // en false no permite que este seteado en vacio, es obligatorio.
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    steps: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
