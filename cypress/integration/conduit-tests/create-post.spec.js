describe('Conduit App - New Post', () => {
    it('should allow to sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.title().should('eql','Conduit');
        cy.location('protocol').should('eql','https:');

        cy.get('input[type="email"]').type('fivak47096@mayhco.com');
        cy.get('input[type="password"]').type('admin123');
        cy.get('.btn-lg').contains('Sign in').should('be.visible').click();

        cy.contains('Your Feed', {timeout:10000}).should('be.visible');
    });

    it('should allow creating new post', () => {
        cy.contains('New Post').click();
        cy.get('input[placeholder="Article Title"]').type('Sample Title Text');
        cy.get('input[placeholder="What\'s this article about?"]').type('Article About Automation');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Sample text - Automation Summary');
        cy.get('input[placeholder="Enter tags"]').type('Test');
        cy.contains('Publish Article').click();

        cy.url().should('include','#/article');
        cy.contains('Edit Article').should('be.visible');
    });


    it('should allow mark-unmark favorite post', () => {
        cy.get('.nav-link').contains('prime').click();
        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart',{multiple:true}).first().click();

        cy.contains('Favorited Articles').click();
        cy.url().should('include','@prime/favorites');
        cy.get('.ion-heart',{multiple:true},{timeout:5000}).first().click();
        cy.reload();
        
        cy.contains('No articles are here... yet.').should('be.visible');
        cy.go('back');
    });
});
