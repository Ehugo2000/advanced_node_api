

const booksController = {
  index(request, response) {
    const collection = {
      books: [
        { title: 'fun with node', author: 'T ochman' },
        { title: 'Fun with node Part II', author: 't ochman' },
      ],
    }
    response.json(collection)
  },
  show() {
    
  }
}

module.exports = booksController
