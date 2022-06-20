/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';
import { addBoardPage } from '../page_objects/addBoard';
const faker = require ('@faker-js/faker')

describe('adding board', ()=>{
    let boardsTitle = faker.random.alpha({ count: 5})
    before('login', ()=>{
        cy.visit('/login')
        loginPage.login(
            Cypress.env('VALID_USER_EMAIL'),
            Cypress.env('VALID_USER_PASSWORD')
        )
        cy.url().should('not.include', '/login')
    })
    it('add board', ()=>{
        cy.intercept({
            method: 'POST',
             url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
           }).as('addBoard')

        cy.visit('/')
        addBoardPage.addingBoard(boardsTitle)
        cy.wait('@addBoard').then(interseption=>{
            expect(interseption.response.statusCode).to.exist
            expect(interseption.response.statusCode).eq(201)
          })
        cy.url().should('include', '/boards')
        addBoardPage.backlogBar.should('be.visible')
           .and('have.css', 'color', 'rgb(255, 255, 255)')
        addBoardPage.backlogTitle.should('be.visible')
           .and('have.text', 'Backlog')
           .and('have.css', 'color', 'rgb(255, 255, 255)')
        addBoardPage.boardLength.should('have.length', 1)
    })

})

