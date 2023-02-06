
describe('example to-do app', () => {
    let email = Cypress.env('email')
    let password = Cypress.env('password')
    let userName = Cypress.env('userName')
    let title = titleGenerator(10)
    // let description = Cypress.env('postDescription')
    // let body = "This is the article body"
    before(() => {
        cy.visit('/#/login')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('input[placeholder="Email"]').type("rabab.diab.07@gmail.com")
        cy.get('input[placeholder="Password"]').type("111")
        
       // cy.get('form').submit()
       // cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    })

    it.only('Title can not be blank', () => {
        cy.get(':nth-child(2) > .form-control').type(Cypress.env('postDescription'))
        cy.get(':nth-child(3) > .form-control').type(Cypress.env('postBody'))
        cy.get(':nth-child(4) > .form-control').type(Cypress.env('postTag'))
        cy.get('button[type="button"]').click()
        //cy.get('.error-messages > li').should('contain', "title can't be blank")
        cy.get('.error-messages > li').then((element) => {
            cy.get(element).should('contain', "title can't be blank")
            cy.reload()

        })
    })

    it('desription can not be blank', () => {
        cy.get(':nth-child(1) > .form-control').type(title)
        cy.get(':nth-child(3) > .form-control').type(Cypress.env('postBody'))
        cy.get(':nth-child(4) > .form-control').type(Cypress.env('postTag'))
        cy.get('button[type="button"]').then((element) => {
            cy.get(element).click()
            cy.get('.error-messages > li').then((element) => {
                cy.get(element).should('contain', "description can't be blank")
                cy.reload()
            })
        })

    })
    it('body can not be blank', () => {
        cy.get(':nth-child(1) > .form-control').type(title)
        cy.get(':nth-child(2) > .form-control').type(Cypress.env('postDescription'))
        cy.get(':nth-child(4) > .form-control').type(Cypress.env('postTag'))
        cy.get('.btn').then((element) => {
            cy.get(element).click()
            cy.get('.error-messages > li').then((element) => {
                cy.get(element).should('contain', "body can't be blank")
                cy.reload()
            })
        })

    })


    it('Create new post', () => {
        cy.get(':nth-child(1) > .form-control').type(title)
        cy.get(':nth-child(2) > .form-control').type(Cypress.env('postDescription'))
        cy.get(':nth-child(3) > .form-control').type(Cypress.env('postBody'))
        cy.get(':nth-child(4) > .form-control').type(Cypress.env('postTag'))
        cy.get('button[type="button"]').click()
        cy.url().should('contain', "#/article")
        cy.get('.container>h1').should('contain', title)
        cy.get('.info>a').should('contain', userName)
        cy.get('.info>a').should('contain', userName)
        cy.get('.col-xs-12>div>p').should('contain', Cypress.env('postBody'))
        cy.reload()

    })

    function titleGenerator(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

})