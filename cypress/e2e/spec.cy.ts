import { jobPage } from '../page-objects/job-list-page';

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('http://localhost:3000');
    jobPage.isPageLoaded();

    const url = Cypress.env('URL');

    console.log(url);

    cy.get('button').contains('Senior').first().click();
    cy.get('button').contains('Frontend').first().click();
    cy.get('#filters').should('exist');
    cy.get('#filters').children().should('have.length', 2);
  });
});
