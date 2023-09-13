'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Curier, Food }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Curier, { foreignKey: 'curierId' });
      this.belongsTo(Food, { foreignKey: 'foodId' });
    }
  }
  Order.init({
    coordinateX: DataTypes.STRING,
    coordinateY: DataTypes.STRING,
    price: DataTypes.STRING,
    discount: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
    curierId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};