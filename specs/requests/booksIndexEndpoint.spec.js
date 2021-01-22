const app = require('../../app')
const supertest = require('supertest')
const { expect } = require('chai')

let server, request, response

before((done) => {
  server = app.listen(done)
  request = supertest.agent(server)
})

after((done) => {
  server.close(done)
})

describe('GET /books', () => {
  beforeEach(async () => {
    response = await request.get('/books')
  })
  it('is expected to respond with 200', () => {
    expect(response.status).to.equal(200)
  })

  it('is expected to return index of books', () => {
    const expectedResponse = {
      books: [
        { title: 'Learn NodeJS with Thomas', author: 'T Ochman' },
        { title: 'Learn Sequelize with Thomas', author: 'T Ochman' },
      ],
    }
    expect(response.body).to.eql(expectedResponse)
  })
})
