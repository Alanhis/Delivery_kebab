'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coordinateX: {
        type: Sequelize.STRING
      },
      coordinateY: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      foodId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Items',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      curierId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Curiers',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};