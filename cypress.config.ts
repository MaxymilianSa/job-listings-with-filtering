import { defineConfig } from 'cypress';

module.exports = defineConfig({
  // The rest of the Cypress config options go here...
  projectId: 'v67qw9',
  //video: false,
  e2e: {
    //baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
