const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g7q3ms',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://example.cypress.io'
  },
});
