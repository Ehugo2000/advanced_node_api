'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Learn NodeJS with Thomas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Learn Sequelize with Thomas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {},
}
