'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Order }) {
      this.hasMany(Order, { foreignKey: 'userId' })
    }
  }
  User.init({
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    telephone: DataTypes.STRING,
    coordinateX: DataTypes.STRING,
    coordinateY: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};