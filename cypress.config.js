const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://test.raiser.work/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/course_gianni/**/*.{js,jsx,ts,tsx,feature}',
    excludeSpecPattern: 'cypress/e2e/course_gianni/other/*.js',
    chromeWebSecurity: false,
    defaultCommandTimeout:10000,
    pageLoadTimeout: 120000
  },
  
});
