Given('User launches Conduit Application',() => {
    cy.visit('http://react-redux.realworld.io/#/login');
});

When('User enters',(datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('input[type="email"]').type(element.username);
        cy.get('input[type="password"]').type(element.password); 
    });
});

And('User clicks on Sign In button', () => {    
    cy.get('.btn-lg').contains('Sign in').should('be.visible').click();
});


Then('{string} should be displayed', (content) => {
    cy.contains(content, {timeout:10000}).should('be.visible');
});