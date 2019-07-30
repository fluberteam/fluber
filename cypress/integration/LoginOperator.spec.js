import { isTSAnyKeyword } from "@babel/types";
import { getExpectedBodyHash } from "twilio/lib/webhooks/webhooks";
import { type, userInfo } from "os";

describe('My First Tests', function() {
    it('Visits Fluber', function() {
        cy.visit('localhost:3000/')   
    }),
    
    it('Finds the Home link and clicks on it', () => {
        cy.contains('Home').click()
    }),

    it('Should go to the login url', () => {
        cy.url().should('include', '/login')
    }),

    it('Finds Login user field and Types in an email for an operator user', () => {
        cy.get('.test-email')
        .type('thippy@aol.com')
        .should('have.value', 'thippy@aol.com')
    })

    it('Finds the password field and types in password', () => {
        cy.get('.test-password')
        .type('password')
    })

    

    it('Finds Login Button and clicks it, taking you to Operator Dashboard', () => {
        cy.get('.test-login')
        .click()
            
        })

})