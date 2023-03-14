const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://test.raiser.work/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
