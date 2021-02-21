describe('Conduit App - New Post', () => {

    Cypress.config({defaultCommandTimeout: 10000, pageLoadTimeout: 30000});

    beforeEach(function(){
        cy.fixture('login-data').then((userDetails) => {
            cy.loginUsing(userDetails.email,userDetails.password);
        });
    });

    afterEach(function(){
        cy.logout();
    })

    it('should allow creating new post', () => {
        // using alias and children
        cy.get('ul.navbar-nav').children().as('subMenus');
        cy.get('@subMenus').contains('New Post').click();

        //using first, eq-index, last
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Sample Title Text');
            cy.get('input').eq(1).type('Article About Automation');
            cy.get('textarea').eq(0).type('Sample text - Automation Summary');
            cy.get('input').last().type('Test');
            cy.contains('Publish Article').click();
        });

        cy.url().should('include','#/article');
        cy.contains('Edit Article').should('be.visible');
    });


    it('should allow mark-unmark favorite post', () => {
        // using alias and children
        cy.get('ul.navbar-nav').children().as('subMenus')
        cy.get('@subMenus').contains('prime').click();

        cy.contains('My Articles').should('be.visible');
        cy.get('.ion-heart',{multiple:true}).first().click();

        cy.contains('Favorited Articles').click();
        cy.url().should('include','@prime/favorites');

        cy.get('.btn-primary').then(($fav) =>{
            const favCount = $fav.text();
            expect(parseInt(favCount)).to.equal(1);
        }).click();
        cy.reload();

        cy.contains('No articles are here... yet.').should('be.visible');
        cy.go('back');
    });
});
