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

    it('Finds Login user field and Types in an email for an admin user', () => {
        cy.get('.test-email')
        .type('alpinetyler@gmail.com')
        .should('have.value', 'alpinetyler@gmail.com')
    })

    it('Finds the password field and types in password', () => {
        cy.get('.test-password')
        .type('password')
    })

    it('Finds Login Button and clicks it', () => {
        cy.get('.test-login')
        .click()
            
        })

    it('Finds Users link and clicks it displaying users', () => {
        cy.get('.test-availableflights')
        .click()
    })

})