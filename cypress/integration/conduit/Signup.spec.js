describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/' + '#/register')

  })


  it('Sign up with blank data', () => {
    cy.get('form').submit()
    cy.get('.error-messages > li').should('contain', "email can't be blank")
  })
  it('Sign up with invalid email', () => {
    let userName = makeid(7)
    cy.get('input[placeholder="Username"]').type(userName)
    cy.get('input[placeholder="Email"]').type(userName)
    cy.get('input[placeholder="Password"]').type(userName)
    cy.get('form').submit()
   

  })
  it('Sign up with valid data', () => {
    let userName = makeid(7)
    cy.get('input[placeholder="Username"]').type(userName)
    cy.get('input[placeholder="Email"]').type(userName + '@gmail.com')
    cy.get('input[placeholder="Password"]').type(userName)
    cy.get('form').submit()
    cy.get(':nth-child(4) > .nav-link').should('contain', userName)
    cy.get(':nth-child(1) > .nav-link').should('have.attr', 'href', '#')
    cy.get(':nth-child(1) > .nav-link').should('contain', 'Home')
  })

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

})