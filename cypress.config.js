const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g7q3ms',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://example.cypress.io'
  },
});
