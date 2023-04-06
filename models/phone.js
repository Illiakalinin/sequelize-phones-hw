'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      manufacturedYear: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          isBefore: new Date().toISOString(),
        },
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cpu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      displaySize: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      nfc: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};
