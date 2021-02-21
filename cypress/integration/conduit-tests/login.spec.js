describe('Conduit App - Sign In', () => {
    it('should allow to sign in', () => {
        cy.visit('http://react-redux.realworld.io/#/login');
        cy.get('input[type="email"]').type('fivak47096@mayhco.com');
        cy.get('input[type="password"]').type('admin123');
        cy.get('.btn-lg').contains('Sign in').should('be.visible').click();

        cy.get('.active').should('be.visible').contains('Your Feed');
        cy.get('a[href="#@prime"]').should('be.visible').contains("prime");
    });
})
