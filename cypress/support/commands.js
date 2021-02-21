// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('loginUsing', (email, password) => { 
    cy.visit('/#/login');
    cy.title().should('eql','Conduit');
    cy.location('protocol').should('eql','https:');
    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type(email);
        cy.get('input[type="password"]').type(password);
        cy.get('.btn-lg').contains('Sign in').should('be.visible').click();
    });
    cy.contains('Your Feed', {timeout:10000}).should('be.visible');
 });

 
Cypress.Commands.add('logout', (email, password) => { 
    cy.get('.nav-link',{timeout:10000}).contains('Settings').click();
    cy.get('.btn-outline-danger').should('contain','Or click here to logout.').click();
});