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
        { title: 'fun with node', author: 'T ochman' },
        { title: 'Fun with node Part II', author: 't ochman' },
      ],
    }
    expect(response.body).to.eql(expectedResponse)
  })
})
