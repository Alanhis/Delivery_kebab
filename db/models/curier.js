'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curier extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'curierId' })
    }
  }
  Curier.init({
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Curier',
  });
  return Curier;
};