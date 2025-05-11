describe('fundamentals test', () => {
    beforeEach(() => {
        cy.visit('/fundamentals');
    });

    it('accordion works correctly', () => {
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
        // cy.getDataTest('accordion-item-1 div[role="button"]').click();
        cy.contains(/Your tests will exist in a describe block/i).should('be.visible');
        cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
        // cy.getDataTest('accordion-item-1 div[role="button"]').click();
        cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible');
    });

    it('shows fundamentals header', () => {
        // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i);
        cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i);

        // should variant
        // cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals');
        cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals');
    });
})
