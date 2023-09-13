'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'foodId' })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};