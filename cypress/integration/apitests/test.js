describe('get users tests', () => {

  it('get users', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'authorization': "Bearer eb0908088f5f7e0168ce9263f399885dd783695d562f97f31821b24a2ae2af6b"
      }
    }).then((response) => {
      console.log(response)
      expect(response).to.eq("xzzdcsdsa")
    })
  })

})