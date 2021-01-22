
const models = require('../models')
const booksController = {
  async index(request, response) {
    const collection = 
      await models.Book.findAll({
        include: [
          {
            model: models.Author,
            as: 'author',
            attributes: { exclude: ['createdAt', 'updatedAt', 'id']}
          }
        ],
        attributes: ['title']
      })
    //   books: [
    //     { title: 'fun with node', author: 'T ochman' },
    //     { title: 'Fun with node Part II', author: 't ochman' },
    //   ],
    // }
    response.json({books: collection})
    },
  show() {
    
  }
}

module.exports = booksController
