'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'foodId' })
    }
  }
  Food.init({
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};