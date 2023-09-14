/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Curiers', [
      {
        login: '123',
        name: 'Djamshut',
        password: '123',
        telephone: '123-123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: '456',
        name: 'Ravshan',
        password: '456',
        telephone: '456-456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: '789',
        name: 'Nurbek',
        password: '789',
        telephone: '789-789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Curiers', null, {});
  },
};
