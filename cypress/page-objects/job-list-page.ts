export const jobPage = {
  isPageLoaded: () => cy.url().should('contain', '/'),
};
