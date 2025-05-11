describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms');
    });

    it('subscribe form', () => {
        // success
        cy.contains(/testing forms/i);
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
        cy.get('@subscribe-input').type('lwollnikowski@danhoss.com');
        cy.contains(/successfully subbed: lwollnikowski@danhoss.com/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/successfully subbed: lwollnikowski@danhoss.com/i).should('exist');
        cy.wait(3000);
        cy.contains(/successfully subbed: lwollnikowski@danhoss.com/i).should('not.exist');

        // invalid
        cy.get('@subscribe-input').type('test@test.io');
        cy.contains(/invalid email: test@test.io/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/invalid email: test@test.io/i).should('exist');
        cy.wait(3000);
        cy.contains(/invalid email: test@test.io/i).should('not.exist');

        // fail
        cy.contains(/fail!/i).should('not.exist');
        cy.getDataTest('subscribe-button').click();
        cy.contains(/fail!/i).should('exist');
        cy.wait(3000);
        cy.contains(/fail!/i).should('not.exist');
    });
});
