describe('overview test', () => {
    beforeEach(() => {
        cy.visit('/overview');
    });

    it('overview - accordion works correctly', () => {
        cy.contains(/npm install/i).should('not.be.visible');
        cy.get('[data-test="accordion-item-2"] div[role="button"]').click();
        cy.contains(/npm install/i).should('be.visible');
        cy.get('[data-test="accordion-item-2"] div[role="button"]').click();
        cy.contains(/npm install/i).should('not.be.visible');
    });

    it('shows overview title', () => {
        // cy.get('[data-test="overview-title"]').contains(/Overview & Install/i);
        cy.getDataTest('overview-title').contains(/Overview & Install/i);
    });
});
