describe('get users tests', () => {

  it('get users', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': Cypress.env('accessToken')
      }
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200)
      expect(response.body[0].email).to.be.exist

    })
  })

  it('get specific user', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/' + Cypress.env('userId'),
      headers: {
        'authorization': Cypress.env('accessToken')
      }
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200)
      expect(response.body.email).to.eq(Cypress.env('userEmail'))
      expect(response.body.gender).to.eq(Cypress.env('userGender'))
      expect(response.body.name).to.eq(Cypress.env('userName'))
      expect(response.body.status).to.eq(Cypress.env('userStatus'))

    })
  })

  it('get invalid user by id', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/11111111',
      failOnStatusCode: false,
      headers: {
        'authorization': Cypress.env('accessToken')
      }
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(404)
      expect(response.body.message).to.eq("Resource not found")
    })
  })
})