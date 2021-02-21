describe('File upload', () => {
    it('should allow file upload', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
        const fileName = 'sample-data.json';

        cy.get('input[name="upfile"]').attachFile(fileName);
        cy.get('input[value="Press"]').click();

        cy.contains("You've uploaded a file. Your notes on the file were:");
    });
})
