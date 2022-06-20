/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';
import { addBoardPage } from '../page_objects/addBoard';
import { deletePage} from '../page_objects/delete'

describe('delete board',()=>{
    before('login',()=>{
        cy.visit('/login')
        loginPage.login(
            Cypress.env('VALID_USER_EMAIL'),
            Cypress.env('VALID_USER_PASSWORD')
        )
        cy.wait(5000)
        cy.url().should('not.include', '/login')
        })
    it('delete',()=>{
        cy.intercept({
            method: 'DELETE',
             url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*'
           }).as('delete')

           deletePage.delete()
           cy.wait('@delete').then(interseption=>{
            expect(interseption.response.statusCode).to.exist
            expect(interseption.response.statusCode).eq(200)
          })
          cy.url().should('include', 'organizations')
          deletePage.boardLength.should('have.length', 0)
          deletePage.projectMenu.should('be.visible')



    })
    })