/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';

describe('login', ()=>{
    before('visit login page', ()=>{
        cy.visit('/login')
    })
    it('valid login', ()=>{
        cy.intercept({
           method: 'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
          }).as('validLogin')

          cy.url().should('include', '/login');
          loginPage.login(
            Cypress.env('VALID_USER_EMAIL'),
            Cypress.env('VALID_USER_PASSWORD')
          )
          cy.wait('@validLogin').then(interseption=>{
            expect(interseption.response.statusCode).to.exist
            expect(interseption.response.statusCode).eq(200)
          })
          cy.url().should('not.include', '/login')
          loginPage.navigatorBar.should('be.visible')
          loginPage.navigatorTitle.should('be.visible')
            .and('have.text', 'OrganizationsMy Organizations')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
       
    })
})