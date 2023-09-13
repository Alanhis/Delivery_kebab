/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: '111',
        name: 'Anton',
        password: '111',
        telephone: '11-11-11',
        coordinateX: '55.760221',
        coordinateY: '37.618561',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: '222',
        name: 'Oleg',
        password: '222',
        telephone: '22-22-22',
        coordinateX: '55.786546',
        coordinateY: '37.681479',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: '333',
        name: 'Serega dominator',
        password: '333',
        telephone: '33-33-33',
        coordinateX: '55.896196',
        coordinateY: '37.441000',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
