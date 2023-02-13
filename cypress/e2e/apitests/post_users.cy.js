describe('create users tests', () => {
  let token = Cypress.env('accessToken')
  let userName = Math.random().toString(36).substring(2, 7)
  let userEmail = Math.random().toString(36).substring(2, 7) + '@fakeemail.com'

  it('create a user', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': token
      },
      body: {
        "name": userName,
        "gender": Cypress.env('userGender'),
        "email": userEmail,
        "status": Cypress.env('userStatus')
      }
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(201)
      expect(response.body.id).to.exist
      expect(response.body.email).to.eq(userEmail)
      expect(response.body.gender).to.eq("female")
      expect(response.body.name).to.eq(userName)
      expect(response.body.status).to.eq("active")
    })
  })

})