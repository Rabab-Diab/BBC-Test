
describe('example to-do app', () => {

  let email = Cypress.env('email')
  let password = Cypress.env('password')
  let userName = Cypress.env('userName')

  beforeEach(() => {
    cy.visit('/' + '#/login')
  })


  it('login with blank data', () => {

    cy.get('form').submit()
    cy.get('.error-messages > li').should('contain', "email can't be blank")
  })

  it('login with invalid email', () => {
    cy.get('input[placeholder="Email"]').type("invalid@gmail.com")
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('form').submit()
    cy.get('.error-messages>li').should('contain', "email or password is invalid")
  })

  it('login with invalid password', () => {
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Password"]').type("123456789")
    cy.get('form').submit()
    cy.get('.error-messages>li').should('contain', "email or password is invalid")

  })

  it('login with valid email and password', () => {
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('form').submit()
    cy.get(':nth-child(4) > .nav-link').should('contain', userName)
    cy.get(':nth-child(4) > .nav-link').should('have.attr', 'href','#@'+userName)
    cy.get(':nth-child(1) > .nav-link').should('have.attr', 'href', '#')
    cy.get(':nth-child(1) > .nav-link').should('contain', 'Home')
  })


})