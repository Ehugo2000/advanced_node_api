'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Authors'[
        {
          name: 'Thomas Ochman',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )

    const authors = await queryInterface.sequelize.query(
      'SELECT id from "Authors'
    )

    const authorsRows = authors[0]

    await queryInterface.bulkInsert('Books', [
      {
        title: 'Learn NodeJS with Thomas',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: authorsRows[0].id,
      },
      {
        title: 'Learn Sequelize with Thomas',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorId: authorsRows[0].id,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
    await queryInterface.bulkDelete('Authors', null, {})
  },
}
